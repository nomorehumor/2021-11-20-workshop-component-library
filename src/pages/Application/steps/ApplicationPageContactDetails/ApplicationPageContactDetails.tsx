import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageContactDetailsProps {
  handleGoToNextStep: (pageData: unknown) => void;
}

export const ApplicationPageContactDetails = ({
  handleGoToNextStep,
}: ApplicationPageContactDetailsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageData={{}}
      nextButtonLabel="Next Step"
      handleGoToNextStep={handleGoToNextStep}
    >
      <div></div>
    </ApplicationPageStep>
  );
};
