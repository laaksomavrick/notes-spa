<template>
    <b-container fluid class="home">
        <b-row class="home__row">
            <b-col cols="4">
                <navigation></navigation>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
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

<style lang="scss">
.home {
    padding: 0px;
    height: 100%;

    &__row {
        height: 100%;
    }
}
</style>
