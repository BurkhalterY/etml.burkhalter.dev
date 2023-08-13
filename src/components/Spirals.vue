<script setup>
const props = defineProps(["firstPage", "lastPage"])
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 455.23 277.06"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="333.24"
        y1="99.64"
        x2="455.23"
        y2="99.64"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#4d4d4d" />
        <stop offset="1" stop-color="#818281" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="0"
        y1="99.64"
        x2="121.98"
        y2="99.64"
        xlink:href="#linear-gradient"
      />
      <radialGradient
        id="radial-gradient"
        cx="191.31"
        cy="1742.77"
        r="156.03"
        gradientTransform="translate(0 -1311.33) scale(1 0.84)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.8" stop-color="#474848" />
        <stop offset="0.83" stop-color="#636363" />
        <stop offset="0.84" stop-color="#5c5c5c" />
        <stop offset="0.85" stop-color="#505050" />
        <stop offset="0.87" stop-color="#4c4c4c" />
        <stop offset="0.87" stop-color="#595959" />
        <stop offset="0.88" stop-color="#7d7d7d" />
        <stop offset="0.9" stop-color="#b6b6b6" />
        <stop offset="0.91" stop-color="#dbdbdb" />
        <stop offset="0.91" stop-color="#cdcdcd" />
        <stop offset="0.93" stop-color="#939393" />
        <stop offset="0.94" stop-color="#6f7070" />
        <stop offset="0.94" stop-color="#616262" />
        <stop offset="0.95" stop-color="#656666" />
        <stop offset="0.97" stop-color="#727373" />
        <stop offset="0.98" stop-color="#818281" />
        <stop offset="0.98" stop-color="#7f807f" />
        <stop offset="0.99" stop-color="#4a4c4b" />
        <stop offset="1" stop-color="#353837" />
      </radialGradient>
      <radialGradient
        id="radial-gradient-2"
        cx="118.31"
        cy="1742.77"
        r="156.03"
        gradientTransform="matrix(-1, 0, 0, 0.84, 382.36, -1311.33)"
        xlink:href="#radial-gradient"
      />
      <radialGradient
        id="radial-gradient-3"
        cx="227.08"
        cy="1761.85"
        r="195.87"
        xlink:href="#radial-gradient"
      />
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Calque_1-2" data-name="Calque 1">
        <path
          v-if="!lastPage"
          id="rightHole"
          d="M455.23,99.63a61,61,0,1,1-61-61A61,61,0,0,1,455.23,99.63Z"
          style="fill: url(#linear-gradient)"
        />
        <path
          v-if="!firstPage"
          id="leftHole"
          d="M122,99.63a61,61,0,1,1-5.29-24.86A61,61,0,0,1,122,99.63Z"
          style="fill: url(#linear-gradient-2)"
        />
        <path
          v-if="lastPage"
          id="lastPage"
          d="M191.31,246.23c69,0,125.14-44.38,125.14-98.92S260.31,48.39,191.31,48.39c-29.17,0-56,7.93-77.34,21.21-29.09,18.12-47.8,46.22-47.8,77.71a78.19,78.19,0,0,0,1.1,13.11,63.12,63.12,0,0,1-6.33.32,60.64,60.64,0,0,1-25.32-5.49c-.18-2.63-.28-5.27-.28-7.94C35.34,112,52,79.09,82.2,54.51c3.14-2.55,6.4-5,9.75-7.29,27.88-19.2,62.69-29.65,99.36-29.65,41.08,0,79.83,13.12,109.12,36.94,30.21,24.58,46.84,57.53,46.84,92.8s-16.63,68.23-46.84,92.81c-29.29,23.82-68,36.94-109.12,36.94"
          style="fill: url(#radial-gradient)"
        />
        <path
          v-if="firstPage"
          id="firstPage"
          d="M264,246.23c-69,0-125.14-44.38-125.14-98.92S195.05,48.39,264,48.39c29.17,0,56,7.93,77.34,21.21,29.09,18.12,47.81,46.22,47.81,77.71a77.16,77.16,0,0,1-1.11,13.11,63.17,63.17,0,0,0,6.34.32,60.6,60.6,0,0,0,25.31-5.49c.19-2.63.29-5.27.29-7.94,0-35.27-16.65-68.22-46.86-92.8-3.14-2.55-6.4-5-9.76-7.29C335.53,28,300.72,17.57,264,17.57c-41.07,0-79.82,13.12-109.11,36.94-30.22,24.58-46.85,57.53-46.85,92.8s16.63,68.23,46.85,92.81c29.29,23.82,68,36.94,109.11,36.94"
          style="fill: url(#radial-gradient-2)"
        />
        <path
          v-if="!firstPage && !lastPage"
          id="allPages"
          d="M363.57,46.91c-.47-.4-.94-.78-1.42-1.17C325.9,16.24,277.92,0,227.07,0S128.25,16.24,92,45.74l-1,.8C56,75.41,36,113.47,34.13,154.39a61,61,0,0,0,38,5.21c.34-33,17.28-62.94,44.53-84.83,28.12-22.58,67.22-36.6,110.38-36.6,43.57,0,83,14.29,111.17,37.26C365,97.2,381.58,126.79,382,159.4A61.22,61.22,0,0,0,420,154.91C418.34,114,398.45,75.85,363.57,46.91Z"
          style="fill: url(#radial-gradient-3)"
        />
      </g>
    </g>
  </svg>
</template>
