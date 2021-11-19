import "./ApplciationPageStep.css";

import React, { ReactNode } from "react";

import { Button } from "../../../components/Button/Button";

interface ApplicationPageStepProps {
  handleGoToNextStep: (pageData: unknown) => void;
  pageData: unknown;
  children: ReactNode;
  nextButtonLabel: string;
}

export const ApplicationPageStep = ({
  children,
  handleGoToNextStep,
  nextButtonLabel,
  pageData,
}: ApplicationPageStepProps) => (
  <div className="ApplicationPageStep">
    <div className="ApplicationPageChildrenContainer">{children}</div>

    <div className="ApplicationPageButtonContainer">
      <Button
        primary
        label={nextButtonLabel}
        onClick={() => handleGoToNextStep(pageData)}
      />
    </div>
  </div>
);
