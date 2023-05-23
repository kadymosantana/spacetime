<script setup lang="ts">
const { status } = useAuth();

const isAuthenticated = computed(() => {
  return status.value === "authenticated" ? true : false;
});
</script>

<template>
  <div class="grid w-screen grid-cols-1 bg-gray-900 text-gray-100 md:h-screen md:grid-cols-2">
    <!-- Left -->
    <div
      class="relative flex flex-col justify-between gap-20 overflow-hidden border-r border-white/10 bg-[url('/bg-stars.svg')] bg-cover p-8 md:h-screen lg:px-28 lg:py-16"
    >
      <!-- Blur effect -->
      <div
        class="translate absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-[194px]"
      ></div>

      <!-- Stripes effect -->
      <div class="absolute bottom-0 right-2 top-0 hidden w-2 bg-stripes md:block"></div>

      <Profile />
      <HeroSection />
      <StackIcons />
    </div>

    <!-- Right -->
    <div
      :class="{ 'flex h-screen items-center justify-center': !isAuthenticated }"
      class="relative overflow-y-auto bg-[url('/bg-stars.svg')] p-8 md:p-16"
    >
      <!-- Stripes effect -->
      <div class="absolute bottom-0 left-0 top-0 w-2 bg-stripes md:hidden"></div>

      <slot />
    </div>
  </div>
</template>
