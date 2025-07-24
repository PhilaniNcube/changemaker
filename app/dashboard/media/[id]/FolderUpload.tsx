"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Upload, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { revalidateFolderPage } from "@/actions/revalidate-folder";

interface FolderUploadProps {
  folderName: string;
  variant?: "button" | "icon";
  className?: string;
}

export default function FolderUpload({
  folderName,
  variant = "button",
  className = "",
}: FolderUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Handle successful upload
  async function handleOnSuccess(result: any, widget: any) {
    try {
      if (result.event === "success") {
        console.log("Upload successful:", result.info);

        toast.success(
          `Successfully uploaded ${result.info.original_filename}`,
          {
            position: "top-right",
            autoClose: 3000,
          }
        );

        widget.close();

        // Use startTransition with server action to revalidate the page data
        startTransition(async () => {
          try {
            await revalidateFolderPage(folderName);

            toast.success("Files refreshed successfully!", {
              position: "top-right",
              autoClose: 2000,
            });
          } catch (error) {
            console.error("Error refreshing data:", error);
            toast.error("Failed to refresh data. Please refresh manually.", {
              position: "top-right",
              autoClose: 3000,
            });
          } finally {
            setIsUploading(false);
          }
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      setIsUploading(false);

      toast.error("Failed to upload file. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });

      widget.close();
    }
  }

  // Handle upload errors
  function handleOnError(error: any) {
    console.error("Upload error:", error);
    setIsUploading(false);

    toast.error("Upload failed. Please try again.", {
      position: "top-right",
      autoClose: 3000,
    });
  }

  // Handle upload start
  function handleOnOpen() {
    setIsUploading(true);
  }

  // Handle upload cancel/close
  function handleOnClose() {
    if (!isPending) {
      setIsUploading(false);
    }
  }

  const isDisabled = isUploading || isPending;

  if (variant === "icon") {
    return (
      <CldUploadButton
        onSuccess={handleOnSuccess}
        onError={handleOnError}
        onOpen={handleOnOpen}
        onClose={handleOnClose}
        uploadPreset="kfo3j4ot"
        options={{
          folder: folderName,
          multiple: true,
          maxFiles: 10,
          sources: ["local", "url", "camera"],
          clientAllowedFormats: [
            "image",
            "video",
            "audio",
            "raw", // File types
            "pdf",
            "doc",
            "docx",
            "txt",
            "xls",
            "xlsx",
            "ppt",
            "pptx", // Document types
          ],
        }}
        className={className}
      >
        <Button
          size="sm"
          variant="outline"
          className="w-8 h-8 p-0"
          disabled={isDisabled}
          title={isPending ? "Refreshing files..." : "Upload files"}
        >
          {isDisabled ? (
            <div className="w-4 h-4 border-2 border-current rounded-full animate-spin border-t-transparent" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </Button>
      </CldUploadButton>
    );
  }

  return (
    <CldUploadButton
      onSuccess={handleOnSuccess}
      onError={handleOnError}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      uploadPreset="kfo3j4ot"
      options={{
        folder: folderName,
        multiple: true,
        maxFiles: 10,
        sources: ["local", "url", "camera"],
        clientAllowedFormats: [
          "image",
          "video",
          "audio",
          "raw", // File types
          "pdf",
          "doc",
          "docx",
          "txt",
          "xls",
          "xlsx",
          "ppt",
          "pptx", // Document types
        ],
      }}
      className={className}
    >
      <Button disabled={isDisabled} className="gap-2">
        {isUploading ? (
          <>
            <div className="w-4 h-4 border-2 border-current rounded-full animate-spin border-t-transparent" />
            Uploading...
          </>
        ) : isPending ? (
          <>
            <div className="w-4 h-4 border-2 border-current rounded-full animate-spin border-t-transparent" />
            Refreshing...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4" />
            Upload Files
          </>
        )}
      </Button>
    </CldUploadButton>
  );
}
