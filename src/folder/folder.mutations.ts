import { MutationTree } from 'vuex';
import { Folder, FolderState } from './folder.interfaces';

export const mutations: MutationTree<FolderState> = {
    setFolders(state: FolderState, folders: Folder[]) {
        state.folders = folders;
    }
};
