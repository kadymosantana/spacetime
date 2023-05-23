import { callWithNuxt, useNuxtApp } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  const nuxtApp = useNuxtApp();
  const { status, signIn } = useAuth();

  if (status.value === "authenticated") {
    return;
  }

  await callWithNuxt(nuxtApp, signIn, ["github", { callbackUrl: to.path }]);
});
