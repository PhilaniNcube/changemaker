import { FolderResource } from "@/fetchers/folder-details";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2Icon, File, Download } from "lucide-react";
import { deleteAsset } from "@/actions/delete-asset";

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
      <div className="text-center py-12">
        <File className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No resources found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          This folder doesn&apos;t contain any images or files yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resources.map((resource) => (
          <div
            key={resource.public_id}
            className="group relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Resource Preview */}
            <div className="aspect-square mb-3 overflow-hidden rounded-md bg-gray-100">
              {resource.resource_type === "image" ? (
                <Image
                  src={resource.secure_url}
                  alt={resource.original_filename}
                  width={resource.width || 300}
                  height={resource.height || 300}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <File className="h-16 w-16 text-gray-400" />
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

              <div className="text-xs text-gray-500 space-y-1">
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
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
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
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-1">
                <Button
                  size="sm"
                  variant="secondary"
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a
                    href={resource.secure_url}
                    download={resource.original_filename}
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
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
                    className="h-8 w-8 p-0"
                    type="submit"
                    title="Delete"
                  >
                    <Trash2Icon className="h-4 w-4" />
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
