interface Author {
    firstName: string;
    lastName: string;
}

export interface Book {
    title: string;
    author: Author;
    note: string;
}