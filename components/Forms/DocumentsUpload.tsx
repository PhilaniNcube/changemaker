"use client"

import { Database } from '@/schema';
import {CldUploadButton} from 'next-cloudinary'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useSupabase } from '../Auth/SupabaseProvider';
import "react-toastify/dist/ReactToastify.css";

type Props = {
  organisation: Database['public']['Tables']['organisations']['Row']
}



const DocumentsUpload = ({organisation}: Props) => {

  const {supabase} = useSupabase();

  const [uploadResult, setUploadResult] = useState()

async function handleOnUpload(result:any, widget:any) {
  console.log({result, widget})
  setUploadResult(result.info)
// save the result in the documents table

  if(result.event === 'success') {
    const {data, error} = await supabase.from('documents').insert([{src: result.info.url, organisation_id:organisation.id, title:result.info.original_filename}]).select('*').single()

    if(error) {
       widget.close();
        toast("error saving document to database!", {
          type: "error",
        });
        widget.close();

    } else if(data) {

      toast("Document succesfully uploaded", {
        type: "success",
      });
      console.log({data})
    }
      toast("Document succesfully uploaded", {
        type: "success",
      });
  widget.close();

  }
return

}

  return (
    <div className="w-full">
      <div className="bg-accent w-fit rounded-md text-white px-4 py-1">
        <ToastContainer position="top-right" autoClose={4000} />
        <CldUploadButton onUpload={handleOnUpload} uploadPreset="kfo3j4ot" />
      </div>
    </div>
  );
};
export default DocumentsUpload;
