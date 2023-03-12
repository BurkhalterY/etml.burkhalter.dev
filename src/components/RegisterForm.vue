<script setup>
import { REGISTER } from "@/api/mutations"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { useMutation } from "@vue/apollo-composable"
import { ref } from "vue"

const authStore = useAuthStore()
const popupStore = usePopupStore()

const email = ref("")
const password = ref("")
const firstName = ref("")
const lastName = ref("")
const promotion = ref("")
const isPublic = ref(false)

const {
  mutate: register,
  error: registerError,
  onDone: onRegisterDone,
} = useMutation(REGISTER, () => ({
  variables: {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    promotion: promotion.value,
    isPublic: isPublic.value,
  },
}))

onRegisterDone((result) => {
  const data = result.data.register
  authStore.token = data.token
  authStore.user = data.user
  popupStore.component = false
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-bold text-center">Inscription</h2>
    <span v-if="registerError" class="text-red-500">
      {{ registerError.message }}
    </span>

    <label>E-mail<span class="text-etml">*</span> :</label>
    <input
      type="text"
      v-model="email"
      class="p-2 border rounded-sm"
      @keyup.enter="register"
    />

    <label>Mot de passe<span class="text-etml">*</span> :</label>
    <input
      type="password"
      v-model="password"
      class="p-2 border rounded-sm"
      @keyup.enter="register"
    />

    <label>Prénom :</label>
    <input
      type="text"
      v-model="firstName"
      class="p-2 border rounded-sm"
      @keyup.enter="register"
    />

    <label>Nom :</label>
    <input
      type="text"
      v-model="lastName"
      class="p-2 border rounded-sm"
      @keyup.enter="register"
    />

    <label>Classe :</label>
    <select
      v-model="promotion"
      class="p-2 bg-white border rounded-sm"
      @keyup.enter="register"
    >
      <option></option>
      <option value="mtu1e">MTU1E</option>
    </select>

    <span class="text-sm text-etml">*champs obligatoires</span>
    <button
      @click="register"
      class="p-2 mt-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
    >
      S'incrire
    </button>
  </div>
</template>
