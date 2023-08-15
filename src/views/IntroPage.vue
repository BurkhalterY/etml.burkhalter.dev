<script setup>
import LoginForm from "@/components/LoginForm.vue"
import RegisterForm from "@/components/RegisterForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"

const popupStore = usePopupStore()
const authStore = useAuthStore()
</script>

<template>
  <div class="flex flex-col text-etml xl:ml-[50%]">
    <div class="grid grid-cols-3 gap-1 mb-8">
      <img src="/img/etml.svg" alt="ETML" loading="lazy" />
      <div class="col-span-2">
        <h1 class="leading-3 font-logo">
          <br />Ecole Technique <br />Ecole des metiers Lausanne
        </h1>
        <hr class="my-8 border-etml" />
        <div class="flex flex-col gap-2 text-sm">
          <ul>
            <li>
              <a href="https://etml.burkhalter.dev/" class="hover:underline">
                etml.burkhalter.dev
              </a>
            </li>
            <li>Codé avec 💙 par votre délégué Yannis Burkhalter</li>
          </ul>
          <ul>
            <li>
              E-mail :
              <a href="mailto:yannis@burkhalter.dev" class="hover:underline">
                yannis@burkhalter.dev
              </a>
            </li>
            <li>
              Discord :
              <a
                href="https://discord.com/users/317230160124313610"
                target="_blank"
                class="hover:underline"
              >
                aestetica
              </a>
            </li>
          </ul>
          <ul>
            <li>&copy; 2023 Yannis Burkhalter</li>
            <li>
              Le logo et les images appartiennent à
              <a
                href="https://www.etml.ch/"
                target="_blank"
                class="hover:underline"
              >
                l'école
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2 class="mb-4 text-3xl font-light">Agenda</h2>
    <div class="relative flex-grow">
      <div
        class="flex flex-col h-full gap-6 p-2 -m-2 duration-300 ease-linear rounded"
        :class="{ 'bg-slate-200 blur-sm grayscale': !authStore.logged }"
      >
        <div class="flex items-end gap-1">
          <label>Prénom :</label>
          <input
            type="text"
            :value="authStore.user?.firstName"
            readonly
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
          />
          <label>Nom :</label>
          <input
            type="text"
            :value="authStore.user?.lastName"
            readonly
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
          />
        </div>
        <div class="flex items-end gap-1">
          <label>E-mail :</label>
          <input
            type="text"
            :value="authStore.user?.email"
            readonly
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
          />
        </div>
        <div class="flex items-end gap-1">
          <label>Classe :</label>
          <select
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
          >
            <option selected hidden></option>
            <option>MTU1E</option>
            <option>MTU2E</option>
          </select>
        </div>
        <textarea
          placeholder="Bio..."
          readonly
          class="flex-grow p-2 bg-transparent border outline-none resize-none text-bic-blue border-etml font-handwriting"
        ></textarea>
        <button
          @click="authStore.logout"
          class="w-full p-2 -mt-2 border rounded border-etml hover:bg-etml hover:text-white"
        >
          Déconnexion
        </button>
      </div>
      <div
        v-if="!authStore.logged"
        class="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-2"
      >
        <div class="flex gap-2">
          <button
            @click="popupStore.component = LoginForm"
            class="w-32 p-2 text-white rounded bg-etml hover:brightness-125"
          >
            Connexion
          </button>
          <button
            @click="popupStore.component = RegisterForm"
            class="w-32 p-2 text-white rounded bg-etml hover:brightness-125"
          >
            Inscription
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
