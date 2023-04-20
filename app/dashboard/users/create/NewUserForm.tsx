"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Database } from "@/schema";

const newUserSchema = z.object({
  email: z.string().email(),
  first_name: z.string().trim(),
  last_name: z.string().trim(),
  organisation_id: z.string().uuid(),
});

type NewUser = z.infer<typeof newUserSchema>;

type PropTypes = {
  organisations: Database["public"]["Tables"]["organisations"]["Row"][]
}

const NewUserForm = ({organisations}:PropTypes) => {

     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<NewUser>({
       resolver: zodResolver(newUserSchema),
       defaultValues: {
          email: "",
          first_name: "",
          last_name: "",
          organisation_id: "",
       }
     });

     const onSubmit: SubmitHandler<NewUser> = async (data) => {
        const req = await fetch("/api/createUser", {
          method: "POST",
          referrerPolicy: 'origin',
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            organisation_id: data.organisation_id,
          })
        });

        const response = await req.json()
         console.log(response);
              toast(response.message, {
                type: "warning",
              });
     };

  return (
    <div className="w-full">
      <ToastContainer position="top-right" autoClose={3500} />
      <h1 className="text-2xl md:text-3xl font-bold text-slate-700">
        Create a new user
      </h1>
      <form
        className="w-full max-w-4xl rounded-lg mt-6 p-4 shadow-md bg-slate-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-wrap gap-1">
          <label
            htmlFor="email"
            className="block text-md font-medium leading-6 text-gray-700"
          >
            Enter New User&apos;s Email Address
          </label>
          <div className="flex rounded-md">
            <input
              type="email"
              id="email"
              {...register("email")}
              className="block w-full max-w-md flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />{" "}
            {errors.email && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col rounded-md">
            <label
              htmlFor="first_name"
              className="block text-md font-medium leading-6 text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name")}
              className="block w-full max-w-md flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />{" "}
            {errors.first_name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.first_name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col rounded-md">
            <label
              htmlFor="last_name"
              className="block text-md font-medium leading-6 text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              className="block w-full max-w-md flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            />{" "}
            {errors.last_name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.last_name?.message}
              </p>
            )}
          </div>
        </div>
        <fieldset className="mt-6">
          <legend className="contents text-md font-medium leading-6 text-gray-700">
            Select Organisation
          </legend>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {organisations.map((organisation) => (
              <div key={organisation.id} className="flex items-center">
                <input
                  id="organisation_id"
                  {...register("organisation_id")}
                  value={organisation.id}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-accent focus:ring-accent"
                />
                <label
                  htmlFor="organisation_id"
                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                >
                  {organisation.name}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="py-3 text-left mt-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-accent py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewUserForm;
