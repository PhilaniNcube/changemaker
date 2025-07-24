"use server";

import { revalidatePath } from "next/cache";

export async function revalidateFolderPage(folderId: string) {
  try {
    // Revalidate the specific folder page
    revalidatePath(`/dashboard/media/${folderId}`);

    // Also revalidate the main media page in case it shows folder contents
    revalidatePath("/dashboard/media");

    return { success: true };
  } catch (error) {
    console.error("Error revalidating folder page:", error);
    return { success: false, error: "Failed to refresh data" };
  }
}
