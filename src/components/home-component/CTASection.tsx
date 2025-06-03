"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useLocale, useTranslations } from "next-intl";

export default function CTASection() {
  const locale = useLocale();
  const t = useTranslations("CTASection");

  return (
    <Card role="region" aria-label="Call to Action section">
      <CardHeader>
        <CardTitle className="font-sans text-3xl font-bold">
          {t("title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-lg text-justify">{t("description")}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-2xl text-popover" size={"lg"} asChild>
          <Link href={`${locale}/projects`} prefetch>
            {t("button")}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
