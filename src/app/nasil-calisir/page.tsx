"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UI_TEXTS } from "@/constants/ui-texts";
import Link from "next/link";

export default function HowItWorksPage() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "amac",
        "nasil-calisir",
        "ilerleme",
        "soru-sor",
        "kimler-icin",
        "onemli-not",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const whatsappNumber = "905459040537";
  const whatsappMessage = "Merhaba, Global E-Ticaret Akademisi hakkında bir sorum var.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {UI_TEXTS.howItWorksPage.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              {UI_TEXTS.howItWorksPage.subtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold text-slate-900">
                  {UI_TEXTS.howItWorksPage.tableOfContents.title}
                </h2>
                <nav className="space-y-2">
                  {UI_TEXTS.howItWorksPage.tableOfContents.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left text-sm transition ${
                        activeSection === item.id
                          ? "font-semibold text-indigo-600"
                          : "text-slate-600 hover:text-indigo-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Amaç */}
              <section
                id="amac"
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {UI_TEXTS.howItWorksPage.sections.purpose.title}
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {UI_TEXTS.howItWorksPage.sections.purpose.content}
                </p>
              </section>

              {/* Nasıl Çalışır */}
              <section
                id="nasil-calisir"
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  {UI_TEXTS.howItWorksPage.sections.steps.title}
                </h2>
                <div className="space-y-6">
                  {UI_TEXTS.howItWorksPage.sections.steps.items.map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* İlerleme Nasıl Kaydediliyor */}
              <section
                id="ilerleme"
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {UI_TEXTS.howItWorksPage.sections.progress.title}
                </h2>
                <p className="mb-4 text-slate-700 leading-relaxed">
                  {UI_TEXTS.howItWorksPage.sections.progress.content}
                </p>
                <ul className="mb-4 space-y-2">
                  {UI_TEXTS.howItWorksPage.sections.progress.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 text-indigo-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm text-amber-800">
                    {UI_TEXTS.howItWorksPage.sections.progress.note}
                  </p>
                </div>
              </section>

              {/* Eğitmene Soru Sor */}
              <section
                id="soru-sor"
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {UI_TEXTS.howItWorksPage.sections.askInstructor.title}
                </h2>
                <p className="mb-4 text-slate-700 leading-relaxed">
                  {UI_TEXTS.howItWorksPage.sections.askInstructor.content}
                </p>
                <div className="mb-4 flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <svg
                    className="h-6 w-6 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {UI_TEXTS.howItWorksPage.sections.askInstructor.whatsapp.number}
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#20BA5A]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {UI_TEXTS.howItWorksPage.sections.askInstructor.whatsapp.button}
                </a>
                <p className="mt-3 text-sm text-slate-600">
                  {UI_TEXTS.howItWorksPage.sections.askInstructor.note}
                </p>
              </section>

              {/* Kimler İçin Uygun */}
              <section
                id="kimler-icin"
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {UI_TEXTS.howItWorksPage.sections.targetAudience.title}
                </h2>
                <p className="mb-4 text-slate-700 leading-relaxed">
                  {UI_TEXTS.howItWorksPage.sections.targetAudience.content}
                </p>
                <ul className="space-y-2">
                  {UI_TEXTS.howItWorksPage.sections.targetAudience.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 flex-shrink-0 text-indigo-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Önemli Not */}
              <section
                id="onemli-not"
                className="scroll-mt-24 rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8"
              >
                <h2 className="mb-4 text-2xl font-bold text-amber-900">
                  {UI_TEXTS.howItWorksPage.sections.importantNote.title}
                </h2>
                <p className="text-amber-800 leading-relaxed">
                  {UI_TEXTS.howItWorksPage.sections.importantNote.content}
                </p>
              </section>

              {/* CTA */}
              <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 text-center md:p-8">
                <h3 className="mb-2 text-xl font-bold text-indigo-900">
                  Hazır mısınız?
                </h3>
                <p className="mb-6 text-indigo-700">
                  Eğitimlere başlayın ve global e-ticaret yolculuğunuza adım atın.
                </p>
                <Link
                  href="/egitimler"
                  className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Eğitimlere Başla
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

