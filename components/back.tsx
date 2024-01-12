"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Back = () => {
  const router = useRouter()

  return <Button onClick={() => router.back()} type="button">Back</Button>;
};
export default Back;
