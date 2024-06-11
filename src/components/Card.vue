<script setup>
const props = defineProps(['product'])

</script>

<template>
  <div class="card p-5 mx-5">
    <div>Nama: {{ props.product.name }}</div>
    <div>Harga: {{ props.product.harga }}</div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid rgb(30, 30, 30);
  width: 300px;
  border-radius: 4px;
}
.p-5 {
  padding: 5px;
}
.mx-5 {
  margin: 5px 0px 5px 0px;
}
</style>