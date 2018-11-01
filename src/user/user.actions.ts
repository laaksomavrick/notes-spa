import { ActionTree } from 'vuex';
import { RootState } from '../store';
import { get, post } from '../utils/api.utils';
import { UserState } from './user.interfaces';

export const actions: ActionTree<UserState, RootState> = {
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
    async getUser({ commit }): Promise<void> {
        try {
            const response = await get('users/me');
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
            commit('setAuth', json);
        } catch (e) {
            // todo
            // commit('setErrors', e);
            console.log(e);
        }
    }
};
