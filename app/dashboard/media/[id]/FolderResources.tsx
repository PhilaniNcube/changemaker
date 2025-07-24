import { FolderResource } from "@/fetchers/folder-details";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2Icon, File, Download } from "lucide-react";
import { deleteAsset } from "@/actions/delete-asset";
import FolderUpload from "./FolderUpload";

interface FolderResourcesProps {
  resources: FolderResource[];
  folderName: string;
}

export default function FolderResources({
  resources,
  folderName,
}: FolderResourcesProps) {
  if (resources.length === 0) {
    return (
      <div className="py-12 text-center">
        <File className="w-12 h-12 mx-auto text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No resources found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          This folder doesn&apos;t contain any images or files yet.
        </p>
        <div className="mt-6">
          <FolderUpload folderName={folderName} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative space-y-6">
      {/* Upload Button Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {resources.length} {resources.length === 1 ? "file" : "files"} in this
          folder
        </p>
        <FolderUpload folderName={folderName} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resources.map((resource) => (
          <div
            key={resource.public_id}
            className="relative p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm group hover:shadow-md"
          >
            {/* Resource Preview */}
            <div className="mb-3 overflow-hidden bg-gray-100 rounded-md aspect-square">
              {resource.resource_type === "image" ? (
                <Image
                  src={resource.secure_url}
                  alt={resource.original_filename}
                  width={resource.width || 300}
                  height={resource.height || 300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <File className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Resource Info */}
            <div className="space-y-2">
              <h3
                className="text-sm font-medium text-gray-900 truncate"
                title={resource.original_filename}
              >
                {resource.original_filename}
              </h3>

              <div className="space-y-1 text-xs text-gray-500">
                <p>Format: {resource.format?.toUpperCase()}</p>
                <p>Size: {formatFileSize(resource.bytes)}</p>
                {resource.width && resource.height && (
                  <p>
                    Dimensions: {resource.width} × {resource.height}
                  </p>
                )}
                <p>Created: {formatDate(resource.created_at)}</p>
              </div>

              {/* Tags */}
              {resource.tags && resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute transition-opacity opacity-0 top-2 right-2 group-hover:opacity-100">
              <div className="flex space-x-1">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-8 h-8 p-0"
                  asChild
                >
                  <a
                    href={resource.secure_url}
                    download={resource.original_filename}
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </Button>

                <form action={deleteAsset}>
                  <input
                    type="hidden"
                    name="publicId"
                    value={resource.public_id}
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    className="w-8 h-8 p-0"
                    type="submit"
                    title="Delete"
                  >
                    <Trash2Icon className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
