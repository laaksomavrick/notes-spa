import { Module } from 'vuex';
import { RootState } from '../store';
import { actions } from './folder.actions';
import { getters } from './folder.getters';
import { FolderState } from './folder.interfaces';
import { mutations } from './folder.mutations';

const state: FolderState = {
    folders: undefined,
    errors: []
};

const namespaced = false;

export const FolderModule: Module<FolderState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
};
