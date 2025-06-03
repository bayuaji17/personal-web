"use client";
import { Marquee } from "../Marquee";
import { Card } from "../ui/card";

export default function SkillsSection() {
  const skills = [
    { id: 1, title: "React.Js" },
    { id: 2, title: "Next.Js" },
    { id: 3, title: "Javascript" },
    { id: 4, title: "TypeScript" },
    { id: 5, title: "Tailwind CSS" },
    { id: 6, title: "Express Js" },
    { id: 7, title: "Docker" },
    { id: 8, title: "Deployment VPS" },
    { id: 9, title: "PostgreSQL" },
    { id: 10, title: "MySQL" },
    { id: 11, title: "Prisma" },
    { id: 12, title: "HTML/CSS" },
  ];

  return (
    <Card
      className="flex flex-col p-4 h-full justify-center"
      role="region"
      aria-label="Skills and Tools section"
    >
      <Marquee pauseOnHover reverse className="[--duration:30s]">
        <div className="flex" role="list" aria-label="Skills list">
          {skills.map((s) => (
            <Card
              key={s.id}
              className="text-accent-content justify-center text-center py-2 px-4 mx-2 bg-secondary"
              role="listitem"
              aria-label={s.title}
            >
              <span className="text-xl font-semibold">{s.title}</span>
            </Card>
          ))}
        </div>
      </Marquee>
      <Marquee pauseOnHover className="[--duration:30s]">
        <div className="flex" role="list" aria-label="Skills list">
          {skills.map((s) => (
            <Card
              key={s.id}
              className="text-accent-content justify-center text-center py-2 px-4 mx-2 bg-secondary"
              role="listitem"
              aria-label={s.title}
            >
              <span className="text-xl font-semibold">{s.title}</span>
            </Card>
          ))}
        </div>
      </Marquee>
    </Card>
  );
}
