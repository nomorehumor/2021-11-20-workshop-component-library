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

const ApplicationNextStepMap: Record<
  ApplicationStep,
  ApplicationStep | undefined
> = {
  [ApplicationStep.CONTACT_DETAILS]: ApplicationStep.EXPERIENCES,
  [ApplicationStep.EXPERIENCES]: ApplicationStep.CONDITIONS,
  [ApplicationStep.CONDITIONS]: undefined,
};

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
      const nextStep = ApplicationNextStepMap[currentStep];

      setPageData((prevState) => ({ ...prevState, [currentStep]: pageData }));

      if (nextStep) {
        setCurrentStep(nextStep);
      }
    },
    [currentStep]
  );

  return (
    <div className="ApplicationPage">
      {(() => {
        const StepMap: Record<ApplicationStep, ReactNode> = {
          [ApplicationStep.EXPERIENCES]: (
            <ApplicationPageExperiences
              handleGoToNextStep={handleGoToNextStep}
            />
          ),
          [ApplicationStep.CONTACT_DETAILS]: (
            <ApplicationPageContactDetails
              handleGoToNextStep={handleGoToNextStep}
            />
          ),
          [ApplicationStep.CONDITIONS]: (
            <ApplicationPageConditions
              handleGoToNextStep={handleGoToNextStep}
            />
          ),
        };

        return StepMap[currentStep];
      })()}
    </div>
  );
};
