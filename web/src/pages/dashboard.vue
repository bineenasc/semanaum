<script setup lang="ts">
import { DashboardLayout } from 'aeria-app-layout'
const metaStore = useStore('meta')
function GoTo(){
  window.open("http://localhost:8080/search")
}
</script>

<template>
  <dashboard-layout>
    <template #super>
      <aeria-icon
        v-clickable
        :icon="
          metaStore.theme === 'dark'
            ? 'moon'
            : 'sun'
        "
        @click="metaStore.theme === 'dark'
          ? metaStore.$actions.saveTheme('default')
          : metaStore.$actions.saveTheme('dark')
        "
      />
      <aeria-button @click = "GoTo()">search</aeria-button>
    </template>
  </dashboard-layout>
</template>
