export interface IBaseItem {
  id: string;
  caption: string;
  onClick: (event: MouseEvent) => void;
}