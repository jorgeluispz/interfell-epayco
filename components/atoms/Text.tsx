import { type FC, type ReactNode, createElement } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "body" | "small";
  className?: string;
}

export const Text: FC<TextProps> = ({
  children,
  variant = "body",
  className = "",
}) => {
  const variants = {
    h1: "text-4xl font-bold text-gray-900 dark:text-white",
    h2: "text-3xl font-semibold text-gray-900 dark:text-white",
    h3: "text-2xl font-semibold text-gray-900 dark:text-white",
    body: "text-base text-gray-700 dark:text-gray-300",
    small: "text-sm text-gray-600 dark:text-gray-400",
  };

  const Tag = variant.startsWith("h") ? variant : "p";

  return createElement(
    Tag,
    { className: `${variants[variant]} ${className}` },
    children
  );
};
