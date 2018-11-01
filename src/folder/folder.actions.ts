import { ActionTree } from 'vuex';
import { RootState } from '../store';
import { get, post } from '../utils/api.utils';
import { FolderState } from './folder.interfaces';

export const actions: ActionTree<FolderState, RootState> = {
    async getFolders({ commit }): Promise<void> {
        try {
            const response = await get('folders');
            const json = response.data;
            commit('setFolders', json);
        } catch (e) {
            console.log(e);
        }
    }
};
