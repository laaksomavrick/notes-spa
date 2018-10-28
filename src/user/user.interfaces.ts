export interface Token {
    token: string;
}

export interface User {
    email: string;
    token: Token;
}
export interface UserState {
    user?: User;
    errors: [];
}
