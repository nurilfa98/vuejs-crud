<script setup>
import Card from '@/components/Card.vue';
import Sidebar from '@/components/Sidebar.vue';
import FormProduct from './Form.vue';
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter()
const route = useRoute()
const products = ref([])

const query = ref({
  id: route.query.id,
  action: route.query.action
})

watch(() => route.query, (newQuery) => {
  query.value.id = newQuery.id;
  query.value.action = newQuery.action;
  loadProduct()
  }
);

function loadProduct() {
  products.value = []
  const data = JSON.parse(localStorage.getItem('products'))
  for (let i = data.length - 1; i >= 0; i--) {
    products.value.push(data[i])
  }
}

// saat komponen dimasukkan ke DOM maka onMounted dijalankan
onMounted(() => {
  loadProduct()
})

function handleDelete(id) {
  products.value = products.value.filter(item => item.id != id)
  save()
}

function handleAdd() {
  router.push({
    query: {action: 'add'}
  })
}

function handleEdit(id) {
  router.push({
    query: {id}
  })
}

function save() {
  localStorage.setItem('products', JSON.stringify(products.value))
}
</script>

<template>
  <Sidebar />

  <div v-if="query.id">
    <FormProduct :params="{action: 'edit'}" />
  </div>
  
  <div v-if="query.action">
    <FormProduct :params="{action: 'add'}" />
  </div>

  <h2>List Product</h2>

  <button class="button-blue" @click="handleAdd">Add</button>
  <div class="m-5" v-if="products < 1">No Data</div>
  <div v-for="item of products" :key="item.id">
    <Card :product="{name: item.name, harga: item.price}" />
    <button class="button-red my-3" @click="handleDelete(item.id)">Delete</button>
    <button class="button-orange" @click="handleEdit(item.id)">Edit</button>
  </div>
</template>

<style scoped>
.my-3 {
  margin: 0 5px 0 5px;
}
.m-5 {
  margin: 3rem;
}
.button-red {
  background-color: red;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.button-orange {
  background-color: orange;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.button-blue {
  background-color: blue;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>