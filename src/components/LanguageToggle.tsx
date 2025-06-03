"use client";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const { locale } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "id" ? "en" : "id";

  const handleToggle = () => {
    const newPath = `/${nextLocale}${pathname.replace(`/${locale}`, "")}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={handleToggle}
      className="rounded-full overflow-hidden w-10 h-10 border-2 flex items-center justify-center"
      aria-label="Toggle language"
    >
      {locale === "id" ? (
        // English flag
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clipPath="url(#clip0_en)">
            <path d="M-10.125 0V40H50.3425V0H-10.125Z" fill="#012169" />
            <path
              d="M-10.125 0L50.3425 40M50.3425 0L-10.125 40"
              stroke="white"
              strokeWidth="7.6"
            />
            <mask
              id="mask0_en"
              maskUnits="userSpaceOnUse"
              x="-11"
              y="0"
              width="62"
              height="41"
            >
              <path
                d="M20.1088 20H50.3425V40L20.1088 20ZM20.1088 20V40H-10.125L20.1088 20ZM20.1088 20H-10.125V0L20.1088 20ZM20.1088 20V0H50.3425L20.1088 20Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_en)">
              <path
                d="M-10.125 0L50.3425 40M50.3425 0L-10.125 40"
                stroke="#C8102E"
                strokeWidth="5"
              />
            </g>
            <path
              d="M-11.334 14.667H15.2717V-1.33301H24.9465V14.667H51.5522V25.3337H24.9465V41.3337H15.2717V25.3337H-11.334V14.667Z"
              fill="#C8102E"
              stroke="white"
              strokeWidth="2.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_en">
              <rect width="40" height="40" rx="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        // Indonesia flag
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clipPath="url(#clip0_id)">
            <path d="M-10 0H50V40H-10V0Z" fill="white" />
            <path d="M-10 0H50V20H-10V0Z" fill="#FF0000" />
          </g>
          <defs>
            <clipPath id="clip0_id">
              <rect width="40" height="40" rx="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}
