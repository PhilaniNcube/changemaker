# Cloudinary Folder Renaming Feature

This document describes the implementation of the folder renaming functionality for Cloudinary root folders.

## Files Created/Modified

### 1. Server Action: `actions/rename-folder.ts`
- **Purpose**: Handles the server-side logic for renaming Cloudinary folders
- **Key Features**:
  - Validates folder names using utility functions
  - Creates a new folder with the cleaned name
  - Moves all resources from the old folder to the new folder
  - Deletes the old empty folder
  - Revalidates cache for dashboard pages

### 2. Utility Functions: `utils/folder-utils.ts`
- **Purpose**: Provides validation and cleaning functions for folder names
- **Functions**:
  - `validateFolderName(name: string)`: Validates folder name rules
  - `cleanFolderName(name: string)`: Cleans and formats folder names

### 3. UI Component: `app/dashboard/_components/rename-folder.tsx`
- **Purpose**: Provides the user interface for renaming folders
- **Key Features**:
  - Modal dialog with form for entering new folder name
  - Real-time validation with error messages
  - Client-side validation before submission
  - Toast notifications for success/error feedback

### 4. Updated Folder Table: `app/dashboard/_components/folder-table.tsx`
- **Purpose**: Added the rename functionality to the existing folder table
- **Changes**: Added the RenameFolder component to each folder row

## How It Works

### Folder Renaming Process
1. **Validation**: The new folder name is validated both client-side and server-side
2. **Creation**: A new folder is created with the cleaned name
3. **Migration**: All resources are moved from the old folder to the new folder
4. **Cleanup**: The old empty folder is deleted
5. **Cache Refresh**: Dashboard pages are revalidated to show the updated folders

### Validation Rules
- Folder name must be at least 2 characters long
- Maximum 50 characters
- Can only contain letters, numbers, spaces, hyphens, and underscores
- Cannot start or end with spaces
- Cannot be the same as the current folder name

### Name Cleaning Process
- Converts to lowercase
- Replaces spaces with underscores
- Removes invalid characters
- Removes duplicate underscores
- Trims leading/trailing underscores

## Usage

1. Navigate to the dashboard page (`/dashboard`)
2. In the folder table, click the "Rename" button next to any folder
3. Enter a new name in the dialog
4. The form will show validation errors in real-time
5. Click "Rename Folder" to confirm (disabled if validation fails)
6. A toast notification will show success or error status

## Error Handling

- **Client-side**: Real-time validation with visual feedback
- **Server-side**: Comprehensive error handling with descriptive messages
- **Network errors**: Caught and displayed to the user via toast notifications
- **Cloudinary API errors**: Properly handled and logged

## Important Notes

- This implementation moves all assets from the old folder to the new folder
- The process may take time for folders with many assets
- The old folder is completely removed after successful migration
- All folder operations are logged for debugging purposes
- Cache is automatically invalidated to reflect changes immediately

## Technical Considerations

- Uses Cloudinary's Admin API for folder operations
- Implements proper error boundaries and validation
- Follows Next.js 15 server action patterns
- Uses React 19 features for form handling
- Implements proper TypeScript typing throughout
