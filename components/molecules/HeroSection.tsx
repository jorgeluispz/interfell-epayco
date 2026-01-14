"use client";

import { type FC } from "react";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="text-center space-y-6">
      <Text variant="h1" className="max-w-3xl mx-auto">
        {title}
      </Text>
      <Text variant="body" className="max-w-2xl mx-auto text-lg">
        {subtitle}
      </Text>
      {ctaText && (
        <div className="pt-4">
          <Button onClick={onCtaClick} variant="primary">
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  );
};
