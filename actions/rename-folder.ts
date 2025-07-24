"use server";

import cloudinary from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";
import { validateFolderName, cleanFolderName } from "@/utils/folder-utils";

async function renameFolderAction(formData: FormData) {
  const currentFolderName = formData.get("currentFolderName") as string;
  const newFolderName = formData.get("newFolderName") as string;

  if (!currentFolderName || !newFolderName) {
    throw new Error("Both current and new folder names are required");
  }

  // Validate the new folder name
  const validation = validateFolderName(newFolderName);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  // Clean the new folder name
  const newFolderNameClean = cleanFolderName(newFolderName);

  if (!newFolderNameClean) {
    throw new Error("New folder name is invalid after cleaning");
  }

  // Check if the new name is the same as the current name
  if (currentFolderName.toLowerCase() === newFolderNameClean) {
    throw new Error("New folder name must be different from the current name");
  }

  try {
    // Create the new folder first
    await cloudinary.v2.api.create_folder(newFolderNameClean);

    // Get all resources in the current folder
    const resources = await cloudinary.v2.api.resources({
      type: "upload",
      prefix: currentFolderName + "/",
      max_results: 500,
    });

    // Move all resources to the new folder
    if (resources.resources && resources.resources.length > 0) {
      const movePromises = resources.resources.map(async (resource: any) => {
        const oldPublicId = resource.public_id;
        const fileName = oldPublicId.split("/").pop();
        const newPublicId = `${newFolderNameClean}/${fileName}`;

        return cloudinary.v2.uploader.rename(oldPublicId, newPublicId);
      });

      await Promise.all(movePromises);
    }

    // Delete the old empty folder
    await cloudinary.v2.api.delete_folder(currentFolderName);

    console.log("Folder renamed successfully");

    // Revalidate the dashboard page to show updated folder list
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/media");

    return { success: true, message: "Folder renamed successfully" };
  } catch (error) {
    console.error("Error renaming folder:", error);
    throw new Error(
      `Failed to rename folder: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

export default renameFolderAction;
