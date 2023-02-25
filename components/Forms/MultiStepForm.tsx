"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Step from "./Step";

const MultiStepForm = () => {

  const router = useRouter()

  let [step, setStep] = useState(1);

  const [formState, setFormState] = useState({
    high_school_work:'',
    gender_based_violence_work:'',
    child_protection_protocols:'',
    audited_financial_statements:'',
    registered:'',
    bank_account:'',
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
       bank_account,
       tax_clearance,
       annual_report,
       website,
       active_social_media,
     } = formState


console.log({
  high_school_work,
  gender_based_violence_work,
  child_protection_protocols,
  audited_financial_statements,
  registered,
  bank_account,
  tax_clearance,
  annual_report,
  website,
  active_social_media,
});


if(high_school_work !== 'yes' || gender_based_violence_work !== 'yes' || child_protection_protocols !== 'yes' || audited_financial_statements !== 'yes' || registered !== 'yes' || bank_account !== 'yes' || tax_clearance !== 'yes' || active_social_media !== 'yes') {
  alert('You currently do not meet the requirements to be part of the Changemaker Network. Your organisation needs to be able to answer yes to all the questions')
} else {
  router.push('/')
}

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
                        Does your organization work within high-schools?
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
                        Does your organization work on topics aligned to
                        Gender-Based-Violence?
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
                        Does your organization have audited financial
                        statements? If not, does your organization have
                        something equivalent to audited financial statements?
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
                        htmlFor="bank_account"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Does your organization have a bank account in the
                        organizations name?
                      </label>
                      <select
                        id="bank_account"
                        name="bank_account"
                        value={formState.bank_account}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            bank_account: e.target.value,
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
