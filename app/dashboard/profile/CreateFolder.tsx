import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import createFolderAction from "@/actions/create-folder";
import { SubmitButton } from "@/components/Forms/submit-button";

const CreateFolder = () => {
  return (
    <div className="w-full max-w-lg px-6 py-8 mb-4 rounded-md bg-slate-100">
      <h1 className="text-2xl font-semibold">Create Folder</h1>
      <div className="mt-2">
        <form action={createFolderAction} className="w-full">
          <div className="flex flex-col my-5">
            <label
              htmlFor="folderName"
              className="text-lg font-semibold leading-tight"
            >
              Folder Name
            </label>
            <input
              required
              id="name"
              name="folderName"
              className="w-full h-10 px-2 mt-2 text-gray-600 border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-masifunde dark:focus:border-masifunde dark:border-gray-700"
              type="text"
            />
          </div>

          <SubmitButton>Add new folder</SubmitButton>
        </form>
      </div>
    </div>
  );
};
export default CreateFolder;
