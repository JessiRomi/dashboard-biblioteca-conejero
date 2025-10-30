<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBibliotecaStore } from '@/stores/biblioteca'

const store = useBibliotecaStore()
const router = useRouter()

// Campos del formulario
const titulo = ref('')
const autor = ref('')
const paginas = ref<number | null>(null)
const disponible = ref(true)

function agregar() {
  if (!titulo.value.trim() || !autor.value.trim() || !paginas.value || paginas.value <= 0) return
  store.agregarLibro({
    titulo: titulo.value.trim(),
    autor: autor.value.trim(),
    paginas: paginas.value,
    disponible: disponible.value,
  })
  // Limpiar
  titulo.value = ''
  autor.value = ''
  paginas.value = null
  disponible.value = true
 
  // Volver a la lista
  router.push('/libros')
}
</script>

<template>
  <section class="max-w-md mx-auto bg-white border rounded-xl p-6 space-y-4">
    <h2 class="text-xl font-semibold">Agregar libro</h2>

    <form @submit.prevent="agregar" class="space-y-3">
      <input v-model="titulo" class="w-full border rounded px-3 py-2" placeholder="Título" />
      <input v-model="autor"  class="w-full border rounded px-3 py-2" placeholder="Autor" />
      <input v-model.number="paginas" type="number" min="1" class="w-full border rounded px-3 py-2" placeholder="Páginas" />

      <label class="flex items-center gap-2 text-sm">
        <input v-model="disponible" type="checkbox" />
        Disponible
      </label>

      <div class="flex justify-end gap-2">
        <RouterLink to="/libros" class="px-3 py-2 rounded border">Cancelar</RouterLink>
        <button class="bg-neutral-900 text-white rounded px-3 py-2">Guardar</button>
      </div>
    </form>
  </section>
</template>


