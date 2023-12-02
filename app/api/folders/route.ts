import cloudinary from "@/utils/cloudinary";
import { NextResponse } from "next/server";



export async function POST(request: Request) {

  const {name} = await request.json();

 const data = cloudinary.v2.api
.create_folder(name)
.then(result => {
  return result
} );



  return NextResponse.json({details: 'Folder created', data: data})

}

export async function GET(request: Request) {

 const data = cloudinary.v2.api
.root_folders()
.then(result => {
  return result
} ).catch(err => console.error(err));



  return NextResponse.json({details: 'Folders', data: data})

}




export async function DELETE(request: Request) {

 const data = cloudinary.v2.api
.root_folders()
.then(result => {
  return result
} ).catch(err => console.error(err));



  return NextResponse.json({details: 'Folders', data: data})

}
