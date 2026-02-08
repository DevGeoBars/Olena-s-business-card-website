export interface IBase {
  id: string;
  caption: string;
}

export interface IBaseItem<T> extends IBase {
  value: T;
  onChange: (value: T | null) => void;
}
export interface ILinkItem extends IBase {
  href: string;
}