import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { FolderModule } from './folder/folder.module';
import { UserModule } from './user/user.module';

Vue.use(Vuex);

// root
export interface RootState {
    version: string;
}

const store: StoreOptions<RootState> = {
    state: {
        version: '0.0.1'
    },
    actions: {
        async startup({ dispatch }): Promise<void> {
            try {
                await Promise.all([dispatch('getUser'), dispatch('getFolders')]);
            } catch (e) {
                console.log(e);
            }
        }
    },
    modules: {
        user: UserModule,
        folder: FolderModule
    }
};

export default new Vuex.Store<RootState>(store);
