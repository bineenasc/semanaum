<script setup lang="ts">
definePage({
  meta: {
    title: 'pet',
    icon: 'globe-hemisphere-east',
  },
})

const metaStore = useStore('meta')
const people = ref([])

onMounted(async () => {
  const { error, result } = await aeria().test.GET()

  if( error ) {
    return metaStore.$actions.spawnToast({
      title: 'Error!',
      message: 'There was an error fetching people from the API'
    })
  }

  people.value = result.people
})
</script>

<template>
  <h1>Hello, world!</h1>
  <ul>
    <li
      v-for="person in people"
      :key="person._id"
    >
      {{ person.name }} ({{ person.age }} years old)
    </li>
  </ul>
</template>