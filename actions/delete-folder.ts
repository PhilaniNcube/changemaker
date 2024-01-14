"use server"

import cloudinary from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function deleteFolderAction(formData:FormData){

const folderName = formData.get('folderName') as string;


// delete folder from cloudinary
const data = cloudinary.v2.api.delete_folder(folderName).then((result) => console.log(result)).catch(err => console.error(err));
console.log({data})


revalidatePath("/dashboard/media")

}


export default deleteFolderAction;
