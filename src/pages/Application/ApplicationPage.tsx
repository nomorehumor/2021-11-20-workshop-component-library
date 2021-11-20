import "./ApplicationPage.css";

import React, { ReactNode, useCallback, useState } from "react";
import { ApplicationPageExperiences } from "./steps/ApplicationPageExperiences/ApplicationPageExperiences";
import { ApplicationPageContactDetails } from "./steps/ApplicationPageContactDetails/ApplicationPageContactDetails";
import { ApplicationPageConditions } from "./steps/ApplicationPageConditions/ApplicationPageConditions";

export enum ApplicationStep {
  CONDITIONS = "conditions",
  CONTACT_DETAILS = "contactDetails",
  EXPERIENCES = "experiences",
}

const ApplicationStepOrder: ApplicationStep[] = [
  ApplicationStep.CONTACT_DETAILS,
  ApplicationStep.EXPERIENCES,
  ApplicationStep.CONDITIONS,
];

export const ApplicationPage = () => {
  const [currentStep, setCurrentStep] = useState<ApplicationStep>(
    ApplicationStep.CONTACT_DETAILS
  );
  const [pageData, setPageData] = useState<Record<ApplicationStep, unknown>>({
    [ApplicationStep.CONDITIONS]: undefined,
    [ApplicationStep.CONTACT_DETAILS]: undefined,
    [ApplicationStep.EXPERIENCES]: undefined,
  });

  const handleGoToNextStep = useCallback(
    (pageData: unknown) => {
      const nextStepIndex =
        ApplicationStepOrder.findIndex((value) => value === currentStep) + 1;

      setPageData((prevState) => ({ ...prevState, [currentStep]: pageData }));

      if (nextStepIndex < ApplicationStepOrder.length) {
        setCurrentStep(ApplicationStepOrder[nextStepIndex]);
      }
    },
    [currentStep]
  );

  const handleGoToPreviousStep = useCallback(() => {
    const previousStepIndex =
      ApplicationStepOrder.findIndex((value) => value === currentStep) - 1;

    if (previousStepIndex >= 0) {
      setCurrentStep(ApplicationStepOrder[previousStepIndex]);
    }
  }, [currentStep]);

  return (
    <div className="ApplicationPage">
      {(() => {
        const StepMap: Record<ApplicationStep, ReactNode> = {
          [ApplicationStep.EXPERIENCES]: (
            <ApplicationPageExperiences
              handleGoToNextStep={handleGoToNextStep}
              handleGoToPreviousStep={handleGoToPreviousStep}
            />
          ),
          [ApplicationStep.CONTACT_DETAILS]: (
            <ApplicationPageContactDetails
              handleGoToNextStep={handleGoToNextStep}
              handleGoToPreviousStep={handleGoToPreviousStep}
            />
          ),
          [ApplicationStep.CONDITIONS]: (
            <ApplicationPageConditions
              handleGoToNextStep={handleGoToNextStep}
              handleGoToPreviousStep={handleGoToPreviousStep}
            />
          ),
        };

        return StepMap[currentStep];
      })()}
    </div>
  );
};
