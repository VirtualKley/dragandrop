import { inject, Injectable } from '@angular/core';
import { Board } from '../../models/treedrop/board.model';
import { StorageService } from './storage.service';
import { AppData } from '../../models/treedrop/app.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private localStorageService = inject(StorageService);

  getAll(): Board[]{
    let data: AppData = this.localStorageService.loadData();
    return data.boards;
  }

  getById(id: string): Board|null{
    let boards: Board[] = this.getAll();
    let board = boards.find(b => b.idBoard === id);

    return board == undefined ? null : board;
  }

  createBoard(boardData: Partial<Board>): Board{
    let data: AppData = this.localStorageService.loadData();

    boardData.idBoard = crypto.randomUUID();
    boardData.createdAt = new Date();
    boardData.labelCatalog = [];
    boardData.columns = [];

    data.boards.push(boardData as Board);
    this.localStorageService.saveData(data);

    return boardData as Board;
  }

  updateBoard(id: string, boardUpdate: Partial<Board>): Board|null {
    let data: AppData = this.localStorageService.loadData();
    let boardIndex = data.boards.findIndex(b => b.idBoard === id);

    if(boardIndex === -1){
      return null;
    }

    Object.assign(data.boards[boardIndex], boardUpdate);
    this.localStorageService.saveData(data);

    return data.boards[boardIndex];
  }
}