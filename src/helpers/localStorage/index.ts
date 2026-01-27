// types.ts
export interface StorageSerializer<T> {
  serialize(value: T): string;
  deserialize(data: string): T;
}

export interface StorageOptions<T> {
  serializer?: StorageSerializer<T>;
  defaultValue?: T;
}

// Базовые типы для хранилища
export type StorageValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | StorageValue[]
  | { [key: string]: StorageValue }
  | Date
  | Set<StorageValue>
  | Map<StorageValue, StorageValue>;

// storage.ts
export class LocalStorageHelper {
  /**
   * Получить значение из localStorage
   */
  static get<T = StorageValue>(
    key: string,
    options?: StorageOptions<T>
  ): T | null {
    try {
      const item = localStorage.getItem(key);

      if (item === null) {
        return options?.defaultValue || null;
      }

      if (options?.serializer) {
        return options.serializer.deserialize(item);
      }

      // Пытаемся парсить JSON, если не получается - возвращаем как строку
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return options?.defaultValue || null;
    }
  }

  /**
   * Установить значение в localStorage
   */
  static set<T = StorageValue>(
    key: string,
    value: T,
    options?: StorageOptions<T>
  ): boolean {
    try {
      let valueToStore: string;

      if (options?.serializer) {
        valueToStore = options.serializer.serialize(value);
      } else if (typeof value === 'string') {
        valueToStore = value;
      } else {
        valueToStore = JSON.stringify(value);
      }

      localStorage.setItem(key, valueToStore);
      return true;
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
      return false;
    }
  }

  /**
   * Обновить часть объекта в localStorage
   */
  static update<T extends Record<string, StorageValue>>(
    key: string,
    updates: Partial<T> | ((current: T) => Partial<T>),
    options?: StorageOptions<T>
  ): T | null {
    try {
      const current = this.get<T>(key, options);

      if (current === null) {
        // Если значения нет, создаем новый объект с обновлениями
        const newValue = typeof updates === 'function'
          ? updates({} as T)
          : updates;
        this.set(key, newValue as T, options);
        return newValue as T;
      }

      const updatesObj = typeof updates === 'function'
        ? updates(current)
        : updates;

      const updatedValue = { ...current, ...updatesObj };
      this.set(key, updatedValue, options);

      return updatedValue;
    } catch (error) {
      console.error(`Error updating item ${key} in localStorage:`, error);
      return null;
    }
  }

  /**
   * Удалить значение из localStorage
   */
  static remove(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
      return false;
    }
  }

  /**
   * Очистить весь localStorage
   */
  static clear(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }

  /**
   * Проверить существование ключа
   */
  static has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Получить все ключи
   */
  static keys(): string[] {
    return Object.keys(localStorage);
  }

  /**
   * Получить размер хранилища в байтах
   */
  static getSize(): number {
    let total = 0;
    for (const key in localStorage) {
      if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
        const value = localStorage.getItem(key) || '';
        total += key.length + value.length;
      }
    }
    return total;
  }
}

// Типизированная обертка с поддержкой Record
export function createTypedStorage<T extends Record<string, StorageValue>>() {
  return {
    get: (key: string, defaultValue?: T) =>
      LocalStorageHelper.get<T>(key, { defaultValue }) as T,

    set: (key: string, value: T) =>
      LocalStorageHelper.set<T>(key, value),

    update: (
      key: string,
      updates: Partial<T> | ((current: T) => Partial<T>)
    ) => LocalStorageHelper.update<T>(key, updates) as T,

    remove: (key: string) => LocalStorageHelper.remove(key),

    has: (key: string) => LocalStorageHelper.has(key),
  };
}

// Альтернатива: обертка для любого типа с проверками
export function createStorage<T>() {
  return {
    get: (key: string, defaultValue?: T) =>
      LocalStorageHelper.get<T>(key, { defaultValue }) as T,

    set: (key: string, value: T) =>
      LocalStorageHelper.set<T>(key, value),

    update: <U extends Record<string, StorageValue>>(
      key: string,
      updates: Partial<U> | ((current: U) => Partial<U>)
    ) => LocalStorageHelper.update<U>(key, updates) as U,

    remove: (key: string) => LocalStorageHelper.remove(key),

    has: (key: string) => LocalStorageHelper.has(key),
  };
}

// Типизированные сериализаторы
export const DateSerializer: StorageSerializer<Date> = {
  serialize: (date: Date) => date.toISOString(),
  deserialize: (data: string) => new Date(data),
};

// Дженерик сериализаторы для Set и Map
export function createSetSerializer<T extends StorageValue>(): StorageSerializer<Set<T>> {
  return {
    serialize: (set: Set<T>) => JSON.stringify(Array.from(set)),
    deserialize: (data: string) => new Set(JSON.parse(data) as T[]),
  };
}

export function createMapSerializer<K extends StorageValue, V extends StorageValue>(): StorageSerializer<Map<K, V>> {
  return {
    serialize: (map: Map<K, V>) => JSON.stringify(Array.from(map.entries())),
    deserialize: (data: string) => new Map(JSON.parse(data) as [K, V][]),
  };
}

// Конкретные реализации для часто используемых типов
export const StringSetSerializer = createSetSerializer<string>();
export const NumberSetSerializer = createSetSerializer<number>();
export const StringMapSerializer = createMapSerializer<string, StorageValue>();
export const StringToStringMapSerializer = createMapSerializer<string, string>();