<template>
    <user-container header="Notes">
        <b-form @submit="submit">
            <b-form-group label="Email:">
                <b-form-input v-model="email" type="email" required placeholder="Enter email" autocomplete="username">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password:">
                <b-form-input v-model="password" type="password" required autocomplete="current-password" placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-button :disabled="!valid" type="submit" variant="primary" class="submit">Submit</b-button>
        </b-form>
    </user-container>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import UserContainer from '../components/user-container.component.vue';

@Component({
    components: {
        UserContainer
    }
})
export default class Login extends Vue {
    private email: string;
    private password: string;

    @Action('authenticateUser')
    authenticateUser: any;

    constructor() {
        super();
        this.email = '';
        this.password = '';
    }

    async submit(e: Event) {
        // todo all the things
        // todo handle errors
        // todo don't send hash back lol
        e.preventDefault();
        const payload = { email: this.email, password: this.password };
        await this.authenticateUser(payload);
        this.$router.push('/');
    }

    get valid() {
        return this.email !== '' && this.password.length > 8;
    }
}
</script>

<style lang="scss" scoped>
.submit {
    width: 100%;
}
</style>