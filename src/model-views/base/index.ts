export interface IBaseItem<T> {
  id: string;
  caption: string;
  value: T;
  onChange: (value: T | null) => void;
}