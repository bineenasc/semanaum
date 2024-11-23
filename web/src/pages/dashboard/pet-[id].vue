<script setup lang="ts">
import type { CollectionItemWithId } from '@aeriajs/types'

// Importando o `metaStore` para gerenciar o tema
const metaStore = useStore('meta')

const animal = ref({} as CollectionItemWithId<'animal'>)
const panelVisible = ref(false)

// Propriedades do componente
definePage({
  props: true,
  meta: {
    title: 'pet',
    icon: 'dog',
  },
})

const props = defineProps<{
  id: string
}>()

// Buscar informações do animal ao montar o componente
onMounted(async () => {
  const { error, result } = await aeria().animal.get.POST({
    filters: {
      _id: props.id,
    },
  })
  if (error) {
    return
  }
  animal.value = result
})
</script>

<template>
  <div :class="['profile-container', { 'dark-mode': metaStore.theme === 'dark' }]">
    <div :class="['card-container', { 'dark-mode': metaStore.theme === 'dark' }]">
      <!-- Foto do animal -->
      <aeria-picture
        :url="animal.picture?.link"
        class="photo-container"
      />

      <!-- Informações principais do animal -->
      <div class="info-container">
        <h1>{{ animal.name }}</h1>
        <p><strong>Idade:</strong> {{ animal.age }} anos</p>
        <aeria-button
          large
          @click="panelVisible = true"
        >
          Ver mais detalhes
        </aeria-button>
      </div>
    </div>

    <!-- Painel flutuante com informações adicionais -->
    <aeria-panel
      v-model="panelVisible"
      float
      close-hint
      title="Detalhes do Animal"
      @overlay-click="panelVisible = false"
    >
      <div class="panel-content">
        <h3>Detalhes do Animal</h3>
        <p><strong>Nome:</strong> {{ animal.name }}</p>
        <p><strong>Idade:</strong> {{ animal.age }}</p>
        <p><strong>Proprietário:</strong> {{ animal.owner.name }}</p>
        <p><strong>Email:</strong> {{ animal.owner.email }}</p>
        <p><strong>Data de Criação:</strong> {{ formatDateTime(animal.created_at) }}</p>
      </div>
      <template #footer>
        <aeria-button
          large
          @click="panelVisible = false"
        >
          Fechar
        </aeria-button>
      </template>
    </aeria-panel>
  </div>
</template>

<style scoped>
/* Estilos do modo claro */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 2rem;
  min-height: 70vh;
  color: #000;
}

/* Estilos do modo escuro */
.profile-container.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

.card-container {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.card-container.dark-mode {
  background: #1e1e1e;
}

.photo-container {
  flex: 1;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container.dark-mode {
  background-color: #292929;
}

.animal-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-right: 1px solid #ddd;
}

.info-container {
  flex: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-container h1 {

  font-size: 2rem;
  margin-bottom: 1rem;
}

.info-container.dark-mode h1 {
  color: #fff;
}

.info-container p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.info-container.dark-mode p {
  color: #ccc;
}
</style>
