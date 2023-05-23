<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth();

const isAuthenticated = computed(() => {
  return status.value === "authenticated" ? true : false;
});

const handleSignIn = async () => {
  await signIn("github");
};

const handleSignOut = async () => {
  await signOut({ callbackUrl: "/" });
};
</script>

<template>
  <div v-if="!isAuthenticated" class="flex gap-3">
    <Icon
      name="solar:user-rounded-broken"
      size="3rem"
      color="#2c2c31"
      class="rounded-full bg-gray-200 p-3"
    />

    <div>
      <span @click="handleSignIn" class="cursor-pointer underline hover:text-gray-50">
        Crie a sua conta
      </span>
      <br />
      e salve suas memórias!
    </div>
  </div>

  <div v-else class="flex items-center gap-3">
    <div class="relative">
      <NuxtImg :src="data?.user?.image!" width="48" height="48" class="rounded-full" />
    </div>

    <div>
      <p class="text-gray-50">{{ data?.user?.name }}</p>
      <button
        @click.prevent="handleSignOut"
        class="flex items-center gap-1 text-sm text-red-400 transition-colors hover:text-red-500"
      >
        quero sair

        <Icon name="solar:logout-line-duotone" size="1.25rem" color="#f43f5e" />
      </button>
    </div>
  </div>
</template>
