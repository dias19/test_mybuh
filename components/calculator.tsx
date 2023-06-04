"use client";
import { CalculationSchema, DEFAULT_VALUE } from "@/constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Details from "./details/details";
import Results from "./results";

export default function Calculator() {
  const methods = useForm<Data>({
    resolver: yupResolver(CalculationSchema),
    defaultValues: DEFAULT_VALUE,
  });

  const [socialStatuses, setSocialStatuses] = useState<SocialStatuses[]>([]);

  const [showResults, setShowResults] = useState(false);

  console.log(socialStatuses);
  return (
    <FormProvider {...methods}>
      <Details
        setShowResults={setShowResults}
        socialStatuses={socialStatuses}
        setSocialStatuses={setSocialStatuses}
      />
      <Results showResults={showResults} socialStatuses={socialStatuses}/>
    </FormProvider>
  );
}
