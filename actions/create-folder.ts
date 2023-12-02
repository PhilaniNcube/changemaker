"use server"

import supabaseServer from "@/lib/supabase-server";
import cloudinary from "@/utils/cloudinary";
import { redirect } from "next/navigation";

async function createFolderAction(formData: FormData) {

const folderName = formData.get('folderName') as string;

// regex to remove trailing slash and space and non aplhanumeric characters
const regex = /[^a-zA-Z0-9]/g;
const folderNameClean = folderName.replace(regex, ' ');


// create folder from cloudinary
const data = await cloudinary.v2.api.create_folder(folderNameClean.toLowerCase()).then(result => result.json()).catch(err => console.error(err));

redirect('/dashboard/media')

}


export default createFolderAction;
