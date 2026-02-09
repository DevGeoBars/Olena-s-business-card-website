import type {FunctionComponent} from "react";

export interface ISectionConfig {
  id: string;
  caption: string;
  Component: FunctionComponent<{id: string; caption: string; className: string}>; //todo@bars обернуть сперва в компоненту секции что бы тип можно было задать один
}