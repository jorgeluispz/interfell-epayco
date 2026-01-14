"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = "", required, rows = 4, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <textarea
          ref={ref}
          rows={rows}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 dark:text-red-400">
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
