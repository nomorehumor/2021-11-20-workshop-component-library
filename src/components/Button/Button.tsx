import React from "react";
import "./Button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  const mode = primary ? "Button--primary" : "Button--secondary";

  return (
    <button type="button" className={["Button", mode].join(" ")} {...props}>
      {label}
    </button>
  );
};
