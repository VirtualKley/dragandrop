export interface Card{
    idCard: number;
    title: string;
    descripcion: string;
    labelIds: string[];
    dueDate: Date | null;
    columnId: string;
    boardId: string;
    createdAt: Date;
}