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

const {
  mutate: register,
  loading: registerLoading,
  error: registerError,
  onDone: onRegisterDone,
} = useMutation(REGISTER, () => ({
  variables: {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
  },
}))

onRegisterDone((result) => {
  authStore.login(result.data.register.token)
  popupStore.component = null
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-semibold text-center">Inscription</h2>
    <span v-if="registerError" class="text-red-500">
      {{ registerError.message }}
    </span>

    <label>E-mail<span class="text-etml">*</span> :</label>
    <input
      type="text"
      v-model="email"
      @keyup.enter="register"
      class="p-2 border rounded-sm"
    />

    <label>Mot de passe<span class="text-etml">*</span> :</label>
    <input
      type="password"
      v-model="password"
      @keyup.enter="register"
      class="p-2 border rounded-sm"
    />

    <label>Prénom :</label>
    <input
      type="text"
      v-model="firstName"
      @keyup.enter="register"
      class="p-2 border rounded-sm"
    />

    <label>Nom :</label>
    <input
      type="text"
      v-model="lastName"
      @keyup.enter="register"
      class="p-2 border rounded-sm"
    />

    <span class="text-sm text-etml">*champs obligatoires</span>
    <button
      @click="register"
      class="p-2 mt-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
      :disabled="registerLoading"
    >
      S'incrire
    </button>
  </div>
</template>
