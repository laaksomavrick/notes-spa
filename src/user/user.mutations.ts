import { MutationTree } from 'vuex';
import { User, UserState } from './user.interfaces';

export const mutations: MutationTree<UserState> = {
    setUser(state: UserState, json: User) {
        state.user = json;
        localStorage.setItem('accessToken', json.token.token);
        localStorage.setItem('email', json.email);
    },
    setErrors(state: UserState, json: []) {
        state.errors = json;
    }
    // setToken(state: UserState, token: string) {
    //     state.user.token = token;
    // }
};
