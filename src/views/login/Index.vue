<script setup>
import FormLogin from './Form.vue';
</script>

<template>
  <div class="">
    <main id="form-login">
      <h1>Login Page</h1>
      <FormLogin />
    </main>
  </div>
</template>

<style scoped>

#form-login {
  background-color: cadetblue;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 300px;
}

</style>
