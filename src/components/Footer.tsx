import Image from "next/image";
import Link from "next/link";

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
    href: "#about",
  },
  {
    label: "Business Sectors",
    href: "#ecosystem",
  },
  {
    label: "Group Companies",
    href: "#companies",
  },
  {
    label: "News",
    href: "#news",
  },
  {
    label: "Careers",
    href: "#careers",
  },
  {
    label: "Contact",
    href: "#contact",
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
  const isExternal =
    href.startsWith("http");

  const opensNewTab = isExternal;

  return (
    <Link
      href={href}
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
      <div
        className="
          relative mx-auto
          h-[calc(100svh_-_var(--navbar-height,108px))]
          min-h-[620px]
          max-h-[760px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-black

          max-md:h-auto
          max-md:min-h-[950px]
          max-md:max-h-none
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

            max-md:left-[12%]
            max-md:top-[7%]
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

            max-md:left-[52%]
            max-md:top-[7%]
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

            max-md:left-[12%]
            max-md:top-[40%]
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

            max-md:left-[12%]
            max-md:top-[58%]
            max-md:h-[18%]
            max-md:w-[76%]
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
              sizes="
                (max-width: 768px) 76vw,
                (max-width: 1728px) 48vw,
                830px
              "
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

            max-md:left-[12%]
            max-md:right-auto
            max-md:top-[79%]
          "
        >
          <nav
            aria-label="Social links"
            className="
              flex items-center
              gap-[clamp(16px,1.50463vw,26px)]

              max-md:flex-wrap
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

            max-md:left-[12%]
            max-md:top-[92%]
          "
        >
          <Typography
            as="p"
            variant="copyright"
            className="
              whitespace-nowrap

              max-md:whitespace-normal
            "
          >
            © 2026 Prospero Holding. All rights
            reserved.
          </Typography>
        </ScrollReveal>
      </div>
    </footer>
  );
}