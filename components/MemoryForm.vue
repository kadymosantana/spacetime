<script setup lang="ts">
const { method } = defineProps({
  method: { type: String, required: true }
});

const route = useRoute();

const memoryDate = ref("");
const content = ref("");
const coverUrl = ref<string | null>(null);

if (method === "PUT") {
  const { data: memory } = await useFetch(`/api/memories/${route.params.id}`);

  const formatedDate = formatDate(memory.value!.date, "numeric");

  memoryDate.value = formatedDate.split("/").reverse().join("-");
  content.value = memory.value!.content;
  coverUrl.value = memory.value!.coverUrl;
}

const createMemory = async () => {
  const date = new Date(memoryDate.value).toISOString();

  await useFetch("/api/memories", {
    method: "POST",
    body: {
      content: content.value,
      coverUrl: coverUrl.value,
      date
    }
  });
};

const updateMemory = async () => {
  const date = new Date(memoryDate.value).toISOString();

  await useFetch(`/api/memories/${route.params.id}`, {
    method: "PUT",
    body: {
      content: content.value,
      coverUrl: coverUrl.value,
      date
    }
  });
};

const deleteMemory = async () => {
  const confirmation = confirm("Deseja mesmo excluir?");

  if (!confirmation) return;

  await useFetch(`/api/memories/${route.params.id}`, {
    method: "DELETE"
  });

  navigateTo("/");
};

const handleFormSubmit = async () => {
  if (!memoryDate.value || !coverUrl.value || !content.value) {
    return alert("Por favor, preencha todos os campos para continuar.");
  }

  if (method === "POST") await createMemory();
  else if (method === "PUT") await updateMemory();

  navigateTo("/");
};

const handleCoverFile = async (e: Event) => {
  const { url } = await useCoverUpload(e);
  coverUrl.value = url.value;
};
</script>

<template>
  <form @submit.prevent="handleFormSubmit" class="flex flex-col gap-5">
    <div class="flex flex-col gap-4 md:flex-row md:items-center">
      <label
        for="cover"
        class="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-3 py-2 md:border-none md:p-0"
      >
        <Icon name="solar:gallery-add-line-duotone" size="1.25rem" />
        Anexar mídia

        <input
          @input="handleCoverFile"
          type="file"
          multiple="false"
          name="cover"
          id="cover"
          class="invisible h-0 w-0"
        />
      </label>

      <label for="date" class="-pr-3 flex items-center rounded-lg border border-gray-500 pl-3">
        <Icon name="solar:calendar-line-duotone" size="1.25rem" />

        <input
          v-model="memoryDate"
          type="date"
          name="date"
          id="date"
          class="rounded-lg border-none bg-transparent text-gray-100"
        />
      </label>
    </div>

    <NuxtImg
      v-if="coverUrl"
      :src="coverUrl"
      quality="100"
      class="aspect-video w-full rounded-xl object-cover"
    />

    <textarea
      v-model="content"
      name="content"
      id="content"
      rows="8"
      class="h-full w-full resize-none border-0 bg-transparent p-0 text-lg placeholder:text-gray-400 focus:ring-0"
      placeholder="Adicione relatos sobre essa experiência que você quer lembrar para sempre."
    ></textarea>

    <div class="mb-8 flex justify-end gap-3">
      <button
        v-if="method === 'PUT'"
        @click.prevent="deleteMemory"
        type="button"
        class="justify-end self-end rounded-full bg-red-500 px-5 py-3 font-title font-semibold text-zinc-950"
      >
        EXCLUIR
      </button>

      <button
        type="submit"
        class="justify-end self-end rounded-full bg-green-500 px-5 py-3 font-title font-semibold text-zinc-950"
      >
        SALVAR
      </button>
    </div>
  </form>
</template>

<style scoped>
input[type="date"]::-webkit-inner-spin-button {
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 100%;
  opacity: 0;
}
</style>
