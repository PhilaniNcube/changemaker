"use client";
import React, { useState } from "react";

import { CldUploadButton } from "next-cloudinary";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const Upload = () => {
  const router = useRouter();

  const supabase = createClient();
  const [uploadResult, setUploadResult] = useState();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function handleOnUpload(result: any, widget: any) {
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
        return;
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else if (data) {
        toast("Document succesfully uploaded", {
          type: "success",
        });

        widget.close();
      }
    } else {
      widget.close();
      toast("error saving document to database!", {
        type: "error",
      });
      widget.close();
    }

    router.refresh();
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
          options={{
            folder: "documents",
          }}
        >
          <span className="px-4 py-2 font-medium text-white rounded-md bg-masifunde">
            Upload Document
          </span>
        </CldUploadButton>
      </div>
    </div>
  );
};

export default Upload;
