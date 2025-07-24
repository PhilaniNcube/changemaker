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
 * Method 1: Using root_folders API (recommended)
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
 * Method 2: Using sub_folders API with empty parent (alternative approach)
 */
export async function getRootFoldersViaSub(): Promise<FoldersResponse> {
  try {
    const result = await cloudinary.v2.api.sub_folders("");

    return {
      folders: result.folders || [],
      total_count: result.total_count || 0,
      next_cursor: result.next_cursor,
    };
  } catch (error) {
    console.error("Error fetching folders via sub_folders:", error);
    throw new Error("Failed to fetch folders via sub_folders");
  }
}

/**
 * Method 3: Using resources API to infer folders from asset paths
 */
export async function getRootFoldersFromAssets(): Promise<FoldersResponse> {
  try {
    const result = await cloudinary.v2.api.resources({
      type: "upload",
      max_results: 500,
    });

    const folderSet = new Set<string>();

    result.resources?.forEach((resource: any) => {
      if (resource.public_id && resource.public_id.includes("/")) {
        const rootFolder = resource.public_id.split("/")[0];
        if (rootFolder && rootFolder.trim()) {
          folderSet.add(rootFolder);
        }
      }
    });

    const folders = Array.from(folderSet)
      .sort()
      .map((name) => ({
        name,
        path: name,
      }));

    return {
      folders,
      total_count: folders.length,
    };
  } catch (error) {
    console.error("Error inferring folders from assets:", error);
    throw new Error("Failed to infer folders from assets");
  }
}

/**
 * Method 4: Robust method with fallback strategies
 */
export async function getRootFoldersRobust(): Promise<FoldersResponse> {
  const methods = [
    { name: "root_folders", fn: getRootFolders },
    { name: "sub_folders", fn: getRootFoldersViaSub },
    { name: "from_assets", fn: getRootFoldersFromAssets },
  ];

  for (const method of methods) {
    try {
      console.log(`Trying ${method.name} method...`);
      const result = await method.fn();
      console.log(
        `Success with ${method.name} method:`,
        result.total_count,
        "folders found"
      );
      return result;
    } catch (error) {
      console.warn(`${method.name} method failed:`, error);
      // Continue to next method
    }
  }

  // If all methods fail, return empty result
  console.error("All folder fetching methods failed");
  return {
    folders: [],
    total_count: 0,
  };
}

/**
 * Method 5: Simple direct API call (most basic approach)
 */
export async function getRootFoldersSimple(): Promise<CloudinaryFolder[]> {
  try {
    const result = await cloudinary.v2.api.root_folders();
    return result.folders || [];
  } catch (error) {
    console.error("Error fetching folders:", error);
    return [];
  }
}
