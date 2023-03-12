<script setup>
import InformationPopup from "@/components/InformationPopup.vue"
import LoginForm from "@/components/LoginForm.vue"
import RegisterForm from "@/components/RegisterForm.vue"
import { useAuthStore } from "@/stores/auth"
import { usePopupStore } from "@/stores/popup"

const authStore = useAuthStore()
const popupStore = usePopupStore()

const title = "Pourquoi se créer un compte ?"
const content =
  "En vous créant un compte gratuitement sur etml.burkhalter.dev, vous accèdez aux fonctionnalités privées telles que le calculateur de moyenne et d'autres prochainement. Vous ne recevrez aucun e-mail suite à cette inscription."
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
            <li>Rue de Sébeillon 12</li>
            <li>1004 Lausanne</li>
            <li>
              Tél.
              <a href="tel:+41213167777" class="hover:underline">
                021 316 77 77
              </a>
            </li>
            <li>
              <a
                href="mailto:secretariat.etml@eduvaud.ch"
                class="hover:underline"
              >
                secretariat.etml@eduvaud.ch
              </a>
            </li>
            <li>
              <a
                href="https://www.etml.ch/"
                target="_blank"
                class="hover:underline"
              >
                www.etml.ch
              </a>
            </li>
          </ul>
          <ul>
            <li>&copy; 2023 Burkhalter Yannis</li>
            <li class="cursor-pointer hover:underline">etml.burkhalter.dev</li>
            <li>
              View on
              <a
                href="https://github.com/BurkhalterY/etml.burkhalter.dev"
                target="_blank"
                class="hover:underline"
              >
                GitHub
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
        :class="!authStore.user ? 'bg-slate-200 blur-sm grayscale' : ''"
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
        v-if="!authStore.user"
        class="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-2"
      >
        <div class="flex gap-2">
          <button
            class="p-2 text-white rounded bg-etml hover:bg-blue-500"
            @click="popupStore.component = LoginForm"
          >
            Connexion
          </button>
          <button
            class="p-2 text-white rounded bg-etml hover:bg-blue-500"
            @click="popupStore.component = RegisterForm"
          >
            Inscription
          </button>
        </div>
        <span
          class="cursor-pointer"
          @click="
            ;[
              (popupStore.component = InformationPopup),
              (popupStore.additionalData = { title, content }),
            ]
          "
        >
          Découvrir pourquoi se créer un compte ?
        </span>
      </div>
    </div>
  </div>
</template>
