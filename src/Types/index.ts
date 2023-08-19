export interface TypeUser {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}

export interface TypeSubject {
    name: string;
    id: string;
    genre: string;
    index: number;
}

export interface TypeDocument {
    name: string;
    author: string;
    subId: string;
    fileId: string;
}
