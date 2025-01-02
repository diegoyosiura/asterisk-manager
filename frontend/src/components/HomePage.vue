<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card elevation="2" class="pa-4">
          <v-card-title class="justify-center">Login</v-card-title>
          <v-card-text>
            <v-form ref="loginForm" v-model="valid">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-btn
                color="primary"
                class="mt-4"
                :disabled="!valid"
                block
                @click="handleLogin"
              >
                Login
              </v-btn>
            </v-form>
            <v-alert v-if="errorMessage" type="error" class="mt-3">{{ errorMessage }}</v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      valid: false,
      errorMessage: "",
      rules: {
        required: (v) => !!v || "Field is required.",
        email: (v) => /.+@.+\..+/.test(v) || "Email must be valid.",
      },
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/dashboard"); // Redirect after login
      } catch (err) {
        this.errorMessage = err.response?.data?.message || "Login failed. Try again.";
      }
    },
  },
};
</script>

<style scoped>
.v-container {
  background-color: #f5f5f5;
}
</style>

