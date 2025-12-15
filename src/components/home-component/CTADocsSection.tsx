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
import { useTranslations } from "next-intl";

export default function CTADocsSection() {
    const t = useTranslations("CTADocsSection");

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
                    <Link href="https://docs.bandev.my.id" target="_blank" rel="noopener noreferrer">
                        {t("button")}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}