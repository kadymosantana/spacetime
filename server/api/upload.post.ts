import crypto from "node:crypto";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);

  const file = formData![0];

  if (!file.type?.includes("image")) {
    throw createError({
      statusCode: 415,
      message: "Formato de arquivo não suportado."
    });
  }

  const base64 = file.data.toString("base64");
  const fileURI = `data:${file.type};base64,${base64}`;

  const fileHash = crypto.randomBytes(10).toString("hex");
  const fileName = `${fileHash}-${file.filename!.split(".")[0]}`;

  const { url } = await cloudinary.uploader.upload(fileURI, {
    folder: "spacetime",
    public_id: fileName
  });

  return url;
});
