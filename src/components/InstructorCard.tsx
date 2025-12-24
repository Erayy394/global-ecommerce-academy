"use client";

import Image from "next/image";
import { UI_TEXTS } from "@/constants/ui-texts";

// SVG Icons
const GitHubIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const CodePenIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.11a.834.834 0 0 0-.9 0L2.371 8.214A.786.786 0 0 0 2 8.852v6.296c0 .343.174.661.438.851l9.165 6.106a.787.787 0 0 0 .793.001l9.165-6.106a.966.966 0 0 0 .438-.851v-6.296c.001-.001 0-.001 0-.001l-.001.001zm-1.788 6.115v-4.396l-1.426.949v2.447l-2.402 1.601-4.772-3.181 4.772-3.181 2.421 1.601 1.426-.949-3.847-2.546L12 9.866 6.407 6.72 2.56 9.266l1.425.949 2.42-1.601L12 12.395l5.595-3.781 2.42 1.601 1.426-.949-1.426-.949L12 4.854 7.228 8.035l-4.772 3.181v2.447l-1.426.949v4.396l1.426-.949 4.772 3.181 4.772-3.181 2.402-1.601 1.426.949zm0 0l3.847 2.546L12 19.134l-3.847-2.546 3.847-2.546 3.847 2.546z" />
  </svg>
);

export default function InstructorCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
      {/* Photo & Basic Info */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 flex-shrink-0">
          <Image
            src="/instructor.jpg"
            alt={UI_TEXTS.instructor.name}
            width={80}
            height={80}
            className="h-20 w-20 rounded-full object-cover"
            priority
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {UI_TEXTS.instructor.name}
          </h3>
          <p className="text-sm text-slate-600">{UI_TEXTS.instructor.title}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-700">
        {UI_TEXTS.instructor.description}
      </p>

      {/* Contact Links */}
      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        <a
          href={`mailto:${UI_TEXTS.instructor.contact.email}`}
          className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-indigo-600"
        >
          <span>📧</span>
          {UI_TEXTS.instructor.contact.email}
        </a>
        <a
          href={UI_TEXTS.instructor.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-indigo-600"
        >
          <LinkedInIcon />
          <span>linkedin.com/in/eray-yeşilyurt</span>
        </a>
        <a
          href={UI_TEXTS.instructor.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-indigo-600"
        >
          <GitHubIcon />
          <span>github.com/Erayy394</span>
        </a>
        <a
          href={UI_TEXTS.instructor.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-indigo-600"
        >
          <InstagramIcon />
          <span>@3dmodeling_art</span>
        </a>
        <a
          href={UI_TEXTS.instructor.contact.codepen}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-indigo-600"
        >
          <CodePenIcon />
          <span>codepen.io/Erayy394</span>
        </a>
      </div>

      {/* Badges */}
      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        {UI_TEXTS.instructor.badges.map((badge, index) => (
          <span
            key={index}
            className="inline-block rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
        {UI_TEXTS.instructor.disclaimer}
      </p>
    </div>
  );
}

