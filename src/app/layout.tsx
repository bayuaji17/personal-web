import { ReactNode } from "react";
import { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://bandev.my.id";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bayu Aji Nugroho | Web Developer",
    template: "%s | Bayu Aji Nugroho",
  },
  description: "Personal website of Bayu Aji Nugroho, a Web Developer",
  keywords: [
    "Bayu Aji Nugroho",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Full Stack Web Developer",
    "Express.js",
    "Back End Developer"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bayu Aji Nugroho | Web Developer",
    description: "Personal website of Bayu Aji Nugroho, a Web Developer",
    url: baseUrl,
    siteName: "Bayu Aji Nugroho",
    images: [
      {
        url: "/profile_wpap.webp",
        width: 1200,
        height: 630,
        alt: "Bayu Aji Nugroho - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayu Aji Nugroho | Web Developer",
    description: "Personal website of Bayu Aji Nugroho, a Web Developer",
    images: ["/profile_wpap.webp"],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: `${baseUrl}/en`,
      id: `${baseUrl}/id`,
    },
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
