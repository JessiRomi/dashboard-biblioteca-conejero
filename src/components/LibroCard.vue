<!-- pages/components/LibroCard.vue -->
<script setup lang="ts">
import type { Libro } from '@/models/libro'
import { useBibliotecaStore } from '@/stores/biblioteca'

// Prop tipado
const props = defineProps<{ libro: Libro 
  accionesHabilitadas?: boolean
}>()

const store = useBibliotecaStore()

function toggle() {
  if (!props.accionesHabilitadas) return
  store.cambiarDisponibilidad(props.libro.id)
}
</script>

<template>
  <article
    class="rounded-xl border p-4 bg-white transition"
    :class="props.libro.disponible ? 'border-green-300' : 'border-red-300 opacity-80'"
  >
    <h3 class="font-semibold">{{ props.libro.titulo }}</h3>
    <p class="text-sm text-neutral-500">de {{ props.libro.autor }}</p>
    <p class="text-sm mt-1">Páginas: {{ props.libro.paginas }}</p>

    <div class="mt-3 flex justify-between items-center">
      <span
        class="text-xs px-2 py-0.5 rounded-full"
        :class="props.libro.disponible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
      >
        {{ props.libro.disponible ? 'Disponible' : 'Prestado' }}
      </span>

      <button
        class="px-3 py-1.5 rounded border text-sm hover:bg-neutral-50"
        :class="props.libro.disponible ? 'border-red-300 text-red-700' : 'border-green-300 text-green-700'"
        @click="toggle"
      >
        {{ props.libro.disponible ? 'Prestar' : 'Devolver' }}
      </button>
    </div>
  </article>
</template>

