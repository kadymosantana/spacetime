<template>
  <div class="flex flex-col items-center space-y-6 md:block">
    <NuxtImg src="./nlw-logo.svg" class="w-36 md:w-40" />

    <div class="space-y-4 text-center md:space-y-0 md:text-start">
      <h1 class="text-3xl font-bold text-gray-50 md:text-5xl md:leading-snug lg:leading-relaxed">
        Sua cápsula do tempo
      </h1>
      <p class="max-w-sm text-sm md:text-base">
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
