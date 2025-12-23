import { Injectable } from '@angular/core';
import { AppData } from '../../models/treedrop/app.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  STORAGE_KEY: string = "treedrop-app";

  loadData(): AppData{
    const dataString = localStorage.getItem(this.STORAGE_KEY);
    if(!dataString){
      return {
        boards: [],
        cards: [],
        columns: []
      }
    }

    const data: AppData = JSON.parse(dataString);
    return data;
  }

  saveData(data: AppData): void{
    const dataString = JSON.stringify(data);

    localStorage.setItem(this.STORAGE_KEY, dataString);
  }
}
