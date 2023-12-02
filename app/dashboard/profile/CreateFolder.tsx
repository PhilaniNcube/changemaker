

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import createFolderAction from "@/actions/create-folder";
import { SubmitButton } from "@/components/Forms/submit-button";

const CreateFolder = () => {

// const router = useRouter()

// const createFolder = async (e:FormEvent<HTMLFormElement>) => {
// e.preventDefault();

// const {name} = Object.fromEntries(new FormData(e.currentTarget))

// const response = await fetch('/api/folders', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({name})
// }).then(res => res.json()).catch(err => console.log(err))

// const data = await response
// console.log(data)

// router.push(`/dashboard/`)

// }

  return (
    <div className="w-full py-8 px-6 bg-slate-100 rounded-md">
      <h1 className="font-semibold text-2xl">Create Folder</h1>
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
              className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-masifunde dark:focus:border-masifunde dark:border-gray-700 border-gray-300 border shadow"
              type="text"
            />
          </div>

          <SubmitButton>
            Add new folder
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};
export default CreateFolder;
