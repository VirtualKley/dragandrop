import { Column } from "./column.model";
import { Label } from "./label.model";

export interface Board{
    idBoard: number;
    title: string;
    description: string;
    createdAt: Date;
    columns: Column[];
    labelCatalog: Label[];
}