"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const SubmitButton = ({className, children}:{children:ReactNode, className:string}) => {

  const { pending } = useFormStatus();

  return <Button type="submit" aria-disabled={pending} disabled={pending} className={cn(className)}>
    {pending ? "Submitting..." : children}
  </Button>;
};
export default SubmitButton;
