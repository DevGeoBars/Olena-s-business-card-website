import type {FunctionComponent} from "react";

export interface ISectionConfig {
  id: string;
  caption: string;
  Component: FunctionComponent<any>; //todo@bars обернуть сперва в компоненту секции что бы тип можно было задать один
}