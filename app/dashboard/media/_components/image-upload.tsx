"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { toast } from "react-toastify";

type Info = {
  access_mode: string;
  asset_id: string;
  batchId: string;
  bytes: number;
  created_at: string;
  etag: string;
  folder: string;
  format: string;
  height: number;
  id: string;
  original_filename: string;
  path: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: any[];
  thumbnail_url: string;
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};

type Result = {
  event: string;
  info: Info;
};

type Props = {
folderName: string;
}

const ImageUpload = ({folderName}:Props) => {

    const [image, setImage] = useState(null);

    async function handleOnUpload(result: Result, widget: any) {
      if (result.event === "success") {
        // setImage(result.info);
        widget.close();
        return;
      } else if (result.event !== "success") {
        toast("Image upload failed", {
          type: "error",
        });
        widget.close();
      }
    }

  return (
    <div>
      {" "}
      <div className="col-span-3 sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900 sr-only">
          Select Image
        </label>
        <div className="flex mt-2 rounded-md shadow-sm">
          <div className="px-4 py-2 text-sm font-medium text-white bg-blue-400 rounded-md w-fit">
            <CldUploadButton
              onUpload={handleOnUpload}
              uploadPreset="kfo3j4ot"
              options={{
                folder: folderName,
              }}
            >
              Select Image
            </CldUploadButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageUpload;
