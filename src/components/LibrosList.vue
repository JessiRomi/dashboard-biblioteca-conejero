<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBibliotecaStore } from '@/stores/biblioteca'

const props = defineProps<{ accionesHabilitadas?: boolean }>()

const store = useBibliotecaStore()
const { disponibles, prestados } = storeToRefs(store)

/* Pestañas: Disponibles / Prestados */
type Tab = 'disponibles' | 'prestados'
const tab = ref<Tab>('disponibles')

/* Orden */
type Orden = 'titulo' | 'autor' | 'paginasDesc'
const orden = ref<Orden>('titulo')

/* Ordenar lista según criterio */
function ordenar(lista: any[]) {
  if (orden.value === 'autor')       return [...lista].sort((a,b)=> a.autor.localeCompare(b.autor))
  if (orden.value === 'paginasDesc') return [...lista].sort((a,b)=> a.paginas - b.paginas)
  return [...lista].sort((a,b)=> a.titulo.localeCompare(b.titulo))
}

/** Libros visibles según pestaña + orden */
const visibles = computed(() => {
  const base = tab.value === 'disponibles' ? disponibles.value : prestados.value
  return ordenar(base)
})

/** Acciones */
function prestar(id: number) { store.cambiarDisponibilidad(id) }
function devolver(id: number) { store.cambiarDisponibilidad(id) }
</script>

<template>
   <section class="space-y-6">
    <!-- Controles -->
    <div class="flex flex-wrap items-center gap-2">
      <button class="px-3 py-1.5 rounded border text-sm" :class="tab==='disponibles' ? 'bg-neutral-100' : ''" @click="tab='disponibles'">Disponibles</button>
      <button class="px-3 py-1.5 rounded border text-sm" :class="tab==='prestados'    ? 'bg-neutral-100' : ''" @click="tab='prestados'">Prestados</button>

      <span class="mx-2 text-neutral-400">|</span>

      <button class="px-3 py-1.5 rounded border text-sm" :class="orden==='titulo'?'bg-neutral-100':''" @click="orden='titulo'">Ordenar por título</button>
      <button class="px-3 py-1.5 rounded border text-sm" :class="orden==='autor'?'bg-neutral-100':''" @click="orden='autor'">Por autor</button>
      <button class="px-3 py-1.5 rounded border text-sm" :class="orden==='paginasDesc'?'bg-neutral-100':''" @click="orden='paginasDesc'">Por páginas (↓)</button>
    </div>

    <!-- Lista -->
    <div class="grid md:grid-cols-2 gap-4">
      <article v-for="l in visibles" :key="l.id" class="rounded-xl border p-4 bg-white flex items-start justify-between gap-3">
        <div>
          <h3 class="font-medium">{{ l.titulo }}</h3>
          <p class="text-sm text-neutral-500">Autor: {{ l.autor }} · {{ l.paginas }} págs.</p>
          <span class="inline-flex items-center mt-1 text-xs px-2 py-0.5 rounded"
                :class="l.disponible ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'">
            {{ l.disponible ? 'Disponible' : 'Prestado' }}
          </span>
        </div>

        <div class="flex gap-2">
          <!-- Botones visibles siempre, pero se deshabilitan cuando accionesHabilitadas = false -->
          <button
            class="px-3 py-1.5 rounded border text-sm"
            :class="['border-red-300 text-red-700', !props.accionesHabilitadas ? 'opacity-40 pointer-events-none' : 'hover:bg-neutral-50']"
            :disabled="!props.accionesHabilitadas"
            v-if="l.disponible"
            @click="prestar(l.id)"
          >
            Prestar
          </button>

          <button
            class="px-3 py-1.5 rounded border text-sm"
            :class="['border-green-300 text-green-700', !props.accionesHabilitadas ? 'opacity-40 pointer-events-none' : 'hover:bg-neutral-50']"
            :disabled="!props.accionesHabilitadas"
            v-else
            @click="devolver(l.id)"
          >
            Devolver
          </button>
        </div>
      </article>
    </div>

    <p v-if="!visibles.length" class="text-sm text-neutral-500">
      No hay libros en esta pestaña con el criterio de orden actual.
    </p>
  </section>
</template>
