"use client";

import { useMultistepForm } from "@/hooks/useMultistepForm";
import { UserForm } from "./_components/user-form";
import { AccountForm } from "./_components/account-form";
import { AddressForm } from "./_components/address-form";
import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  address: string;
  accountName: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  address: "",
  accountName: "",
};

const ModePage = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { next, back, step, steps, currentStepIndex, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm key="user" {...data} updateFields={updateFields} />,
      <AccountForm key="account" {...data} updateFields={updateFields} />,
      <AddressForm key="address" {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    // Submit data
 
  };
  return (
    <div className="h-full">
      <div className="relative border-2 p-4 rounded-xl">
        <form onSubmit={onSubmit}>
          <div className="absolute top-2 right-2">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="mt-2 flex gap-2 flex-end items-center">
            {!isFirstStep && (
              <button type="submit" onClick={back}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModePage;
