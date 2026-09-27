"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-[#071b10]/55">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="hero-copy">
          <p className="hero-copy-item hero-copy-item-one text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            {siteConfig.campus}
          </p>
          <h1 className="hero-copy-item hero-copy-item-two mt-3 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {siteConfig.organization}
          </h1>
          <p className="hero-copy-item hero-copy-item-three mt-4 text-xl font-medium text-emerald-100">
            {siteConfig.tagline}
          </p>
          <p className="hero-copy-item hero-copy-item-four mt-4 max-w-xl text-justify text-base leading-7 text-white/75">
            A professional student community for cloud computing, software building, and peer-led
            learning. We help NUML Rawalpindi students grow through workshops, events, and
            collaboration.
          </p>
          <div className="hero-copy-item hero-copy-item-five mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" className="hero-primary-action">
              Join the Community
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/events" variant="secondary">
              Explore Events
            </ButtonLink>
          </div>
        </div>
        <div className="hero-logo-panel mx-auto w-full max-w-md">
          <div className="hero-logo-stage">
            <div className="hero-logo-rotation">
              <Image
                src={siteConfig.logo}
                alt=""
                width={320}
                height={320}
                aria-hidden="true"
                className="hero-logo-glow"
              />
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.organization} logo`}
                width={320}
                height={320}
                priority
                className="hero-logo-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
