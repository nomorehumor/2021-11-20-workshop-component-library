import "./ApplciationPageStep.css";

import React, { ReactNode } from "react";

import { Button } from "../../../components/Button/Button";

interface ApplicationPageStepProps {
  pageTitle: string;
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
  pageData: unknown;
  children: ReactNode;
  nextButtonLabel: string;
  showPreviousPageButton: boolean;
}

export const ApplicationPageStep = ({
  children,
  pageTitle,
  handleGoToNextStep,
  handleGoToPreviousStep,
  nextButtonLabel,
  showPreviousPageButton,
  pageData,
}: ApplicationPageStepProps) => (
  <div className="ApplicationPageStep">
    <h2 className="ApplicationPageStepHeading">{pageTitle}</h2>

    <div className="ApplicationPageChildrenContainer">{children}</div>

    <div
      className={[
        "ApplicationPageButtonContainer",
        !showPreviousPageButton &&
          "ApplicationPageButtonContainer--SingleButton",
      ].join(" ")}
    >
      {showPreviousPageButton && (
        <Button label="Zurück" onClick={handleGoToPreviousStep} />
      )}

      <Button
        primary
        label={nextButtonLabel}
        onClick={() => handleGoToNextStep(pageData)}
      />
    </div>
  </div>
);
