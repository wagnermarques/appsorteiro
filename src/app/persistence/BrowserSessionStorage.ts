import { Injectable } from "@angular/core";
import { BrowserStorageService } from "./BrowserStorage";

@Injectable({ providedIn: 'root' })
export class SessionStorageService  {
  

//   getItem<T>(key: string): Promise<T> {
//     const value = "";//JSON.parse(BrowserStorageService.getItem(key));
//     return Promise.resolve(value);
//   }

  setItem<T>(key: string, value: T): Promise<void> {
    const result = sessionStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve(result);
  }

  removeItem(key: string): Promise<void> {
    return Promise.resolve(sessionStorage.removeItem(key));
  }

}