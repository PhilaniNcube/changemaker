import cloudinary from "@/utils/cloudinary";

/**
 * Direct replacement for the current folder fetching approach
 * This is the cleanest alternative that maintains the same behavior
 */
export async function getFolders() {
  try {
    console.log("Fetching root folders...");
    const result = await cloudinary.v2.api.root_folders();
    console.log(
      "Successfully fetched folders:",
      result.total_count || result.folders?.length || 0
    );
    return result;
  } catch (error) {
    console.error("Error fetching folders:", error);
    return { folders: [], total_count: 0 };
  }
}
