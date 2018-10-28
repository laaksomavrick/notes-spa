import { Module } from 'vuex';
import { RootState } from '../store';
import { actions } from './user.actions';
import { getters } from './user.getters';
import { UserState } from './user.interfaces';
import { mutations } from './user.mutations';

const state: UserState = {
    user: undefined,
    errors: []
};

const namespaced = false;

export const UserModule: Module<UserState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
};
