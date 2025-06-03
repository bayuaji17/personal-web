"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { useLocale, useTranslations } from "next-intl";

export default function RecentProject() {
  const locale = useLocale();
  const t = useTranslations("recentProject");
  const project = [
    {
      id: 1,
      titleKey: "project1.title",
      descriptionKey: "project1.description",
      url: "https://github.com/bayuaji17/perfume-apps",
      tag: ["Next Js", "PostgreSQL", "Prisma", "Tailwind CSS", "Shadcn/UI"],
    },
    {
      id: 2,
      titleKey: "project2.title",
      descriptionKey: "project2.description",
      url: "https://github.com/bayuaji17/personal-web",
      tag: ["Next.js", "Tailwind CSS", "Resend", "Shadcn/UI"],
    },
    {
      id: 3,
      titleKey: "project3.title",
      descriptionKey: "project3.description",
      url: "https://github.com/bayuaji17/TA-Front-End",
      tag: ["React.js", "Express.js", "MySQL", "Tailwind CSS"],
    },
  ];

  return (
    <Card
      className="lg:col-span-2 flex-col space-y-4 p-4"
      role="region"
      aria-label="Recent Projects section"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <Link
          href={`${locale}/projects`}
          className="inline-flex items-center gap-1 hover:underline group pr-1 md:pr-4"
        >
          {t("link")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 transition-transform duration-300 group-hover:translate-x-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <div
        className="flex flex-col lg:flex-row gap-4"
        role="list"
        aria-label="Project list"
      >
        {project.map((id) => (
          <Card
            key={id.id}
            className="flex-col gap-0 px-0 py-2 w-full h-full bg-secondary"
            role="listitem"
          >
            <CardHeader className="px-3">
              <CardTitle className="font-sans">
                <h3 className="text-2xl font-bold">{t(id.titleKey)}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3">
              <p className="text-pretty mt-2 line-clamp-3">
                {t(id.descriptionKey)}
              </p>
              <div className="flex gap-2 flex-wrap mt-1.5">
                {id.tag.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex-1 mt-1.5 px-3">
              <Link
                href={id.url}
                className="inline-flex items-center gap-1 hover:underline group pr-1 md:pr-4 self-end"
              >
                {t("button")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Card>
  );
}
