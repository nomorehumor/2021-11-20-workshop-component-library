import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageExperiencesProps {
  handleGoToNextStep: (pageData: unknown) => void;
}

export const ApplicationPageExperiences = ({
  handleGoToNextStep,
}: ApplicationPageExperiencesProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      handleGoToNextStep={handleGoToNextStep}
      pageData={{}}
      nextButtonLabel="Next Step"
    >
      <div></div>
    </ApplicationPageStep>
  );
};
