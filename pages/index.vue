<script setup lang="ts">
const { data: memories } = await useFetch("/api/memories");
</script>

<template>
  <div v-if="!memories?.length" class="hidden flex-1 items-center justify-center md:flex md:h-full">
    <p class="text-center">
      Você ainda não registrou nenhuma lembrança, <br />
      comece a

      <NuxtLink to="/memories/new" class="underline hover:text-gray-50"> criar agora! </NuxtLink>
    </p>
  </div>

  <ul v-else class="relative space-y-12">
    <li v-for="memory in memories" :key="memory.id" class="space-y-4">
      <time
        class="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50 md:-ml-16"
      >
        {{ formatDate(memory.date, "long") }}
      </time>

      <NuxtImg
        :src="memory.coverUrl"
        quality="100"
        class="aspect-video w-full rounded-2xl object-cover"
      />

      <p>{{ memory.content }}</p>

      <NuxtLink
        :to="'/memories/' + memory.id"
        class="flex items-center gap-2 text-gray-50 transition-colors hover:text-green-500"
      >
        <Icon name="solar:pen-broken" size="1.15rem" />
        Editar
      </NuxtLink>
    </li>
  </ul>
</template>
