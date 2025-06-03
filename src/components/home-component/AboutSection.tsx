"use client";

import { useTranslations } from "next-intl";
import { Card } from "../ui/card";

export default function AboutSection() {
  const t = useTranslations("about");
  return (
    <Card
      className="flex-col relative p-4"
      role="region"
      aria-label="About Me section"
    >
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <p className="text-justify text-base md:text-lg">{t("description")}</p>
    </Card>
  );
}
