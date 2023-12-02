"use server"

import cloudinary from "@/utils/cloudinary";
import { redirect } from "next/navigation";

async function deleteFolderAction(formData:FormData){

const folderName = formData.get('folderName') as string;


// delete folder from cloudinary
const data = cloudinary.v2.api.delete_folder(folderName).then((result) => result.json()).catch(err => console.error(err));


redirect("/dashboard")

}


export default deleteFolderAction;
