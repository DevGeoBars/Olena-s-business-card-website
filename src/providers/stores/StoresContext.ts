import {createContext} from "react";
import type {RootStore} from "@/stores";

export const StoresContext = createContext<RootStore | null>(null);
