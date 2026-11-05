<script setup>
defineProps({ name: String, size: { type: [Number, String], default: 18 } });
const paths = {
  arrow: ["M7 17 17 7M7 7h10v10"],
  down: ["m6 9 6 6 6-6"],
  paper: [
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    "M14 2v6h6M8 13h8M8 17h6",
  ],
  code: ["m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16"],
  copy: ["M9 9h11v11H9z", "M15 5V2H2v13h3"],
  check: ["m5 12 4 4L19 6"],
  close: ["m6 6 12 12M6 18 18 6"],
  expand: ["M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"],
  image: ["M3 3h18v18H3z", "m3 17 6-6 4 4 3-3 5 5M8 7h.01"],
  menu: ["M4 6h16M4 12h16M4 18h16"],
};
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.65"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(path, i) in paths[name] || paths.arrow" :key="i" :d="path" />
  </svg>
</template>
