<template>
    <div class="home">
        You're logged in!
        <navigation></navigation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Navigation from '../components/nav.component.vue';

@Component({
    components: {
        Navigation
    }
})
export default class Notes extends Vue {
    @Action('startup')
    startup: any;

    async mounted() {
        await this.startup();
    }
}
</script>
