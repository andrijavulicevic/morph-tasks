<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
                v-model="username"
                v-validate="'required'"
              ></v-text-field>
              <span>{{ errors.first('username') }}</span>

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                v-validate="'required'"
              ></v-text-field>
              <span>{{ errors.first('password') }}</span>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {LOGIN} from '../store/actions.type';

export default {
  data: () => ({
    username: null,
    password: null
  }),
  methods: {
    login() {
      this.$validator.validate().then(valid => {
        if (!valid) return;
        const user = {
          username: this.username,
          password: this.password
        };
        this.$store.dispatch(LOGIN, user)
          .then(() => this.$router.push({name: 'home'}));
      });
    }
  }
}
</script>

<style>

</style>
