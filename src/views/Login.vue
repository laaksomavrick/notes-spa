<template>
    <b-container class="login">
        <b-row class="login-row">
            <div class="login-container">
                <h1 class="header">Notes</h1>
                <b-form>
                    <b-form-group label="Email:">
                        <b-form-input type="email" required placeholder="Enter email" autocomplete="username">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Password:">
                        <b-form-input type="password" required autocomplete="current-password" placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary" class="submit">Submit</b-button>
                </b-form>
            </div>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.login {
    height: 100%;
}
.login-row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.login-container {
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