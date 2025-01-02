<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = 'Invalid credentials';
      }
    },
  },
};
</script>
