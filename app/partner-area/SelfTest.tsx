"use client"

import MultiStepForm from "@/components/Forms/MultiStepForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelfTest = () => {
  return (
    <div className="w-full">
      <ToastContainer position="top-right" autoClose={3500} />
      <h3 className="text-md md:text-lg lg:text-2xl font-bold">
        Partner Self-Check
      </h3>
      <p className="text-md font-medium">
        This is to check whether your organization qualifies to become a partner
      </p>
      <MultiStepForm />
    </div>
  );
};
export default SelfTest;
