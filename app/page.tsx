"use client";

import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";

export default function Home() {
  const router = useRouter();

  return (
    <HomeTemplate
      heroTitle="Prueba Técnica – Front-End"
      heroSubtitle="Este proyecto es desarrollado como parte de una prueba técnica. Utiliza Next.js y Tailwind CSS, consume la API de jsonplaceholder y aplica Atomic Design para la organización de componentes."
      heroCta="Ver Posts"
      onHeroCtaClick={() => router.push(ROUTES.POSTS)}
    />
  );
}
