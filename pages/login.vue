<template>
  <div class="l-auth">
    <div
      v-if="loginVisible"
      class="l-login"
    >
      <v-form v-model="validLogin">
        <v-text-field
          v-model="credentials.username"
          label="Username"
          prepend-icon="account_box"
          :rules="rules"
          required
          color="light-blue lighten-1"
        />

        <v-text-field
          v-model="credentials.password"
          label="Password"
          prepend-icon="lock"
          color="light-blue lighten-1"
          required
          :rules="rules"
          :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
          :type="loginPasswordVisible ? 'text' : 'password'"
          @click:append="() => (loginPasswordVisible = !loginPasswordVisible)"
        />

        <!-- <v-btn flat color="light-blue lighten-1" @click.native="signUpVisible = true; loginVisible = false;">Create account</v-btn> -->
        <v-btn
          color="light-blue lighten-1"
          @click.native="login()"
        >
          Login
        </v-btn>
      </v-form>
    </div>
    <v-snackbar
      v-model="snackbar"
      color="red lighten-1"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  middleware: 'guest',
  layout: 'adminpane',
  data() {
    return {
      snackbar: false,
      validLogin: false,
      loginVisible: true,
      loginPasswordVisible: false,
      rules: [value => !!value || 'This field is required'],
      credentials: {
        username: '',
        password: ''
      },
      message: 'Unknown error'
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.credentials.username,
            password: this.credentials.password
          }
        })
        this.$router.push('/inspire')
      } catch (e) {
        this.message = e.response.data.message
        this.snackbar = true
      }
    }
  }
}
</script>

<style>
.l-auth {
  padding: 15px;
  margin: 45px auto;
  min-width: 272px;
  max-width: 320px;
  label,
  input,
  .icon {
    color: #29b6f6 !important;
  }
}
</style>
