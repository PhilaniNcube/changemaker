"use server";

import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function deleteCloudinaryResource(
  publicId: string,
  resourceType: "image" | "video" | "raw" = "image",
  folderId?: string
) {
  try {
    console.log(
      `Attempting to delete resource: ${publicId}, type: ${resourceType}`
    );

    // For documents and other files, use 'raw' resource type
    const cloudinaryResourceType =
      resourceType === "raw" ? "raw" : resourceType;

    // Delete the resource from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: cloudinaryResourceType,
    });

    console.log("Delete result:", result);

    if (result.result === "ok") {
      // Revalidate the folder page if folderId is provided
      if (folderId) {
        revalidatePath(`/dashboard/media/${folderId}`);
      }

      // Also revalidate the main media page
      revalidatePath("/dashboard/media");

      return {
        success: true,
        message: "Resource deleted successfully",
        result,
      };
    } else if (result.result === "not found") {
      return {
        success: false,
        message: "Resource not found. It may have already been deleted.",
        result,
      };
    } else {
      return {
        success: false,
        message: `Failed to delete resource: ${result.result}`,
        result,
      };
    }
  } catch (error) {
    console.error("Error deleting Cloudinary resource:", error);
    return {
      success: false,
      message: "Failed to delete resource. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
