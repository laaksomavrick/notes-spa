import { GetterTree } from 'vuex';
import { RootState } from '../store';
import { Folder, FolderState } from './folder.interfaces';

export const getters: GetterTree<FolderState, RootState> = {
    folders(state): Folder[] {
        return state.folders ? state.folders : [];
    }
};
