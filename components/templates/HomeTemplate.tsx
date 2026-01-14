"use client";

import { type FC } from "react";
import { Container } from "../atoms/Container";
import { HeroSection } from "../molecules/HeroSection";

interface HomeTemplateProps {
  heroTitle: string;
  heroSubtitle: string;
  heroCta?: string;
  onHeroCtaClick?: () => void;
}

export const HomeTemplate: FC<HomeTemplateProps> = ({
  heroTitle,
  heroSubtitle,
  heroCta,
  onHeroCtaClick,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container className="py-20">
        <HeroSection
          title={heroTitle}
          subtitle={heroSubtitle}
          ctaText={heroCta}
          onCtaClick={onHeroCtaClick}
        />
      </Container>
    </div>
  );
};
