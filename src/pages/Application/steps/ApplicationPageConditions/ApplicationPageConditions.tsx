import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageConditionsProps {
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
}

export const ApplicationPageConditions = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}: ApplicationPageConditionsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageTitle="Allgemeine Rahmenbedingungen"
      handleGoToNextStep={handleGoToNextStep}
      handleGoToPreviousStep={handleGoToPreviousStep}
      pageData={{}}
      showPreviousPageButton
      nextButtonLabel="Absenden"
    >
      <div></div>
    </ApplicationPageStep>
  );
};
