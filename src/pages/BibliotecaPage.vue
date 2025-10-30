<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import LibrosList from '@/components/LibrosList.vue'
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold">Biblioteca</h1>
      <RouterLink
        to="/biblioteca/nuevo"
        class="px-3 py-1.5 rounded border text-sm hover:bg-neutral-50 border-blue-300 text-blue-700"
      >
        Agregar libro
      </RouterLink>
    </div>
    <LibrosList :accionesHabilitadas="true" />
  </section>
</template>

<style scoped>
</style>
