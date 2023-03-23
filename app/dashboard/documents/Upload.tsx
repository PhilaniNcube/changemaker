"use client"
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CldUploadButton } from "next-cloudinary";
import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


const Upload = () => {

    const router =  useRouter()

    const { supabase } = useSupabase();
    const [uploadResult, setUploadResult] = useState();

    async function handleOnUpload(result: any, widget: any) {
      console.log({ result, widget });
      setUploadResult(result.info);
      // save the result in the documents table

      if (result.event === "success") {
        const { data, error } = await supabase
          .from("documents")
          .insert([
            {
              src: result.info.url,
              title: result.info.original_filename,
            },
          ])
          .select("*")
          .single();

        if (error) {
          widget.close();
          toast("error saving document to database!", {
            type: "error",
          });
          widget.close();
          return
        } else if (data) {
          toast("Document succesfully uploaded", {
            type: "success",
          });
          console.log({ data });
          widget.close();
        }

      } else {
          widget.close();
          toast("error saving document to database!", {
            type: "error",
          });
          widget.close();
      }


      router.refresh()
    }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={4000} />


          <div className="mt-[25px] flex justify-end">
            <CldUploadButton
              onUpload={handleOnUpload}
              uploadPreset="kfo3j4ot"
              onError={() =>
                toast("error saving document to database!", {
                  type: "error",
                })
              }
            >
              <span className="bg-accent text-white px-4 py-2 font-medium rounded-md">
                Upload Document
              </span>
            </CldUploadButton>
          </div>


    </div>
  );
}

export default Upload;
