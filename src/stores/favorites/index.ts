import {makeAutoObservable} from "mobx";

import type {Favorite} from "@/model-views";


export class FavoritesStore {
  favorites: Array<Favorite> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavorite(favorite: Favorite) {
    this.favorites.push(favorite)
  }
  updateFavorite(id: string, newFavorite: Favorite) {
    const index = this.favorites.findIndex(fav => fav.id === id);
    const oldValue = this.favorites.splice(index, 1, newFavorite);
    console.log(`Объект ${oldValue[0].name} заменен`);
  }
  remove(id: string) {
    this.favorites = this.favorites.filter(fav => fav.id === id);
  }

  get Favorites(): Array<Favorite> {
    return this.favorites;
  }
}