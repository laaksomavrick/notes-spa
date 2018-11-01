export interface Token {
    token: string;
}

export interface User {
    id: number;
    email: string;
}

export interface Auth {
    token: Token;
}

export interface UserState {
    user?: User;
    auth?: Auth;
    errors: [];
}
