import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
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
    modules: {
        user: UserModule
    }
};

export default new Vuex.Store<RootState>(store);
