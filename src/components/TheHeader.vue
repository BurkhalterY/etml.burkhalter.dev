<template>
  <div
    class="fixed top-0 left-0 z-10 flex justify-between w-full p-1 text-white bg-etml"
  >
    <span>etml.burkhalter.dev</span>
    <nav class="flex px-1 border-x gap-x-2">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Agenda' }">Agenda</router-link>
    </nav>
    <span>&copy; Burkhalter Yannis</span>
  </div>
</template>
