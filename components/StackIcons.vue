<script setup lang="ts">
const icons = [
  {
    name: "cib:typescript",
    size: "1.35rem",
    class: "hover:text-blue-ts"
  },
  {
    name: "simple-icons:vuedotjs",
    size: "1.5rem",
    class: "hover:text-green-vue"
  },
  {
    name: "simple-icons:nuxtdotjs",
    size: "1.8rem",
    class: "hover:text-green-nuxt"
  },
  {
    name: "simple-icons:tailwindcss",
    size: "1.5rem",
    class: "hover:text-blue-tailwind"
  }
];
</script>

<template>
  <div class="hidden space-x-4 md:block">
    <Icon v-for="icon in icons" :name="icon.name" :size="icon.size" :class="icon.class" />
  </div>
</template>
