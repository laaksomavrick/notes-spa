<template>
    <b-container class="user-container">
        <b-row class="user-container-row">
            <div class="user-container-container">
                <h1 class="header">{{ header }}</h1>
                <slot></slot>
            </div>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class UserContainer extends Vue {
    @Prop()
    header!: string;
}
</script>

<style lang="scss" scoped>
.user-container {
    height: 100%;
}
.user-container-row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.user-container-container {
    margin-top: -100px;
    flex: 1;
    max-width: 400px;
}
.header {
    margin-bottom: 2rem;
    text-align: center;
}
.submit {
    width: 100%;
}
</style>