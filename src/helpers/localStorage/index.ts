export const storage = {
  // Получить значение
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  // Сохранить значение
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // Обновить объект
  update: <T extends object>(key: string, updates: Partial<T>): void => {
    const current = storage.get<T>(key);
    if (current) {
      storage.set(key, { ...current, ...updates });
    }
  },

  // Удалить значение
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  // Проверить наличие
  has: (key: string): boolean => {
    return localStorage.getItem(key) !== null;
  }
};

// Создать типизированное хранилище
export function createStorage<T extends object>(initialData?: Partial<T>) {
  // Сохраняем начальные данные
  if (initialData) {
    Object.entries(initialData).forEach(([key, value]) => {
      if (!storage.has(key)) {
        storage.set(key, value);
      }
    });
  }

  return {
    // Получить значение
    get<K extends keyof T>(key: K): T[K] | null {
      return storage.get<T[K]>(key as string);
    },

    // Сохранить значение
    set<K extends keyof T>(key: K, value: T[K]): void {
      storage.set(key as string, value);
    },

    // Обновить объект
    update<K extends keyof T>(key: K, updates: Partial<T[K]>): void {
      storage.update(key as string, updates);
    },

    // Удалить ключ
    remove<K extends keyof T>(key: K): void {
      storage.remove(key as string);
    },

    // Проверить наличие
    has<K extends keyof T>(key: K): boolean {
      return storage.has(key as string);
    }
  };
};

