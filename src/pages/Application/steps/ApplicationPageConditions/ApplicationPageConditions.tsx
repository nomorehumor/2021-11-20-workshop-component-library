import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageConditionsProps {
  handleGoToNextStep: (pageData: unknown) => void;
}

export const ApplicationPageConditions = ({
  handleGoToNextStep,
}: ApplicationPageConditionsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      handleGoToNextStep={handleGoToNextStep}
      pageData={{}}
      nextButtonLabel="Submit"
    >
      <div></div>
    </ApplicationPageStep>
  );
};
