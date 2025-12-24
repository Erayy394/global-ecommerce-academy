"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstructorCard from "@/components/InstructorCard";
import HowItWorks from "@/components/HowItWorks";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

/**
 * Ana sayfa (Index) - Eğitim platformunun giriş kapısı
 * İleride buraya eğitim motoru ve dashboard entegrasyonu yapılacak
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Instructor Card */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Hero />
            <InstructorCard />
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* CTA Band */}
        <CTABand />
      </main>

      <Footer />
    </div>
  );
}
