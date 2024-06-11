<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const data = ref({
  title: 'Gramedia Apps'
})

// localStorage.setItem('title', JSON.stringify(data.value.title))

</script>

<template>
  <main>
    <Sidebar />
    <h2>Home Page</h2>
  </main>
</template>
