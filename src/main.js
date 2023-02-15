import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
import { createApp } from "vue"
import { VueFire, VueFireAuth } from "vuefire"
import App from "./App.vue"
import "./index.css"
import router from "./router"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC7wfsVJljP9j92tsVCWtNxbrdDFvplU1A",
  authDomain: "etml-burkhalter-dev.firebaseapp.com",
  databaseURL:
    "https://etml-burkhalter-dev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "etml-burkhalter-dev",
  storageBucket: "etml-burkhalter-dev.appspot.com",
  messagingSenderId: "264633384653",
  appId: "1:264633384653:web:99ed6bf6af3997c7c1f384",
  measurementId: "G-KB0930D7H0",
})
const analytics = getAnalytics(firebaseApp)

createApp(App)
  .use(router)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .mount("#app")
