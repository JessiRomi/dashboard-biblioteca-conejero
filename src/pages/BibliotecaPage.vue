<!-- pages/BibliotecaPage.vue -->
<script setup lang="ts">
/**
 * ✅ NEW: Este archivo no estaba en tu dump inicial (solo había biblioteca.ts e imports).
 *         Creamos la página Biblioteca para listar con acciones habilitadas y
 *         agregar navegación al formulario de alta.
 */
import { RouterLink } from 'vue-router'
import LibrosList from '@/components/LibrosList.vue'

/**
 * ✅ FIX: No requiere lógica extra porque delegamos orden/acciones a LibrosList.
 *         Si en el futuro necesitás filtros globales, podrían agregarse aquí.
 */
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold">Biblioteca</h1>
      <!-- ✅ NEW: Botón “Agregar libro” que navega al formulario -->
      <RouterLink
        to="/biblioteca/nuevo"
        class="px-3 py-1.5 rounded border text-sm hover:bg-neutral-50 border-blue-300 text-blue-700"
      >
        Agregar libro
      </RouterLink>
    </div>

    <!-- ✅ NEW: Reutilizamos la lista con acciones habilitadas -->
    <LibrosList :accionesHabilitadas="true" />
  </section>
</template>

<style scoped>
/* ✅ NEW: estilos mínimos; se apoya principalmente en utilidades (Tailwind) */
</style>
