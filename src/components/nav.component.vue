<template>
    <div>
        <div v-for="folder in folders">
            {{ folder.name }}
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
