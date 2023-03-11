"use client"

import { useSupabase } from "@/components/Auth/SupabaseProvider";
import { Database } from "@/schema";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

type Props = {
  profile: Database['public']['Tables']['profiles']['Row']
}

const UserDetails = ({profile}:Props) => {

    const { supabase } = useSupabase();

  const [confirm, setConfirm] = useState(false)

    function closeModal() {
      setConfirm(false);
    }

    function openModal() {
      setConfirm(true);
    }


  const router = useRouter()

  const deleteUser = async () => {
    // Delete this user

const { data, error } = await supabase
  .from("profiles")
  .delete()
  .eq("id", profile.id);

  if(error) {
    alert("Could not delete this user")
    closeModal();
  } else if (data){
    closeModal();
    router.push('/dashboard/users')
  } else {
    alert('There was an error, please reach out to the developers')
    closeModal();
       router.push("/dashboard/users");
  }

  }


  return (
    <div className="w-full mt-4">
      <div className="text-lg font-medium mt-3 text-slate-700">
        <h3 className="">First Name: {profile.first_name}</h3>
        <h3 className="">Last Name: {profile.last_name}</h3>
        <div>
          <button
            type="button"
            onClick={openModal}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-3"
          >
            Delete User
          </button>
        </div>
      </div>
      <Transition appear show={confirm} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   Delete this user!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    This operation is not reversable. The user will have to create a new account!
                    </p>
                  </div>

                  <div className="mt-4 flex items-center space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default UserDetails;
