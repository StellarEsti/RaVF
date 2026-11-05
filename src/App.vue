<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Lightbox from "./components/Lightbox.vue";
const image = ref(null);
function onImage(event) {
  image.value = event.detail;
}
onMounted(() => window.addEventListener("ravf:figure", onImage));
onUnmounted(() => window.removeEventListener("ravf:figure", onImage));
</script>

<template>
  <Header />
  <Main />
  <Footer />
  <Lightbox v-if="image" :image="image" @close="image = null" />
</template>
