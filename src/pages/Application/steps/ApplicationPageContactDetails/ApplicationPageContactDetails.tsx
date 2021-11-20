import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageContactDetailsProps {
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
}

export const ApplicationPageContactDetails = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}: ApplicationPageContactDetailsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageTitle="Deine Kontaktdaten"
      pageData={{}}
      nextButtonLabel="Weiter"
      handleGoToNextStep={handleGoToNextStep}
      showPreviousPageButton={false}
      handleGoToPreviousStep={handleGoToPreviousStep}
    >
      <div></div>
    </ApplicationPageStep>
  );
};
