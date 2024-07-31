"use client"

import type { Database } from '@/schema';
import {CldUploadButton} from 'next-cloudinary'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createClient } from '@/utils/supabase/client';

type Props = {
  organisation: Database['public']['Tables']['organisations']['Row']
}



const DocumentsUpload = ({organisation}: Props) => {

  const supabase = createClient()

  const [uploadResult, setUploadResult] = useState()

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function handleOnUpload(result:any, widget:any) {

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
      <div className="px-4 py-1 text-white rounded-md bg-masifunde w-fit">
        <ToastContainer position="top-right" autoClose={4000} />
        <CldUploadButton onUpload={handleOnUpload} uploadPreset="kfo3j4ot" options={{
          folder: "Documents"
        }} />
      </div>
    </div>
  );
};
export default DocumentsUpload;
