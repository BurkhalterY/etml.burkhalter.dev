<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const firstname = ref("")
const lastname = ref("")
const promotion = ref("")

const errorMessage = ref("")

const register = () => {}
</script>

<template>
  <div class="flex flex-col max-w-sm p-2 mx-auto my-2 shadow">
    <h1 class="py-2 my-2 text-xl font-bold text-center">Inscription</h1>
    <span v-if="errorMessage" class="my-2 text-red-500">
      {{ errorMessage }}
    </span>

    <label>E-mail<span class="text-etml">*</span> :</label>
    <input type="text" v-model="email" class="p-2 my-2 border rounded-sm" />
    <label>Mot de passe<span class="text-etml">*</span> :</label>
    <input
      type="password"
      v-model="password"
      class="p-2 my-2 border rounded-sm"
    />

    <label>Prénom :</label>
    <input type="text" v-model="firstname" class="p-2 my-2 border rounded-sm" />
    <label>Nom :</label>
    <input type="text" v-model="lastname" class="p-2 my-2 border rounded-sm" />
    <label>Classe :</label>
    <select v-model="promotion" class="p-2 my-2 bg-white border rounded-sm">
      <option></option>
      <option value="mtu1e-2022-2024">MTU1E (2022 - 2024)</option>
    </select>

    <span class="text-etml">*champs obligatoires</span>
    <button
      @click="register"
      class="py-2 my-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
    >
      S'incrire
    </button>
  </div>
</template>
