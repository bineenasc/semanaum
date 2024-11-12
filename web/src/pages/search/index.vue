<script setup lang="ts">
import type { CollectionItemWithId } from '@aeriajs/types'
import { formatDateTime } from 'aeria-ui'

const document = ref('')
const checkins = ref<CollectionItemWithId<'checkin'> [] >([])
definePage({
  meta: {
    title: 'Search',
    icon: 'gauge',
  },
})

watchEffect(async()=>{
  if(document.value !== ''){
    const { error: personError, result: person } = await aeria.search.searchAnimal.GET({
      document: document.value,
  })
  if (personError){
    return
  }
  checkins.value = person
  }
})
</script>

<template>
  <nav class="navbar">
    <img src="../../../static/logo.png" alt="Company Logo" class="logo" />
    <h1>Checkin Search</h1>
  </nav>
  <div class="container">
    <h2>Welcome</h2>
    <h3>Look for your pet's check-in below</h3>
    <aeria-input v-model="document" :property="{ type: 'string', mask: '###.###.###-##' }"/>
    <i>Your CPF is: {{ document }}</i>
    <div v-if="checkins.length" class="checkins-container">
      <div v-for="checkin in checkins" :key="checkin._id" class="checkin-entry">
        <p>Check-in feito em {{ formatDateTime(checkin.created_at) }}</p>
        <p>Animal: {{ checkin.animal.name }}</p>
        <p>Peso: {{ checkin.weight }}kg</p>
        <p>Temperatura: {{ checkin.temperature }}°C</p>
        <p>Motivo: {{ checkin.reason }}</p>
      </div>
    </div>
    <div v-else>
      <p>No check-ins found for the entered CPF.</p>
    </div>
  </div>
</template>

<style>
/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #003366; /* Dark blue */
  color: white;
  justify-content: center;
}

.logo {
  height: 40px;
  margin-right: 15px;
}

.navbar h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Container */
.container {
  padding: 20px;
  color: #003366; /* Text color */
}

h2 {
  color: #003366;
}

h3 {
  color: #00509e; /* Lighter blue for headers */
}

/* Input field */
aeria-input {
  width: 100%;
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #003366;
  border-radius: 5px;
}

/* Check-in Entry */
.checkins-container {
  margin-top: 20px;
}

.checkin-entry {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #00509e;
  border-radius: 5px;
  background-color: #e0f0ff; /* Light blue background */
}

.checkin-entry p {
  margin: 5px 0;
  color: #003366;
}

i {
  color: #007bff; /* Blue for emphasis */
}

button {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00509e;
}
</style>