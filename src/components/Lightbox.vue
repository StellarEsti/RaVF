<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Icon from "./Icon.vue";
defineProps({ image: Object });
const emit = defineEmits(["close"]);
const dialog = ref(null);
let previousFocus;
function close() {
  emit("close");
}
onMounted(() => {
  previousFocus = document.activeElement;
  dialog.value.showModal();
  document.body.classList.add("modal-open");
});
onUnmounted(() => {
  document.body.classList.remove("modal-open");
  previousFocus?.focus();
});
</script>

<template>
  <dialog
    ref="dialog"
    class="figure-dialog"
    aria-label="Expanded research figure"
    @cancel.prevent="close"
    @click="
      (event) => {
        if (event.target === dialog) close();
      }
    "
  >
    <div class="lightbox-header">
      <span>{{ image.title }}</span
      ><button class="icon-button" aria-label="Close figure" @click="close">
        <Icon name="close" />
      </button>
    </div>
    <div class="lightbox-image">
      <img :src="image.src" :alt="image.alt || image.title" />
    </div>
    <div class="lightbox-footer">
      <span>{{ image.caption }}</span
      ><a :href="image.src" target="_blank" rel="noopener noreferrer"
        >Open image <Icon name="arrow" :size="14"
      /></a>
    </div>
  </dialog>
</template>
