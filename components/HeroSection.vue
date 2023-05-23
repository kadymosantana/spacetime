<template>
  <div class="space-y-6">
    <NuxtImg src="./nlw-logo.svg" />

    <div class="space-y-4 md:space-y-0">
      <h1 class="text-4xl font-bold leading-snug text-gray-50 md:text-5xl lg:leading-relaxed">
        Sua cápsula do tempo
      </h1>
      <p class="max-w-sm">
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
      </p>
    </div>

    <NuxtLink
      to="/memories/new"
      class="inline-block rounded-full bg-green-500 px-5 py-3 font-title text-sm font-semibold text-zinc-950 md:text-base"
    >
      CADASTRAR LEMBRANÇA
    </NuxtLink>
  </div>
</template>
