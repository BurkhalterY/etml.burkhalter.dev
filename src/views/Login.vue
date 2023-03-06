<template>
  <div class="flex flex-col pl-16 text-etml" style="margin-left: 50%">
    <div class="grid grid-cols-8">
      <img class="col-span-3 p-1" src="/img/etml.png" />
      <div class="col-span-5">
        <h1 class="text-lg font-bold leading-none font-logo">
          <br />Ecole Technique<br />Ecole des metiers Lausanne
        </h1>
        <hr class="my-8 border-etml" />
        <div class="text-sm">
          <p class="pb-2">
            Rue de Sébeillon 12<br />
            1004 Lausanne<br />
            Tél. <a href="tel:+41213167777">021 316 77 77</a>
          </p>
          <p class="pb-2">
            E-mail :
            <a href="mailto:secretariat.etml@eduvaud.ch">
              secretariat.etml@eduvaud.ch
            </a>
          </p>
          <p class="pb-2">
            Site : <a href="https://www.etml.ch" target="_blank">www.etml.ch</a>
          </p>
          <p class="pb-2">
            Suivi des élèves :<br />
            <a href="https://gesteleves.etmlnet.local" target="_blank">
              https://gesteleves.etmlnet.local
            </a>
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-grow mt-4 gap-y-6">
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
        class="flex-grow p-2 border outline-none text-bic-blue border-etml font-handwriting"
        placeholder="Bio..."
      ></textarea>
    </div>
  </div>
</template>
