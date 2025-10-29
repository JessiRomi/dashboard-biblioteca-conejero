<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LibrosList from '@/components/LibrosList.vue'
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <!-- ✅ NEW: botón para ir a la Biblioteca -->
      <RouterLink
        to="/biblioteca"
        class="px-3 py-1.5 rounded border text-sm hover:bg-neutral-50"
      >
        Biblioteca
      </RouterLink>
    </div>

    <!-- ✅ Lista con acciones deshabilitadas -->
    <LibrosList :accionesHabilitadas="false" />
  </section>
</template>
