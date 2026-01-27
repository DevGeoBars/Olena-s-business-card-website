import {UserStore} from "./user";
import {FavoritesStore} from "./favorites";

class RootStore {
  userStore: UserStore;
  favoriteStore: FavoritesStore;

  constructor() {
    this.userStore = new UserStore();
    this.favoriteStore = new FavoritesStore();
  }
}

export const rootStore = new RootStore();