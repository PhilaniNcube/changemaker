"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Step from "./Step";
import { toast } from "react-toastify";

const MultiStepForm = () => {

  const router = useRouter()

  let [step, setStep] = useState(1);

  const [formState, setFormState] = useState({
    high_school_work:'',
    gender_based_violence_work:'',
    child_protection_protocols:'',
    audited_financial_statements:'',
    registered:'',
    organisation_name:'',
    tax_clearance:'',
    annual_report:'',
    website:'',
    active_social_media:'',
  });



  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     const {
       high_school_work,
       gender_based_violence_work,
       child_protection_protocols,
       audited_financial_statements,
       registered,
       organisation_name,
       tax_clearance,
       annual_report,
       website,
       active_social_media,
     } = formState


   const answerArr = Object.values(formState)

   const answerSet = new Set(answerArr)

   let count = 0;


   for (let i = 0; i < answerArr.length; i++) {
     if (answerArr[i] === "yes") {
       count++;
     }
   }

   console.log({count});

   if(count < 7) {
    toast.error(
      "Your organisation needs to be able to answer yes to at least 8 out of 10 questions"
    );
   } else {
    toast.success("Thankyou for answering the questions.")
    router.push('/apply')
   }


console.log({
  high_school_work,
  gender_based_violence_work,
  child_protection_protocols,
  audited_financial_statements,
  registered,
  organisation_name,
  tax_clearance,
  annual_report,
  website,
  active_social_media,
});




  }

  return (
    <div className="flex  items-center py-2">
      <div className="w-full border border-slate-200 max-w-md rounded-2xl bg-slate-100 shadow-2xl">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
          <Step step={5} currentStep={step} />
        </div>
        <div className="px-8 pb-6">
          <div>
            <div className="mt-2">
              <form onSubmit={handleSubmit} className="w-full">
                {step === 1 && (
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="high_school_work"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organisation have existing links and relations
                        to local high schools?
                      </label>
                      <select
                        id="high_school_work"
                        name="high_school_work"
                        value={formState.high_school_work}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            high_school_work: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-full mt-4">
                      <label
                        htmlFor="gender_based_violence_work"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organisation work on (or can imagine to work
                        on) the topics school safety and prevention of GBV?
                      </label>
                      <select
                        id="gender_based_violence_work"
                        name="gender_based_violence_work"
                        value={formState.gender_based_violence_work}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            gender_based_violence_work: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        {" "}
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="child_protection_protocols"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization adhere to Child Protection
                        Protocols?
                      </label>
                      <select
                        id="child_protection_protocols"
                        name="child_protection_protocols"
                        value={formState.child_protection_protocols}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            child_protection_protocols: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-ful mt-4">
                      <label
                        htmlFor="audited_financial_statements"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organisation have (audited) financial
                        statements?
                      </label>
                      <select
                        id="audited_financial_statements"
                        name="audited_financial_statements"
                        value={formState.audited_financial_statements}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            audited_financial_statements: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="registered"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Is your organization registered?
                      </label>
                      <select
                        id="registered"
                        name="registered"
                        value={formState.registered}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            registered: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-ful mt-4">
                      <label
                        htmlFor="organisation_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        What is the name of your organisation?
                      </label>
                      <input
                        id="organisation_name"
                        name="organisation_name"
                        value={formState.organisation_name}
                        required
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            organisation_name: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      />


                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="tax_clearance"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization have a valid tax clearance
                        certificate?
                      </label>
                      <select
                        id="tax_clearance"
                        name="tax_clearance"
                        value={formState.tax_clearance}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            tax_clearance: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-ful mt-4">
                      <label
                        htmlFor="annual_report"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization have an annual report?
                      </label>
                      <select
                        id="annual_report"
                        name="annual_report"
                        value={formState.annual_report}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            annual_report: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}
                {step === 5 && (
                  <div>
                    <div className="w-full">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization have an active website?
                      </label>
                      <select
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            website: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div className="w-ful mt-4">
                      <label
                        htmlFor="active_social_media"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization have active social media pages?
                      </label>
                      <select
                        id="active_social_media"
                        name="active_social_media"
                        value={formState.active_social_media}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            active_social_media: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-accent focus:outline-none focus:ring-accent sm:text-sm"
                      >
                        <option value="">Select Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <button
                    type="submit"
                    className="w-36 mx-auto my-auto rounded-full px-4 font-medium py-1.5 text-white text-center bg-accent hover:bg-accent/70 cursor-pointer"
                  >
                    Save
                  </button>
                )}
              </form>
            </div>
            <div className="mt-10 flex justify-between">
              <button
                onClick={() => setStep(step < 2 ? step : step - 1)}
                className="rounded px-2 py-1 text-slate-800 bg-slate-300 hover:text-slate-700 cursor-pointer"
              >
                Back
              </button>
              <button
                className={`${
                  step > 5 ? "pointer-events-none opacity-50" : ""
                } rounded-full px-4 font-medium py-1.5 text-white text-center bg-accent hover:bg-accent/70 cursor-pointer`}
                onClick={() => setStep(step > 5 ? step : step + 1)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MultiStepForm;
