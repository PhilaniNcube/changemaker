import cloudinary from "@/utils/cloudinary";

/**
 * Alternative 1: Simple async/await approach
 */
export async function fetchFoldersSimple() {
  try {
    const result = await cloudinary.v2.api.root_folders();
    return result;
  } catch (error) {
    console.error("Failed to fetch folders:", error);
    return { folders: [], total_count: 0 };
  }
}

/**
 * Alternative 2: Using sub_folders with empty string (gets root level)
 */
export async function fetchFoldersViaSub() {
  try {
    const result = await cloudinary.v2.api.sub_folders("");
    return result;
  } catch (error) {
    console.error("Failed to fetch folders via sub_folders:", error);
    return { folders: [], total_count: 0 };
  }
}

/**
 * Alternative 3: Extract folders from resource paths
 */
export async function fetchFoldersFromResources() {
  try {
    const resources = await cloudinary.v2.api.resources({
      type: "upload",
      max_results: 100,
    });

    const folderNames = new Set<string>();

    resources.resources?.forEach((resource: any) => {
      if (resource.public_id && resource.public_id.includes("/")) {
        const folderName = resource.public_id.split("/")[0];
        folderNames.add(folderName);
      }
    });

    const folders = Array.from(folderNames).map((name) => ({
      name,
      path: name,
    }));

    return {
      folders,
      total_count: folders.length,
    };
  } catch (error) {
    console.error("Failed to extract folders from resources:", error);
    return { folders: [], total_count: 0 };
  }
}

/**
 * Alternative 4: Promise-based with better error handling
 */
export function fetchFoldersPromise() {
  return new Promise((resolve) => {
    cloudinary.v2.api
      .root_folders()
      .then((result: any) => {
        resolve(result);
      })
      .catch((error: any) => {
        console.error("Cloudinary API error:", error);
        resolve({ folders: [], total_count: 0 });
      });
  });
}
