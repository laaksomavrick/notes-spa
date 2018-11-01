export interface FolderState {
    folders?: Folder[];
    errors: [];
}

export interface Folder {
    id: number;
    name: string;
}
