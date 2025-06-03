"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        className="mb-6"
      >
        <circle cx="60" cy="60" r="58" stroke="#e11d48" strokeWidth="4" fill="#fef2f2" />
        <text x="50%" y="54%" textAnchor="middle" fill="#e11d48" fontSize="48" fontWeight="bold" dy=".3em">404</text>
      </svg>
      <h1 className="text-4xl font-bold mb-2 text-rose-600">Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-2 rounded-full bg-rose-600 text-white font-semibold hover:bg-rose-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
