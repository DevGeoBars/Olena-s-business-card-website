import {makeAutoObservable} from "mobx";

import type {Theme} from "@/types";
import type { User } from "@/model-views";


export class UserStore {
  currentUser: User | null = null;

  constructor() {
    makeAutoObservable(this);
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
}