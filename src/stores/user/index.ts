import {makeAutoObservable} from "mobx";

import type {Theme} from "@/types";
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

  get UserTheme(): Theme | undefined {
    return this.currentUser?.currentTheme;
  }

  get UserLanguage(): Theme | undefined {
    return this.currentUser?.currentTheme;
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