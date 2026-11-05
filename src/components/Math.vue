<script setup>
import { computed } from "vue";
import katex from "katex";
const props = defineProps({
  tex: String,
  display: { type: Boolean, default: true },
});
const html = computed(() =>
  katex.renderToString(props.tex, {
    displayMode: props.display,
    throwOnError: false,
    output: "htmlAndMathml",
  }),
);
</script>

<template><div class="math-expression" v-html="html"></div></template>
