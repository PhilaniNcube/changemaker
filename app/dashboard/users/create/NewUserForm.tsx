"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const newUserSchema = z.object({
  email: z.string().email()
});

type NewUser = z.infer<typeof newUserSchema>;

const NewUserForm = () => {

     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<NewUser>({
       resolver: zodResolver(newUserSchema),
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
            email: data.email
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
        </div>{" "}
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
