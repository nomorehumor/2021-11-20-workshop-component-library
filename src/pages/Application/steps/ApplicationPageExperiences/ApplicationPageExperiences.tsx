import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageExperiencesProps {
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
}

export const ApplicationPageExperiences = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}: ApplicationPageExperiencesProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageTitle="Erfahrungen"
      handleGoToNextStep={handleGoToNextStep}
      pageData={{}}
      nextButtonLabel="Weiter"
      showPreviousPageButton
      handleGoToPreviousStep={handleGoToPreviousStep}
    >
      <div></div>
    </ApplicationPageStep>
  );
};
