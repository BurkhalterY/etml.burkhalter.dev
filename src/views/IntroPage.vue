<script setup>
import LoginForm from "@/components/LoginForm.vue"
import RegisterForm from "@/components/RegisterForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"

const popupStore = usePopupStore()
const authStore = useAuthStore()
</script>

<template>
  <div class="flex flex-col pl-16 text-etml xl:ml-[50%]">
    <div class="grid grid-cols-7 mb-8">
      <img class="col-span-2 p-1" src="/img/etml.png" alt="ETML" />
      <div class="col-span-5">
        <h1 class="text-lg font-bold leading-none font-logo">
          <br />Ecole Technique <br />Ecole des metiers Lausanne
        </h1>
        <hr class="my-8 border-etml" />
        <div class="flex flex-col gap-2 text-sm">
          <ul>
            <li>
              <a href="https://etml.burkhalter.dev/" class="hover:underline"
                >etml.burkhalter.dev</a
              >
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
                target="_blank"
                href="https://discord.com/users/317230160124313610"
                class="hover:underline"
              >
                aestetica
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BurkhalterY/etml.burkhalter.dev"
                target="_blank"
                class="hover:underline"
              >
                View this on GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BurkhalterY/api.etml.burkhalter.dev"
                target="_blank"
                class="hover:underline"
              >
                View API on GitHub
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
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
            :value="authStore.user?.firstName"
            readonly
          />
          <label>Nom :</label>
          <input
            type="text"
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
            :value="authStore.user?.lastName"
            readonly
          />
        </div>
        <div class="flex items-end gap-1">
          <label>E-mail :</label>
          <input
            type="text"
            class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
            :value="authStore.user?.email"
            readonly
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
          class="flex-grow p-2 bg-transparent border outline-none resize-none text-bic-blue border-etml font-handwriting"
          placeholder="Bio..."
          readonly
        ></textarea>
      </div>
      <div
        v-if="!authStore.logged"
        class="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-2"
      >
        <div class="flex gap-2">
          <button
            class="w-32 p-2 text-white rounded bg-etml hover:brightness-125"
            @click="popupStore.component = LoginForm"
          >
            Connexion
          </button>
          <button
            class="w-32 p-2 text-white rounded bg-etml hover:brightness-125"
            @click="popupStore.component = RegisterForm"
          >
            Inscription
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
