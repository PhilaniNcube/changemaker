import cloudinary from "@/utils/cloudinary";

export type CloudinaryFolder = {
  name: string;
  path: string;
  external_id?: string;
};

export type FoldersResponse = {
  folders: CloudinaryFolder[];
  total_count: number;
  next_cursor?: string;
};

/**
 * Method 1: Using root_folders API (current approach, but cleaner)
 */
export async function getRootFolders(): Promise<FoldersResponse> {
  try {
    const result = await cloudinary.v2.api.root_folders();

    return {
      folders: result.folders || [],
      total_count: result.total_count || 0,
      next_cursor: result.next_cursor,
    };
  } catch (error) {
    console.error("Error fetching root folders:", error);
    throw new Error("Failed to fetch root folders");
  }
}

/**
 * Method 2: Using resources API to get folders from asset paths
 */
export async function getRootFoldersViaResources(): Promise<FoldersResponse> {
  try {
    // Get resources and extract unique root folder names from their paths
    const result = await cloudinary.v2.api.resources({
      type: "upload",
      max_results: 500,
    });

    const folderSet = new Set<string>();

    result.resources?.forEach((resource: any) => {
      if (resource.public_id && resource.public_id.includes("/")) {
        // Extract root folder from public_id path
        const pathParts = resource.public_id.split("/");
        if (pathParts.length > 1 && pathParts[0]) {
          folderSet.add(pathParts[0]);
        }
      }
    });

    const folders = Array.from(folderSet).map((name) => ({
      name,
      path: name,
    }));

    return {
      folders,
      total_count: folders.length,
    };
  } catch (error) {
    console.error("Error fetching folders via resources:", error);
    throw new Error("Failed to fetch folders via resources");
  }
}

/**
 * Method 5: Using sub_folders API to get root level folders
 */
export async function getRootFoldersExplicit(): Promise<FoldersResponse> {
  try {
    // Get root level folders by using empty string as parent
    const result = await cloudinary.v2.api.sub_folders("");

    return {
      folders: result.folders || [],
      total_count: result.total_count || 0,
      next_cursor: result.next_cursor,
    };
  } catch (error) {
    console.error("Error fetching explicit folders:", error);
    throw new Error("Failed to fetch explicit folders");
  }
}
