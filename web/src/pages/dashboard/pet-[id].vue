<script setup lang="ts">
definePage({
  props: true,
  meta: {
    title: 'pet',
    icon: 'globe-hemisphere-east',
  },
})

const props = defineProps<{
  id: string
}>()


onMounted(async () => {
})
</script>

<template>
  <h1>Hello, world!</h1>
  Id do pet: {{ props.id }}
</template>
