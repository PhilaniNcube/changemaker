/**
 * This file documents the actual Cloudinary API response structures
 * based on testing and documentation
 */

// Cloudinary Search API response (from cloudinary.v2.search.execute())
export interface CloudinarySearchApiResource {
  public_id: string;
  format: string;
  version: number;
  resource_type: string; // 'image', 'video', 'raw'
  type: string; // 'upload', 'private', etc.
  created_at: string; // ISO date string
  bytes: number;
  width?: number; // Only for images/videos
  height?: number; // Only for images/videos
  url: string;
  secure_url: string;
  folder?: string;
  filename?: string;
  original_filename?: string;
  tags?: string[];
  context?: Record<string, any>;
  metadata?: Record<string, any>;
}

// Cloudinary Admin API response (from cloudinary.v2.api.resources_by_asset_folder())
export interface CloudinaryAdminApiResource {
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
  // Admin API has different structure, may have additional fields
  [key: string]: any; // Allow for additional properties
}

// Root folders API response (from cloudinary.v2.api.root_folders())
export interface CloudinaryFolder {
  name: string;
  path: string;
  external_id?: string;
}

export interface CloudinaryRootFoldersResponse {
  folders: CloudinaryFolder[];
  total_count: number;
}

// Resources by asset folder response
export interface CloudinaryResourcesByFolderResponse {
  resources: CloudinaryAdminApiResource[];
  next_cursor?: string;
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}

// Search API response
export interface CloudinarySearchResponse {
  resources: CloudinarySearchApiResource[];
  total_count: number;
  next_cursor?: string;
  time: number;
}
