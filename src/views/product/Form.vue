<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref,onMounted, watch } from 'vue';

const router = useRouter()
const route = useRoute()
const products = ref([])
const formData = ref({
  name: '',
  price: ''
})
const props = defineProps(['params'])
const { id } = route.query

function loadProduct() {
  const data = JSON.parse(localStorage.getItem('products'))
  if (data) {
    products.value = data
  }
}

watch(() => route.query.id, (newId) => {
  loadProduct()
  const [data] = products.value.filter(x => x.id == newId)
  if (data) {
    formData.value.name = data.name
    formData.value.price = data.price
  }
})

onMounted(() => {
  loadProduct()
  if (id) {
    const [data] = products.value.filter(x => x.id == id)
    formData.value.name = data.name
    formData.value.price = data.price
  }
})

function handleSave() {
  if (id) {
    for (let i = 0; i < products.value.length; i++) {
      if (id == products.value[i].id) {
        products.value[i].name = formData.value.name
        products.value[i].price = formData.value.price
        save()
        clear()
        router.push('/product')
      }
    }
  } else {
    const id = crypto.randomUUID()
    const name = formData.value.name
    const price = formData.value.price
  
    products.value.push({ id, name, price })
    save()
    clear()
    router.push('/product')
  }
}

function save() {
  localStorage.setItem('products', JSON.stringify(products.value))
}

function clear() {
  formData.value.name = ''
  formData.value.price = ''
}
</script>

<template>
  <h2 class="text-color">Form Product {{ props.params.action }}</h2>

  <form @submit.prevent="handleSave" class="mb-5">
    <div class="my-2">
      <label for="name">Masukkan Nama: </label>
      <input type="text" id="name" v-model="formData.name" placeholder="nama" required autofocus>
    </div>
    <div class="my-2">
      <label for="price">Masukkan Harga: </label>
      <input type="number" id="price" v-model="formData.price" placeholder="harga" required>
    </div>
    <div class="my-2">
      <button type="submit">{{ id ? 'Update' : 'Save' }}</button>
    </div>
  </form>


</template>

<style scoped>
.text-color {
  color: blueviolet;
}
.my-2{
  margin: 7px 0 7px 0;
}
.mb-5 {
  margin-bottom: 2rem;
}

</style>