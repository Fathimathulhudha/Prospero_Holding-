"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type FooterLink = {
  label: string;
  href: string;
};

const exploreLinks: FooterLink[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Business Sectors",
    href: "/#ecosystem",
  },
  {
    label: "Group Companies",
    href: "/#companies",
  },
  {
    label: "News",
    href: "/#news",
  },
  {
    label: "Careers",
    href: "/#careers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const groupLinks: FooterLink[] = [
  {
    label: "Prospero Investment Group",
    href: "https://prospero.ae/",
  },
  {
    label: "PSFX Pro",
    href: "https://psfxpro.com/",
  },
  {
    label: "Matrix Finbiz",
    href: "https://matrixfinbiz.com/",
  },
  {
    label: "Nuegrid",
    href: "https://nuegrid.com/",
  },
  {
    label: "DC Holding",
    href: "https://desertcastle.ae/",
  },
  {
    label: "PS Gold",
    href: "https://psgold.ae/",
  },
  {
    label: "PSFX International",
    href: "https://psfxinternational.com/",
  },
];

const legalLinks: FooterLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

const socialLinks: FooterLink[] = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Email",
    href: "mailto:info@prospero.ae",
  },
];

function FooterNavigationLink({
  label,
  href,
}: FooterLink) {
  const pathname = usePathname();
  const lenis = useLenis();
  const isHomePage = pathname === "/";
  const opensNewTab = href.startsWith("http");

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (isHomePage) {
        event.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
          window.history.pushState(null, "", href);
          if (lenis) {
            lenis.scrollTo(target, {
              offset: -72,
              immediate: false,
            });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        sessionStorage.setItem("prospero-pending-section", sectionId);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={
        opensNewTab
          ? "_blank"
          : undefined
      }
      rel={
        opensNewTab
          ? "noopener noreferrer"
          : undefined
      }
      className="
        group block w-fit
        whitespace-nowrap

        focus-visible:outline-none
        focus-visible:ring-1
        focus-visible:ring-[#E0BE3D]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
      "
    >
      <Typography
        as="span"
        variant="statLabel"
        className="
          !font-normal
          !leading-[1.35]
          !tracking-[-0.015em]
          !text-[#8E8E8E]
          transition-colors
          duration-300

          group-hover:!text-white
          group-focus-visible:!text-white
        "
      >
        {label}

        {opensNewTab && (
          <span className="sr-only">
            {" opens in a new tab"}
          </span>
        )}
      </Typography>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative w-full
        overflow-hidden
        bg-black text-white
      "
    >
      {/* Mobile & Tablet Responsive Layout (<1024px) */}
      <div className="relative mx-auto w-full max-w-[1728px] px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:hidden">
        {/* Subtle border outline adapting to gutters */}
        <div className="pointer-events-none absolute inset-x-5 top-0 border-t border-[#292929] sm:inset-x-8 md:inset-x-12" />

        {/* Links Grid: 2 columns on mobile, 3 columns on tablet */}
        <div className="grid grid-cols-2 gap-8 gap-y-10 sm:grid-cols-3 md:gap-10">
          {/* Explore column */}
          <ScrollReveal delay={40} distance={10}>
            <Typography
              as="p"
              variant="footerLabel"
              className="!text-sm !font-medium !text-white uppercase tracking-wider"
            >
              Explore
            </Typography>

            <nav
              aria-label="Explore links"
              className="mt-4 flex flex-col gap-2.5"
            >
              {exploreLinks.map((item) => (
                <FooterNavigationLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </ScrollReveal>

          {/* Group column */}
          <ScrollReveal delay={90} distance={10}>
            <Typography
              as="p"
              variant="footerLabel"
              className="!text-sm !font-medium !text-white uppercase tracking-wider"
            >
              Group
            </Typography>

            <nav
              aria-label="Prospero group links"
              className="mt-4 flex flex-col gap-2.5"
            >
              {groupLinks.map((item) => (
                <FooterNavigationLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </ScrollReveal>

          {/* Legal column */}
          <ScrollReveal delay={140} distance={10} className="col-span-2 sm:col-span-1">
            <Typography
              as="p"
              variant="footerLabel"
              className="!text-sm !font-medium !text-white uppercase tracking-wider"
            >
              Legal
            </Typography>

            <nav
              aria-label="Legal links"
              className="mt-4 flex flex-col gap-2.5"
            >
              {legalLinks.map((item) => (
                <FooterNavigationLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </ScrollReveal>
        </div>

        {/* Separator line */}
        <div className="my-10 border-t border-[#292929] md:my-12" />

        {/* Middle row: Logo & Social links */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <ScrollReveal delay={180} distance={10}>
            <Link
              href="/"
              aria-label="Prospero Holding home"
              className="
                relative block
                h-10 w-[180px] sm:h-12 sm:w-[220px] md:h-14 md:w-[260px]
                transition-opacity
                duration-300
                hover:opacity-80
                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-black
              "
            >
              <Image
                src="/images/company-logos/prospero-holding.svg"
                alt="Prospero Holding"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-contain object-left"
              />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={220} distance={10}>
            <nav
              aria-label="Social links"
              className="flex flex-wrap items-center gap-5 sm:gap-6"
            >
              {socialLinks.map((item) => (
                <FooterNavigationLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </nav>
          </ScrollReveal>
        </div>

        {/* Separator line */}
        <div className="my-8 border-t border-[#292929]" />

        {/* Bottom row: Copyright */}
        <ScrollReveal delay={260} distance={8}>
          <Typography
            as="p"
            variant="copyright"
            className="!text-xs text-[#8E8E8E]"
          >
            © 2026 Prospero Holding. All rights reserved.
          </Typography>
        </ScrollReveal>
      </div>

      {/* Desktop Exact Coordinates Layout (>=1024px) */}
      <div
        className="
          relative mx-auto hidden
          h-[calc(100svh_-_var(--navbar-height,108px))]
          min-h-[620px]
          max-h-[760px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-black
          lg:block
        "
      >
        {/* Footer grid lines */}
        <GridLines
          thickness={0.5}
          color="#292929"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
            },
            {
              left: "36.921296%",
              top: 0,
              bottom: "41%",
            },
            {
              left: "66.435185%",
              top: 0,
              bottom: "41%",
            },
            {
              right: "7.465278%",
            },
          ]}
          horizontalLines={[
            {
              top: 0,
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "59%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "91%",
              left: "7.465278%",
              right: "7.465278%",
            },
          ]}
        />

        {/* Explore column */}
        <ScrollReveal
          delay={40}
          distance={10}
          className="
            absolute
            left-[9.664352%]
            top-[9%]
            z-10
          "
        >
          <Typography
            as="p"
            variant="footerLabel"
            className="whitespace-nowrap"
          >
            Explore
          </Typography>

          <nav
            aria-label="Explore links"
            className="
              mt-[clamp(14px,1.157407vw,20px)]
              flex flex-col
              gap-[clamp(7px,0.578704vw,10px)]
            "
          >
            {exploreLinks.map((item) => (
              <FooterNavigationLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>
        </ScrollReveal>

        {/* Group column */}
        <ScrollReveal
          delay={90}
          distance={10}
          className="
            absolute
            left-[38.946759%]
            top-[9%]
            z-10
          "
        >
          <Typography
            as="p"
            variant="footerLabel"
            className="whitespace-nowrap"
          >
            Group
          </Typography>

          <nav
            aria-label="Prospero group links"
            className="
              mt-[clamp(14px,1.157407vw,20px)]
              flex flex-col
              gap-[clamp(7px,0.578704vw,10px)]
            "
          >
            {groupLinks.map((item) => (
              <FooterNavigationLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>
        </ScrollReveal>

        {/* Legal column */}
        <ScrollReveal
          delay={140}
          distance={10}
          className="
            absolute
            left-[68.287037%]
            top-[9%]
            z-10
          "
        >
          <Typography
            as="p"
            variant="footerLabel"
            className="whitespace-nowrap"
          >
            Legal
          </Typography>

          <nav
            aria-label="Legal links"
            className="
              mt-[clamp(14px,1.157407vw,20px)]
              flex flex-col
              gap-[clamp(7px,0.578704vw,10px)]
            "
          >
            {legalLinks.map((item) => (
              <FooterNavigationLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>
        </ScrollReveal>

        {/* Large Prospero logo */}
        <ScrollReveal
          delay={180}
          distance={12}
          className="
            absolute
            left-[9.664352%]
            top-[63%]
            z-10
            h-[24%]
            w-[48%]
          "
        >
          <Link
            href="/"
            aria-label="Prospero Holding home"
            className="
              relative block
              h-full w-full
              transition-opacity
              duration-300

              hover:opacity-80

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#E0BE3D]
              focus-visible:ring-offset-4
              focus-visible:ring-offset-black
            "
          >
            <Image
              src="/images/company-logos/prospero-holding.svg"
              alt="Prospero Holding"
              fill
              sizes="(max-width: 1728px) 48vw, 830px"
              className="
                origin-left
                scale-[1.35]
                object-contain
                object-left
              "
            />
          </Link>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal
          delay={220}
          distance={10}
          className="
            absolute
            right-[9.664352%]
            top-[72%]
            z-10
          "
        >
          <nav
            aria-label="Social links"
            className="
              flex items-center
              gap-[clamp(16px,1.50463vw,26px)]
            "
          >
            {socialLinks.map((item) => (
              <FooterNavigationLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>
        </ScrollReveal>

        {/* Copyright */}
        <ScrollReveal
          delay={260}
          distance={8}
          className="
            absolute
            left-[9.664352%]
            top-[94%]
            z-10
          "
        >
          <Typography
            as="p"
            variant="copyright"
            className="whitespace-nowrap"
          >
            © 2026 Prospero Holding. All rights
            reserved.
          </Typography>
        </ScrollReveal>
      </div>
    </footer>
  );
}