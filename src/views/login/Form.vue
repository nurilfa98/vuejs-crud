<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const username = ref('')
const password = ref('')

function handleLogin() {
  if (username.value == 'admin' && password.value == '123') {
    router.push('/home')
  } else {
    console.error('error login');
    alert('Please check your credentials!')
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div class="form-control">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model="username" placeholder="Username" autofocus required>
    </div>
    <div class="form-control">
      <label for="password">Password: </label>
      <input type="password" id="password" v-model="password" placeholder="Password" required>
    </div>
    <button>Login</button>
  </form>
</template>

<style scoped>
.form-control {
  margin-bottom: 1rem;
}


</style>