import React from 'react';

interface ValidationConfig {
  command?: string;
  expected?: string;
  pattern?: string;
  type?: string;
  element?: string;
}

interface ValidationCheckerProps {
  config: ValidationConfig;
  input: string;
  onValidationComplete: (isValid: boolean) => void;
}

export const ValidationChecker: React.FC<ValidationCheckerProps> = ({
  config,
  input,
  onValidationComplete
}) => {
  React.useEffect(() => {
    const validateInput = async () => {
      try {
        let isValid = false;

        if (config.command && config.expected) {
          // Command output validation
          isValid = input.trim() === config.expected.trim();
        } else if (config.pattern) {
          // Regex pattern validation
          const regex = new RegExp(config.pattern);
          isValid = regex.test(input);
        } else if (config.type === 'ui-check' && config.element) {
          // UI element validation
          // This would typically involve checking if a specific UI element exists/is visible
          isValid = document.querySelector(`[data-testid="${config.element}"]`) !== null;
        }

        onValidationComplete(isValid);
      } catch (error) {
        console.error('Validation error:', error);
        onValidationComplete(false);
      }
    };

    validateInput();
  }, [config, input, onValidationComplete]);

  return null; // This is a non-visual component
};
