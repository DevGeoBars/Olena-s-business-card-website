// storage.ts

// Класс для работы с localStorage
export class Storage {
  // Получить значение
  static get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Сохранить значение
  static set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Обновить объект
  static update<T extends object>(key: string, updates: Partial<T>): void {
    const current = Storage.get<T>(key);
    if (current) {
      Storage.set(key, { ...current, ...updates });
    }
  }

  // Удалить значение
  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  // Проверить наличие
  static has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

// Создать типизированное хранилище
export function createStorage<T extends object>(initialData?: Partial<T>) {
  // Сохраняем начальные данные
  if (initialData) {
    Object.entries(initialData).forEach(([key, value]) => {
      if (!Storage.has(key)) {
        Storage.set(key, value);
      }
    });
  }

  return {
    // Получить значение
    get<K extends keyof T>(key: K): T[K] | null {
      return Storage.get<T[K]>(key as string);
    },

    // Сохранить значение
    set<K extends keyof T>(key: K, value: T[K]): void {
      Storage.set(key as string, value);
    },

    // Обновить объект
    update<K extends keyof T>(key: K, updates: Partial<T[K]>): void {
      Storage.update(key as string, updates);
    },

    // Удалить ключ
    remove<K extends keyof T>(key: K): void {
      Storage.remove(key as string);
    },

    // Проверить наличие
    has<K extends keyof T>(key: K): boolean {
      return Storage.has(key as string);
    }
  };
}
