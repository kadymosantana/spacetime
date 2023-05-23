export const useCoverUpload = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files![0];

  const uploadFormData = new FormData();
  uploadFormData.append("cover", file);

  const { data: url } = await useFetch("/api/upload", {
    method: "POST",
    body: uploadFormData
  });

  return { url };
};
