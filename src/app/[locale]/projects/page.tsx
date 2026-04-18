import { BlurFade } from "@/components/BlurFade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPages() {
  const t = useTranslations("recentProject");
  const ProjectCard = [
    {
      titleKey: "project0.title",
      descriptionKey: "project0.description",
      imageUrl: "/fashion-ecommerce.webp",
      technologies: [
        "Next Js",
        "Supabase",
        "Drizzle ORM",
        "Shadcn/UI",
        "Better Auth",
        "Cloudflare R2",
        "Zustand",
        "Xendit",
      ],
      liveUrl: "https://ordozeus-shop.vercel.app/",
      githubUrl: "https://github.com/bayuaji17/ordozeus-shop",
    },
    {
      titleKey: "project1.title",
      descriptionKey: "project1.description",
      imageUrl: "/zalisma-perfumes.webp",
      technologies: [
        "Next Js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn/UI",
        "Tanstack Query",
        "Axios",
        "Vercel Blob",
      ],
      liveUrl: "https://perfume-apps.vercel.app/",
      githubUrl: "https://github.com/bayuaji17/perfume-apps",
    },
    {
      titleKey: "project2.title",
      descriptionKey: "project2.description",
      imageUrl: "/personal_site.webp",
      technologies: [
        "Next Js",
        "TailwindCSS",
        "Shadcn/UI",
        "Next-intl",
        "Resend",
      ],
      liveUrl: "/",
      githubUrl: "https://github.com/bayuaji17/personal-web",
    },
    {
      titleKey: "project3.title",
      descriptionKey: "project3.description",
      imageUrl: "/expert_system.webp",
      technologies: ["React Js", "Express Js", "MySQL", "TailwindCSS"],
      liveUrl: "",
      githubUrl: "https://github.com/bayuaji17/TA-Front-End",
    },
  ];
  return (
    <BlurFade>
      <Card className="w-full my-3 p-4">
        <h1 className="text-3xl font-bold">{t("link")}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ProjectCard.map((p) => (
            <Card
              key={p.titleKey}
              className="bg-secondary p-0 overflow-hidden gap-0 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={p.imageUrl}
                  alt={`${t(p.titleKey)} Images`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 px-4">
                  {p.liveUrl && (
                    <Button asChild className="w-1/2" variant="outline">
                      <Link
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <Button
                    asChild
                    className={p.liveUrl ? "w-1/2" : "w-full"}
                    variant="outline"
                  >
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                      >
                        <g clipPath="url(#clip0_910_21)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                          />
                        </g>
                      </svg>
                      View Code
                    </Link>
                  </Button>
                </div>
              </div>
              {/* <div className="px-4 py-2 flex flex-col gap-2"> */}
              <CardContent className="px-4 flex-1 mt-1.5">
                <h2 className="text-3xl font-extrabold text-wrap">
                  {t(p.titleKey)}
                </h2>
                <div className="h-20 mt-2">
                  <p className="text-pretty line-clamp-3">
                    {t(p.descriptionKey)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
              {/* </div> */}
              <div className="flex justify-center w-full gap-2 px-4 py-2 ">
                <CardFooter className="px-0 w-full gap-2">
                  {p.liveUrl && (
                    <Button asChild className="w-1/2">
                      <Link
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  <Button asChild className={p.liveUrl ? "w-1/2" : "w-full"}>
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                      >
                        <g clipPath="url(#clip0_910_21)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                          />
                        </g>
                      </svg>
                      View Code
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </BlurFade>
  );
}
