import {UserStore} from "./user";
import {FavoritesStore} from "./favorites";

export class RootStore {
  userStore: UserStore;
  favoritesStore: FavoritesStore;

  constructor() {
    this.userStore = new UserStore();
    this.favoritesStore = new FavoritesStore();
  }
}

export const rootStore = new RootStore();