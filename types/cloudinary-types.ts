export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: string[] | null;
  etag: string;
  created_by: {
    access_key_id: string;
    custom_id: string;
    external_id: string;
  };
  uploaded_by: {
    access_key_id: string;
    custom_id: string;
    external_id: string;
  };
}


export type CloudinarySearchResponse = {
  total_count: number;
  time: number;
  resources: CloudinaryResource[];
  next_cursor: string;
  rate_limit: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}

export type ResourceType = {
  asset_id: string;
  public_id: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  access_mode: string;
  url: string;
  secure_url: string;
}


export type ResourcesType = {
  resources: ResourceType[];
  next_cursor: string;
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}
