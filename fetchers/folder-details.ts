import {
  CloudinarySearchResponse,
  CloudinaryResource,
} from "@/types/cloudinary-types";
import {
  CloudinarySearchApiResource,
  CloudinaryAdminApiResource,
  CloudinaryFolder,
  CloudinaryRootFoldersResponse,
  CloudinaryResourcesByFolderResponse,
} from "@/types/cloudinary-api-types";
import cloudinary from "@/utils/cloudinary";

export interface FolderResource {
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width?: number;
  height?: number;
  url: string;
  secure_url: string;
  folder: string;
  filename: string;
  original_filename: string;
  tags: string[];
}

export interface FolderDetails {
  name: string;
  path: string;
  external_id?: string;
}

export interface FolderContents {
  folder: FolderDetails;
  resources: FolderResource[];
  total_count: number;
  next_cursor?: string;
}

export interface FolderWithResources {
  name: string;
  path: string;
  external_id?: string;
  resources: CloudinarySearchApiResource[]; // Resources from search API
}

/**
 * Fetch folder details and all resources within a specific folder
 * @param folderId - The folder path/ID from Cloudinary
 * @param maxResults - Maximum number of resources to fetch (default: 100)
 * @returns Promise containing folder details and resources
 */
export async function getFolderContents(
  folderId: string,
  maxResults: number = 100
): Promise<FolderContents> {
  try {
    console.log(`Fetching contents for folder: ${folderId}`);

    // Fetch folder details
    let folderDetails: FolderDetails;
    try {
      const folderInfo = await cloudinary.v2.api.root_folders();
      const folder = folderInfo.folders?.find(
        (f: any) => f.name === folderId || f.path === folderId
      );

      if (folder) {
        folderDetails = {
          name: folder.name,
          path: folder.path || folder.name,
          external_id: folder.external_id,
        };
      } else {
        // If folder not found in root, assume it exists and create basic info
        folderDetails = {
          name: folderId,
          path: folderId,
        };
      }
    } catch (error) {
      console.warn("Could not fetch folder details, using basic info:", error);
      folderDetails = {
        name: folderId,
        path: folderId,
      };
    }

    // Fetch resources within the folder
    const searchResult = await cloudinary.v2.search
      .expression(`folder:${folderId}`)
      .max_results(maxResults)
      .with_field("tags")
      .with_field("context")
      .sort_by("created_at", "desc")
      .execute();

    const resources: FolderResource[] =
      searchResult.resources?.map((resource: any) => ({
        public_id: resource.public_id,
        format: resource.format,
        version: resource.version,
        resource_type: resource.resource_type,
        type: resource.type,
        created_at: resource.created_at,
        bytes: resource.bytes,
        width: resource.width,
        height: resource.height,
        url: resource.url,
        secure_url: resource.secure_url,
        folder: resource.folder || folderId,
        filename:
          resource.filename ||
          resource.public_id.split("/").pop() ||
          resource.public_id,
        original_filename:
          resource.original_filename || resource.filename || resource.public_id,
        tags: resource.tags || [],
      })) || [];

    console.log(
      `Successfully fetched ${resources.length} resources from folder ${folderId}`
    );

    return {
      folder: folderDetails,
      resources,
      total_count: searchResult.total_count || resources.length,
      next_cursor: searchResult.next_cursor,
    };
  } catch (error) {
    console.error(`Error fetching folder contents for ${folderId}:`, error);

    // Return minimal data on error
    return {
      folder: {
        name: folderId,
        path: folderId,
      },
      resources: [],
      total_count: 0,
    };
  }
}

/**
 * Fetch additional resources if there are more than the initial fetch
 * @param folderId - The folder path/ID from Cloudinary
 * @param nextCursor - The cursor for pagination
 * @param maxResults - Maximum number of additional resources to fetch
 * @returns Promise containing additional resources
 */
export async function getMoreFolderResources(
  folderId: string,
  nextCursor: string,
  maxResults: number = 100
): Promise<{
  resources: FolderResource[];
  next_cursor?: string;
  total_count: number;
}> {
  try {
    const searchResult = await cloudinary.v2.search
      .expression(`folder:${folderId}`)
      .max_results(maxResults)
      .next_cursor(nextCursor)
      .with_field("tags")
      .with_field("context")
      .sort_by("created_at", "desc")
      .execute();

    const resources: FolderResource[] =
      searchResult.resources?.map((resource: any) => ({
        public_id: resource.public_id,
        format: resource.format,
        version: resource.version,
        resource_type: resource.resource_type,
        type: resource.type,
        created_at: resource.created_at,
        bytes: resource.bytes,
        width: resource.width,
        height: resource.height,
        url: resource.url,
        secure_url: resource.secure_url,
        folder: resource.folder || folderId,
        filename:
          resource.filename ||
          resource.public_id.split("/").pop() ||
          resource.public_id,
        original_filename:
          resource.original_filename || resource.filename || resource.public_id,
        tags: resource.tags || [],
      })) || [];

    return {
      resources,
      total_count: searchResult.total_count || resources.length,
      next_cursor: searchResult.next_cursor,
    };
  } catch (error) {
    console.error(`Error fetching more resources for ${folderId}:`, error);
    return {
      resources: [],
      total_count: 0,
    };
  }
}

/**
 * Fetch folder details by external_id
 * @param externalId - The external_id of the folder
 * @returns Promise containing folder details with resources or null if not found
 */
export async function getFolderByExternalId(
  externalId: string
): Promise<FolderWithResources | null> {
  try {
    console.log(`Fetching folder by external_id: ${externalId}`);

    // Fetch all root folders and find the one with matching external_id
    const folderInfo = await cloudinary.v2.api.root_folders();

    const folder = folderInfo.folders?.find(
      (f: any) => f.external_id === externalId
    );

    if (folder) {
      const folderDetails: FolderDetails = {
        name: folder.name,
        path: folder.path || folder.name,
        external_id: folder.external_id,
      };

      console.log(`Found folder by external_id ${externalId}:`, folderDetails);

      // Fetch resources within this folder
      const files = await cloudinary.v2.search
        .expression(`folder:${folderDetails.path}`)
        .execute();
      console.log(`Fetched resources for folder ${folderDetails.path}:`, files);

      return {
        ...folderDetails,
        resources: files.resources || [],
      };
    }

    console.log(`No folder found with external_id: ${externalId}`);
    return null;
  } catch (error) {
    console.error(`Error fetching folder by external_id ${externalId}:`, error);
    return null;
  }
}

/**
 * Fetch folder contents by external_id
 * @param externalId - The external_id of the folder
 * @param maxResults - Maximum number of resources to fetch (default: 100)
 * @returns Promise containing Cloudinary resources response
 */
export async function getFolderContentsByExternalId(
  externalId: string,
  maxResults: number = 100
): Promise<{
  resources: CloudinaryAdminApiResource[];
  next_cursor?: string;
  total_count: number;
}> {
  try {
    // Fetch resources within the folder using the folder external_id
    const result = await cloudinary.v2.api.resources_by_asset_folder(
      externalId,
      {
        max_results: maxResults,
      }
    );

    console.log(
      `Fetched ${
        result.resources?.length || 0
      } resources for folder ${externalId}`
    );

    return {
      resources: result.resources || [],
      next_cursor: result.next_cursor,
      total_count: result.resources?.length || 0,
    };
  } catch (error) {
    console.error(
      `Error fetching folder contents by external_id ${externalId}:`,
      error
    );
    return {
      resources: [],
      total_count: 0,
    };
  }
}
