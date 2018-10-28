<template>
    <!-- todo extract common css into component -->
    <b-container class="create-user">
        <b-row class="create-user-row">
            <div class="create-user-container">
                <h1 class="header">Create an account</h1>
                <b-form @submit="submit">
                    <b-form-group label="Email">
                        <b-form-input v-model="email" type="email" required placeholder="Enter email" autocomplete="username">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Password">
                        <b-form-input v-model="password" type="password" required autocomplete="current-password" placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Confirm password">
                        <b-form-input v-model="confirmPassword" type="password" required autocomplete="current-password" placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary" class="submit" :disabled="!valid">Submit</b-button>
                </b-form>
            </div>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class CreateUser extends Vue {
    private email: string;
    private password: string;
    private confirmPassword: string;

    @Action('createUser')
    createUser: any;

    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }

    async submit(e: Event) {
        // todo all the things
        // todo don't send hash back lol
        e.preventDefault();
        const payload = { email: this.email, password: this.password };
        await this.createUser(payload);
    }

    get valid() {
        return (
            this.email !== '' && this.password.length > 8 && this.password === this.confirmPassword
        );
    }
}
</script>

<style lang="scss" scoped>
.create-user {
    height: 100%;
}
.create-user-row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.create-user-container {
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