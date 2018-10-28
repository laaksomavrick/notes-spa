import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { post } from '../api';
import { RootState } from '../store';

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

const userState: UserState = {
    user: undefined,
    errors: []
};

const actions: ActionTree<UserState, RootState> = {
    async createUser({ commit }, payload): Promise<void> {
        try {
            const response = await post('users', payload);
            const json = response.data;
            commit('setUser', json);
        } catch (e) {
            // todo
            // commit('setErrors', e);
            console.log(e);
        }
    },
    async authenticateUser({ commit }, payload): Promise<void> {
        try {
            const response = await post('auth', payload);
            const json = response.data;
            commit('setUser', json);
        } catch (e) {
            // todo
            // commit('setErrors', e);
            console.log(e);
        }
    }
    // setToken({ commit }, token: string): void {
    //     commit('setToken', token);
    // }
};

const mutations: MutationTree<UserState> = {
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

const getters: GetterTree<UserState, RootState> = {};

const namespaced = false;

export const UserModule: Module<UserState, RootState> = {
    namespaced,
    state: userState,
    actions,
    mutations,
    getters
};
