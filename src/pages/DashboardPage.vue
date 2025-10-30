<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LibrosList from '@/components/LibrosList.vue'
</script>

<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between" v-if="$route.path ==='/'">
      <h1 class="text-xl font-semibold">Dashboard</h1>
    </div>

    <!--Lista con acciones deshabilitadas -->
    <LibrosList :accionesHabilitadas="false" v-if="$route.path ==='/'"/>
    <RouterView />
  </section>
</template>
