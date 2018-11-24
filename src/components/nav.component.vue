<template>
    <div class="nav">
        <div class="nav__list">
            <b-list-group>
                <b-list-group-item v-for="folder in folders" :key="folder.id" :to="{name: 'folderNotes', params: { folderId: folder.id }}">
                    {{ folder.name }}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div class="nav__list">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Folder } from '@/folder/folder.interfaces';

@Component({
    components: {}
})
export default class Navigation extends Vue {
    @Getter('folders')
    folders: Folder[] | undefined;
}
</script>

<style lang="scss">
.nav {
    height: 100%;

    display: flex;
    &__list {
        height: 100%;
    }
}
</style>
