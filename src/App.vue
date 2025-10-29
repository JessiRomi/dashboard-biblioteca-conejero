<script setup lang="ts"></script>

<template>
  <div class="min-h-dvh bg-neutral-50 text-neutral-900">
    <header class="bg-white border-b">
      <nav class="mx-auto max-w-6xl p-4 flex gap-3">
        <RouterLink to="/" class="px-3 py-1.5 rounded hover:bg-neutral-100">Dashboard</RouterLink>
        <RouterLink to="/libros" class="px-3 py-1.5 rounded hover:bg-neutral-100">Libros</RouterLink>
        <RouterLink to="/libros/nuevo" class="px-3 py-1.5 rounded hover:bg-neutral-100">Agregar</RouterLink>
      </nav>
    </header>

    <main class="mx-auto max-w-6xl p-6">
      <RouterView />
    </main>
  </div>
</template>

