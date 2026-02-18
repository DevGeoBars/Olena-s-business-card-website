import type {FunctionComponent} from "react";

export interface ISectionConfig {
  id: string;
  caption?: string;
  Component: FunctionComponent;
}