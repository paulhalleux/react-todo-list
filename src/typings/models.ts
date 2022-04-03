export enum TodoState {
    Unchecked, Pending, Checked
}

export interface TodoItem {
    id: number;
    name: string;
    state: TodoState;
    todos?: TodoItem[];
}

export interface Collection {
    id: number;
    name: string;
    description: string;
    count: number;
    done: number;
    order: number;
    todos?: TodoItem[];
}

export interface CollectionRequest {
    name: string;
    description: string;
}