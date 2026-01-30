import {createContext} from "react";

type TStorageContext = {
storage: any; //todo@bars - поменять на конретный тип хранилища
}
export const StorageContext = createContext<TStorageContext | null>(null);
