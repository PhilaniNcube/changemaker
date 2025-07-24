import Link from "next/link";
import Image from "next/image";
import {
  File,
  Trash2Icon,
  ArrowLeft,
  FolderIcon,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { getFolderByExternalId } from "@/fetchers/folder-details";
import FolderResources from "./FolderResources";

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Fetch folder contents from Cloudinary
  const folderContents = await getFolderByExternalId(id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Button variant="ghost" size="sm" asChild className="pl-0">
        <Link href="/dashboard/media" className="flex items-center space-x-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Media</span>
        </Link>
      </Button>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-2xl font-semibold md:text-3xl">
            {folderContents?.name}
          </h1>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <FolderIcon className="w-6 h-6 text-gray-500" />
          <span className="text-lg font-medium">{folderContents?.name}</span>
        </div>
        {/* Folder Resources */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {folderContents?.resources.map((resource) => {
            // Render images
            if (resource.resource_type === "image") {
              return (
                <div
                  key={resource.public_id}
                  className="relative p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm group hover:shadow-md"
                >
                  <div className="mb-3 overflow-hidden bg-gray-100 rounded-md aspect-square">
                    <Image
                      src={resource.secure_url}
                      alt={resource.original_filename || resource.public_id}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-sm font-medium text-gray-900 truncate"
                      title={resource.original_filename || resource.public_id}
                    >
                      {resource.original_filename || resource.public_id}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {resource.format?.toUpperCase()} •{" "}
                      {formatFileSize(resource.bytes)}
                    </p>
                    {resource.width && resource.height && (
                      <p className="text-xs text-gray-500">
                        {resource.width} × {resource.height}
                      </p>
                    )}
                  </div>
                  {/* Download button for images */}
                  <div className="absolute transition-opacity opacity-0 top-2 right-2 group-hover:opacity-100">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="w-8 h-8 p-0"
                      asChild
                    >
                      <a
                        href={resource.secure_url}
                        download={
                          resource.original_filename || resource.public_id
                        }
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            }

            // Render documents and other file types
            return (
              <div
                key={resource.public_id}
                className="p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <File className="w-10 h-10 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-medium text-gray-900 truncate"
                      title={resource.original_filename || resource.public_id}
                    >
                      {resource.original_filename || resource.public_id}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {resource.format?.toUpperCase()} •{" "}
                      {formatFileSize(resource.bytes)}
                    </p>
                    <p className="text-xs text-gray-500">
                      {resource.resource_type} file
                    </p>
                  </div>
                </div>
                {/* Download button for documents */}
                <div className="mt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={resource.secure_url}
                      download={
                        resource.original_filename || resource.public_id
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download {resource.format?.toUpperCase()}
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default page;
