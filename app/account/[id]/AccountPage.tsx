"use client";

import type { Database } from "@/schema";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { DocumentIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type Props = {
  profile: Database["public"]["Tables"]["profiles"]["Row"];
  organisations: Database["public"]["Tables"]["organisations"]["Row"][];
  documents: Database["public"]["Tables"]["documents"]["Row"][];
};

const profileSchema = z.object({
  id: z.string().uuid(),
  first_name: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Slug must be at least 3 characters long" }),
  email: z.string().email(),
  organisation_id: z.string().uuid(),
});

type Profile = z.infer<typeof profileSchema>;

const AccountPage = ({ profile, organisations, documents }: Props) => {
  const router = useRouter();
  const supabase = createClient();

  const form = useForm<Profile>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      id: profile.id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      organisation_id: profile.organisation_id || "",
    },
  });

  const onSubmit: SubmitHandler<Profile> = async (data) => {
    toast("Please wait...", {
      type: "warning",
    });

    const { data: profileData, error } = await supabase
      .from("profiles")
      .update({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        organisation_id: data.organisation_id,
      })
      .eq("id", profile.id)
      .select("*");

    if (error) {
      alert(error.message);
      return;
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      toast("Profile updated", { type: "info" });
      router.refresh();
    }
  };

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full px-8 mx-auto max-w-7xl">
      <ToastContainer position="top-right" autoClose={2500} />
      <h1 className="text-3xl font-bold text-slate-700">Profile Details</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-xl mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <Input type="hidden" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organisation_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organisation</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your organisation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {organisations.map((organisation) => (
                        <SelectItem
                          key={organisation.id}
                          value={organisation.id}
                        >
                          {organisation.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>{" "}
          <Button className="min-w-[200px] mt-4" type="submit">
            Save
          </Button>
        </form>
      </Form>

      {/* Documents Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-slate-700">
          Available Documents
        </h2>
        {documents.length === 0 ? (
          <p className="text-gray-500">No documents available for download.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col w-full overflow-hidden bg-white border rounded-md shadow border-masifunde"
              >
                <div className="flex flex-col items-center justify-center flex-1 p-4">
                  <DocumentIcon className="w-16 h-16 text-masifunde" />
                  <p className="mt-2 text-sm font-medium text-center capitalize text-slate-700">
                    {doc.title}
                  </p>
                </div>
                <button
                  onClick={() => handleDownload(doc.src!, doc.title!)}
                  className="flex items-center justify-center w-full p-3 text-white transition-colors duration-200 bg-masifunde hover:bg-orange-600"
                  title="Download document"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AccountPage;
