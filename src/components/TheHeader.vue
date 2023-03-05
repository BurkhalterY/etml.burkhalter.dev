<template>
  <div
    class="fixed top-0 left-0 z-10 flex justify-between w-full p-1 text-white bg-etml"
  >
    <span>etml.burkhalter.dev</span>
    <nav>
      <router-link :to="{ name: 'Agenda' }">Agenda</router-link>
    </nav>
    <span>&copy; Burkhalter Yannis</span>
  </div>
</template>
