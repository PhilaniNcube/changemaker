import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import { SchoolItem } from "./_components/school-item";
import { addSchool } from "@/actions/school";
import { AddSchoolForm } from "./_components/add-school-form";

const SchoolsPage = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("schools").select("*");

  return (
    <div>
      <h1 className="text-2xl font-bold md:text-3xl text-slate-800">Schools</h1>
      <div className="grid grid-cols-2 gap-4">
        <AddSchoolForm />
        <div>
          <h3 className="text-xl font-bold text-slate-800">List Schools</h3>
          <ScrollArea className="h-[450px]">
            {data?.map((school) => {
              return <SchoolItem key={school.id} school={school} />;
            })}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;
