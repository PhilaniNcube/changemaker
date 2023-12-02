"use server"

import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";

async function createFolderAction(formData: FormData) {

const folderName = formData.get('folderName') as string;


// create folder from cloudinary
const data = await cloudinary.v2.api.create_folder(folderName).then(result => result.json()).catch(err => console.log(err));

console.log(data);

}


export default createFolderAction;
