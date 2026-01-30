import {UserStore} from "./user";
import {FavoritesStore} from "./favorites";

import {type StorageType} from "@/helpers";
import type {IUserStorage } from "@/model-views";

export class RootStore {
  userStore: UserStore;
  favoritesStore: FavoritesStore;

  constructor(storage: StorageType<IUserStorage>) {
    this.userStore = new UserStore(storage);
    this.favoritesStore = new FavoritesStore();
  }
}