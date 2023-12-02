"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { CircleSlashed } from "lucide-react";
import { ReactNode } from "react";

export function SubmitButton({children}:{children:ReactNode}) {

const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="w-full">
      {children}
      {pending && <CircleSlashed size={16} className="animate-spin" />}
    </Button>
  );
}
