'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { forwardRef } from 'react';

interface AccessibleButtonProps extends ButtonProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  loading?: boolean;
  loadingText?: string;
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ children, loading, loadingText, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        aria-label={loading ? loadingText : ariaLabel}
        aria-disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <span className="sr-only">
            {loadingText || 'Loading...'}
          </span>
        )}
        {children}
      </Button>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';