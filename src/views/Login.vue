<template>
  <div class="flex flex-col pl-16 text-etml" style="margin-left: 50%">
    <div class="grid grid-cols-7">
      <img class="col-span-2 p-1" src="/img/etml.png" />
      <div class="col-span-5">
        <h1 class="text-lg font-bold leading-none font-logo">
          <br />Ecole Technique<br />Ecole des metiers Lausanne
        </h1>
        <hr class="my-8 border-etml" />
        <div class="flex flex-col text-sm gap-y-2">
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
            <li>
              <a
                href="https://etml.burkhalter.dev/"
                target="_blank"
                class="hover:underline"
              >
                etml.burkhalter.dev
              </a>
            </li>
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
    <div class="flex flex-col flex-grow mt-8 gap-y-6">
      <h2 class="text-3xl font-light">Agenda</h2>
      <div class="flex items-end gap-x-1">
        <label>Nom :</label>
        <input
          type="text"
          class="flex-grow w-0 px-2 text-xl border-b outline-none text-bic-blue border-etml font-handwriting"
          value="Burkhalter"
        />
        <label>Prénom :</label>
        <input
          type="text"
          class="flex-grow w-0 px-2 text-xl border-b outline-none text-bic-blue border-etml font-handwriting"
          value="Yannis"
        />
      </div>
      <div class="flex items-end gap-x-1">
        <label>E-mail :</label>
        <input
          type="text"
          class="flex-grow w-0 px-2 text-xl border-b outline-none text-bic-blue border-etml font-handwriting"
          value="yannis.burkhalter@eduvaud.ch"
        />
      </div>
      <div class="flex items-end gap-x-1">
        <label>Classe :</label>
        <select
          class="flex-grow w-0 px-2 text-xl bg-transparent border-b outline-none text-bic-blue border-etml font-handwriting"
        >
          <option>MTU1E</option>
          <option>MTU2E</option>
        </select>
      </div>
      <textarea
        class="flex-grow p-2 border outline-none resize-none text-bic-blue border-etml font-handwriting"
        placeholder="Bio..."
      ></textarea>
    </div>
  </div>
</template>
