export function validateFolderName(name: string): {
  isValid: boolean;
  error?: string;
} {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: "Folder name cannot be empty" };
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return {
      isValid: false,
      error: "Folder name must be at least 2 characters long",
    };
  }

  if (trimmedName.length > 50) {
    return { isValid: false, error: "Folder name cannot exceed 50 characters" };
  }

  // Check for invalid characters (anything that's not alphanumeric, space, dash, or underscore)
  const invalidChars = /[^a-zA-Z0-9\s\-_]/;
  if (invalidChars.test(trimmedName)) {
    return {
      isValid: false,
      error:
        "Folder name can only contain letters, numbers, spaces, hyphens, and underscores",
    };
  }

  // Check if it starts or ends with space
  if (trimmedName.startsWith(" ") || trimmedName.endsWith(" ")) {
    return {
      isValid: false,
      error: "Folder name cannot start or end with spaces",
    };
  }

  return { isValid: true };
}

export function cleanFolderName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\-_]/g, "") // Remove invalid characters
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/_{2,}/g, "_") // Replace multiple underscores with single
    .replace(/^_+|_+$/g, ""); // Remove leading and trailing underscores
}
