import type React from 'react';

export interface IBaseItem {
  id: string;
  caption: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}