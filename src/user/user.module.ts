import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { post } from '../api';
import { RootState } from '../store';

export interface User {
    email: string;
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
            // todo token
            const response = await post('users', payload);
            const json = response.data;
            commit('setUser', json);
        } catch (e) {
            // todo
            // commit('setErrors', e);
            console.log(e);
        }
    }
};

const mutations: MutationTree<UserState> = {
    setUser(state: UserState, json: User) {
        state.user = json;
    },
    setErrors(state: UserState, json: []) {
        state.errors = json;
    }
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
