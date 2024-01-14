"use server"

import cloudinary from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";


export async function deleteAsset(formData:FormData) {

  const id = formData.get("id") as string;
  const folder = formData.get("folder") as string;

  await cloudinary.v2.uploader
    .destroy(id)
    .then((result) => {
      console.log(result);
      revalidatePath(`/dashboard/media/${encodeURIComponent(folder)}`);
    })
    .catch((err) => console.error(err));
}
