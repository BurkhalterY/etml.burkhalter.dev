<script setup>
import { LOGIN } from "@/api/mutations"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"
import { useMutation } from "@vue/apollo-composable"
import { ref } from "vue"

const authStore = useAuthStore()
const popupStore = usePopupStore()

const email = ref("")
const password = ref("")

const {
  mutate: login,
  loading: loginLoading,
  error: loginError,
  onDone: onLoginDone,
} = useMutation(LOGIN, () => ({
  variables: {
    email: email.value,
    password: password.value,
  },
}))

onLoginDone((result) => {
  authStore.login(result.data.login.token)
  popupStore.component = null
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-xl font-semibold text-center">Connexion</h2>
    <span v-if="loginError" class="text-red-500">
      {{ loginError.message }}
    </span>

    <label>E-mail :</label>
    <input
      type="text"
      v-model="email"
      @keyup.enter="login"
      class="p-2 border rounded-sm"
    />

    <label>Mot de passe :</label>
    <input
      type="password"
      v-model="password"
      @keyup.enter="login"
      class="p-2 border rounded-sm"
    />

    <button
      @click="login"
      class="p-2 mt-2 text-white rounded-sm bg-etml hover:opacity-90 active:opacity-80"
      :disabled="loginLoading"
    >
      Se connecter
    </button>
  </div>
</template>
