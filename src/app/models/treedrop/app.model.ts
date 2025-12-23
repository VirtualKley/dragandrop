import { Board } from "./board.model";
import { Card } from "./card.model";
import { Column } from "./column.model";

export interface AppData{
    boards: Board[],
    columns: Column[],
    cards: Card[]
}