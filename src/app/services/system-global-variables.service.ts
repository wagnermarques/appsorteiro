import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemGlobalVariablesService {

  private  appTitle: String = "App Sorteios";

  public getAppTitle():String {
    return this.appTitle;
  }

  constructor() { }
}
