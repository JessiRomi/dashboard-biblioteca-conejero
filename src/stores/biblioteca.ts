import { defineStore } from 'pinia'
import type { Libro } from '@/models/libro'

type Estado = {
  isLoading: boolean
  data: Libro[]
  error: string
}

export const useBibliotecaStore = defineStore('biblioteca', {
  state: (): Estado => ({
    isLoading: false,
    data: [
      { id: 1, titulo: 'El principito', autor: 'A. de Saint-Exupéry', paginas: 96,  disponible: true  },
      { id: 2, titulo: 'Cien años de soledad', autor: 'G. G. Márquez', paginas: 496, disponible: true  },
      { id: 3, titulo: 'Ficciones', autor: 'J. L. Borges',             paginas: 224, disponible: false },
      { id: 4, titulo: 'Rayuela', autor: 'J. Cortázar',                paginas: 736, disponible: true  },
    ],
    error: '',
  }),

  getters: {
    // Orden básico
    byTituloAsc:  (s) => [...s.data].sort((a, b) => a.titulo.localeCompare(b.titulo)),
    byAutorAsc:   (s) => [...s.data].sort((a, b) => a.autor.localeCompare(b.autor)),
    byPaginasAsc: (s) => [...s.data].sort((a, b) => a.paginas - b.paginas),
    byPaginasDesc:(s) => [...s.data].sort((a, b) => b.paginas - a.paginas),

    // ✅ Nuevos: segmentación por estado
    disponibles:  (s) => s.data.filter(l => l.disponible),
    prestados:    (s) => s.data.filter(l => !l.disponible),
  },

  actions: {
    agregarLibro(libro: Omit<Libro, 'id'>) {
      const nuevo = { ...libro, id: this.data.length ? Math.max(...this.data.map(l => l.id)) + 1 : 1 }
      this.data.push(nuevo)
    },
    cambiarDisponibilidad(id: number) {
      const libro = this.data.find(l => l.id === id)
      if (libro) libro.disponible = !libro.disponible
    },
  },
})
