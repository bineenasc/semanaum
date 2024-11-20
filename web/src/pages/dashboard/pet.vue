<script setup lang="ts">
import type { CollectionItemWithId } from '@aeriajs/types'
import { ref } from 'vue'

const panelVisible = ref(false)

const animals = ref<CollectionItemWithId<'animal'> [] >([])

definePage({
  meta: {
    title: 'Pet Profile',
    icon: 'dog',
  },
})
</script>

<template>
  <div class="profile-container">
    <div class="card-container">
      <!-- Foto do animal -->
      <div class="photo-container">
        <img src="/logo.png" alt="Foto do animal" class="animal-photo" />
      </div>

      <!-- Informações principais do animal -->
      <div class="info-container">
        <h1>Nome do animal</h1>
        <p><strong>Idade:</strong> 10 anos</p>
        <aeria-button large @click="panelVisible = true">Ver mais detalhes</aeria-button>
      </div>
    </div>

    <!-- Painel flutuante com informações adicionais -->
    <aeria-panel
      float
      close-hint
      title="Detalhes do Animal"
      v-model="panelVisible"
      @overlay-click="panelVisible = false"
    >
      <div class="panel-content">
        <h3>Detalhes do Animal</h3>
        <p><strong>Nome:</strong> nominho</p>
        <p><strong>Idade:</strong> aninhos</p>
        <p><strong>Proprietário:</strong>doninho</p>
        <p><strong>Email:</strong> email@exemplinho.com</p>
        <p><strong>Data de Criação:</strong> datinha</p>
      </div>
      <template #footer>
        <aeria-button large @click="panelVisible = false">Fechar</aeria-button>
      </template>
    </aeria-panel>
  </div>
</template>

<style scoped>
/* Container principal */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 2rem;
  min-height: 70vh;
}

/* Cartão principal */
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

/* Container da foto */
.photo-container {
  flex: 1;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animal-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-right: 1px solid #ddd;
}

/* Informações principais */
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
  color: #333;
}

.info-container p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.info-container p strong {
  color: #000;
}

/* Botão de detalhes */
.info-container button {
  margin-top: 1.5rem;
  align-self: flex-start;
}

/* Painel flutuante */
.panel-content {
  padding: 1rem;
}

.panel-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
}

.panel-content p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #666;
}

.panel-content p strong {
  color: #222;
}
</style>
