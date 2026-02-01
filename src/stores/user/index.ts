import {makeAutoObservable} from "mobx";

import type {Locals, Theme} from "@/types";
import type {IUserStorage, User} from "@/model-views";
import type {StorageType} from "@/helpers";
import {DEFAULT_USER_DATA} from "@/constants";


export class UserStore {
  currentUser: User | null = null;

  constructor(private _storage: StorageType<IUserStorage>) {
    makeAutoObservable(this);

    this._loadUserFromStorage();
  }


  setUser(user: User) {
    this.currentUser = user;
  }

  get User(): User | null {
    return this.currentUser;
  }

  get UserTheme(): Theme | null {
    return this.currentUser?.currentTheme ?? null;
  }

  get UserLanguage(): Locals | null {
    return this.currentUser?.language ?? null;
  }

  setLanguage(lang: Locals | null) {
    if (this.currentUser && lang) {
      this.currentUser.language = lang;
      this._storage.set('userData', this.currentUser);
    }
  }


  private _loadUserFromStorage = () => {
    const savedUserData = this._storage.get('userData');
    if (savedUserData) {
      this.currentUser = savedUserData
    } else {
      this.currentUser = DEFAULT_USER_DATA;
      this._storage.set('userData', DEFAULT_USER_DATA);
    }
  }
}