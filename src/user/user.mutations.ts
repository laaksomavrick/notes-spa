import { MutationTree } from 'vuex';
import { Auth, User, UserState } from './user.interfaces';

export const mutations: MutationTree<UserState> = {
    setAuth(state: UserState, auth: Auth) {
        state.auth = auth;
        localStorage.setItem('accessToken', auth.token.token);
    },
    setUser(state: UserState, user: User) {
        state.user = user;
    },
    setErrors(state: UserState, json: []) {
        state.errors = json;
    }
    // setToken(state: UserState, token: string) {
    //     state.user.token = token;
    // }
};
