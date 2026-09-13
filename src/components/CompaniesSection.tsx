"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Company = {
  number: string;
  name: string;
  description: string;
  logo: string;
  image: string;
  imageAlt: string;
  website: string;
};

const companies: Company[] = [
  {
    number: "01",
    name: "Prospero Investment Group",
    description:
      "Trusted financial advisory, wealth management, investment planning, and risk solutions for confident long-term growth.",
    logo:
      "/images/company-logos/prospero-investment-logo.svg",
    image: "/images/prospero-group.png",
    imageAlt:
      "Prospero Investment Group investment and wealth management",
    website: "https://prospero.ae/",
  },
  {
    number: "02",
    name: "PS Gold",
    description:
      "Secure procurement, storage, and trading of physical gold for portfolio diversification and long-term value preservation.",
    logo: "/images/company-logos/ps-gold.svg",
    image: "/images/blogs/ps-gold/ps-gold.jpg",
    imageAlt:
      "PS Gold precious metals and gold services",
    website: "https://psgold.ae/",
  },
  {
    number: "03",
    name: "PSFX Pro",
    description:
      "Transparent trade execution, competitive trading conditions, and reliable access to global financial markets.",
    logo: "/images/company-logos/psfx.svg",
    image:
      "/images/blogs/psfx-pro/psfx-pro.jpg",
    imageAlt:
      "PSFX Pro global financial markets",
    website: "https://psfxpro.com/",
  },
  {
    number: "04",
    name: "Matrix Finbiz",
    description:
      "Accessible loan solutions with fast approvals, flexible repayments, transparent terms, and responsible lending practices.",
    logo:
      "/images/company-logos/matrix-finbiz.svg",
    image:
      "/images/blogs/matrix-finbiz/matrix-finbiz.jpg",
    imageAlt:
      "Matrix Finbiz financial services",
    website: "https://matrixfinbiz.com/",
  },
  {
    number: "05",
    name: "Nuegrid",
    description:
      "Secure, scalable fintech and software solutions that streamline operations and support sustainable business growth.",
    logo: "/images/company-logos/nuegrid.svg",
    image:
      "/images/blogs/nuegrid/nuebits-01.jpg",
    imageAlt:
      "Nuegrid digital and technology solutions",
    website: "https://nuegrid.com/",
  },
  {
    number: "06",
    name: "DC Holding",
    description:
      "Technology-led real estate solutions with verified listings, trusted brokers, and complete client support.",
    logo:
      "/images/company-logos/dc-holding.svg",
    image:
      "/images/blogs/desert-castle/desert-castle.jpg",
    imageAlt:
      "DC Holding premium real estate development",
    website: "https://desertcastle.ae/",
  },
  {
    number: "07",
    name: "PSFX International",
    description:
      "Tailored UAE business setup, corporate PRO, and strategic advisory services for sustainable business expansion.",
    logo:
      "/images/company-logos/psfx-international.svg",
    image:
      "/images/blogs/psfx-international/psfx-international.jpg",
    imageAlt:
      "PSFX International business setup and advisory services",
    website: "https://psfxinternational.com/",
  },
];

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
);

export default function CompaniesSection() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const cardRefs =
    useRef<Array<HTMLAnchorElement | null>>(
      [],
    );

  const mediaRefs =
    useRef<Array<HTMLDivElement | null>>(
      [],
    );

  useGSAP(
    () => {
      cardRefs.current.forEach(
        (card, index) => {
          const media =
            mediaRefs.current[index];

          if (!card || !media) {
            return;
          }

          gsap.fromTo(
            media,
            {
              yPercent: -2.5,
              scale: 1.04,
            },
            {
              yPercent: 2.5,
              scale: 1.01,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        },
      );
    },
    {
      scope: sectionRef,
      dependencies: [],
      revertOnUpdate: true,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="companies"
      className="
        relative w-full
        overflow-visible
        bg-black text-white
      "
    >
      <div
        className="
          relative mx-auto
          w-full max-w-[1728px]
          overflow-visible
          bg-black
        "
      >
        {/* Top horizontal grid line */}
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={80}
          horizontalLines={[
            {
              top: 0,
              left: "7.465278%",
              right: "7.465278%",
            },
          ]}
        />

        {/* Persistent left grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0
            left-[7.465278%]
            z-[80]
            w-[0.5px]
            bg-[#2B2B2B]
          "
        />

        {/* Persistent right grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0
            right-[7.465278%]
            z-[80]
            w-[0.5px]
            bg-[#2B2B2B]
          "
        />

        {/* Header */}
        <div
          className="
            relative z-10
            mx-[7.465278%]
            grid
            h-[clamp(280px,17.361111vw,300px)]
            grid-cols-2
            border-b-[0.5px]
            border-[#2B2B2B]
            bg-black

            max-md:h-auto
            max-md:min-h-[440px]
            max-md:grid-cols-1
          "
        >
          {/* Header center grid line */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute bottom-0
              left-1/2 top-0
              w-[0.5px]
              bg-[#2B2B2B]

              max-md:hidden
            "
          />

          {/* Left heading column */}
          <div
            className="
              relative min-w-0
              px-[clamp(28px,2.083333vw,36px)]
              pb-[clamp(30px,2.083333vw,36px)]
              pt-[clamp(70px,5.208333vw,90px)]

              max-md:px-[20px]
              max-md:pb-[28px]
              max-md:pt-[70px]
            "
          >
            <ScrollReveal
              delay={30}
              distance={8}
              className="
                flex items-center
                gap-[10px]
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-[15px] w-[15px]
                  shrink-0
                  bg-[#E0BE3D]
                "
              />

              <Typography
                as="span"
                variant="sectionLabelLight"
                className="whitespace-nowrap"
              >
                The Prospero Group
              </Typography>
            </ScrollReveal>

            <ScrollReveal
              delay={70}
              distance={10}
              className="
                mt-[clamp(24px,2.083333vw,36px)]
              "
            >
              <Typography
                as="h2"
                variant="sectionHeadingLight"
                className="
                  !leading-[1.15]
                  !tracking-[-0.045em]
                "
              >
                <span
                  className="
                    block whitespace-nowrap
                    max-lg:whitespace-normal
                  "
                >
                  Different Businesses.
                </span>

                <span
                  className="
                    block whitespace-nowrap
                    max-lg:whitespace-normal
                  "
                >
                  Shared Ambition.
                </span>
              </Typography>
            </ScrollReveal>
          </div>

          {/* Right description column */}
          <div
            className="
              relative min-w-0
              px-[clamp(28px,2.083333vw,36px)]
              pb-[clamp(30px,2.083333vw,36px)]
              pt-[clamp(70px,5.208333vw,90px)]

              max-md:px-[20px]
              max-md:pb-[50px]
              max-md:pt-[20px]
            "
          >
            <ScrollReveal
              delay={110}
              distance={10}
              className="
                relative
                -top-[6px]
                w-full

                max-md:top-0
              "
            >
              <Typography
                as="p"
                variant="sectionBodyLight"
                className="
                  max-w-[650px]
                  !text-[#8E8E8E]
                "
              >
                Each company within the Prospero
                ecosystem brings specialized expertise
                to its market. Together, they form a
                diversified platform designed to
                strengthen the group and create lasting
                impact.
              </Typography>
            </ScrollReveal>
          </div>
        </div>

        {/* Sticky company cards */}
        <div
          className="
            relative z-10
            mx-auto
            w-[67.12963%]
            border-x-[0.5px]
            border-[#2B2B2B]

            max-lg:w-[76%]
            max-md:w-[86%]
          "
        >
          {companies.map(
            (company, index) => (
              <a
                key={company.number}
                ref={(element) => {
                  cardRefs.current[index] =
                    element;
                }}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${company.name} website`}
                data-cursor-label="Discover"
                style={{
                  zIndex: index + 10,
                }}
                className="
                  group sticky top-0
                  block w-full
                  overflow-hidden
                  bg-black text-white
                  no-underline
                  outline-none

                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-[#E0BE3D]
                "
              >
                {/* Company information row */}
                <div
                  className="
                    grid
                    min-h-[clamp(120px,7.638889vw,132px)]
                    grid-cols-[clamp(54px,4.166667vw,72px)_1fr]
                    border-b-[0.5px]
                    border-[#2B2B2B]
                    bg-black

                    max-md:min-h-[150px]
                    max-md:grid-cols-[54px_1fr]
                  "
                >
                  {/* Number column */}
                  <div
                    className="
                      flex items-center
                      justify-center
                      border-r-[0.5px]
                      border-[#2B2B2B]
                      bg-black

                      group-hover:bg-[#E0BE3D]
                      group-focus-visible:bg-[#E0BE3D]
                    "
                  >
                    <span
                      className="
                        font-[family-name:var(--font-geist-sans)]
                        text-[clamp(12px,0.925926vw,16px)]
                        font-medium
                        leading-none
                        tracking-[-0.02em]
                        text-[#8E8E8E]

                        group-hover:text-black
                        group-focus-visible:text-black
                      "
                    >
                      {company.number}
                    </span>
                  </div>

                  {/* Company details */}
                  <div
                    className="
                      flex min-w-0 flex-col
                      justify-center
                      gap-[clamp(12px,0.925926vw,16px)]
                      px-[clamp(22px,2.083333vw,36px)]
                      py-[clamp(18px,1.388889vw,24px)]
                    "
                  >
                    <Typography
                      as="h3"
                      variant="cardTitleLight"
                      className="
                        !m-0
                        !font-medium
                        !leading-[1.15]
                        !tracking-[-0.025em]
                        !text-white
                      "
                    >
                      {company.name}
                    </Typography>

                    <Typography
                      as="p"
                      variant="statLabel"
                      className="
                        !m-0
                        line-clamp-2
                        max-w-[780px]
                        !leading-[1.35]
                        !text-[#8E8E8E]
                      "
                    >
                      {company.description}
                    </Typography>
                  </div>
                </div>

                {/* Image area */}
                <div
                  className="
                    relative
                    aspect-[1160/470]
                    w-full
                    overflow-hidden
                    bg-[#111111]

                    max-md:aspect-[16/10]
                  "
                >
                  {/* Parallax image */}
                  <div
                    ref={(element) => {
                      mediaRefs.current[index] =
                        element;
                    }}
                    className="
                      absolute inset-[-5%]
                      transform-gpu
                    "
                  >
                    <Image
                      src={company.image}
                      alt={company.imageAlt}
                      fill
                      draggable={false}
                      loading={
                        index === 0
                          ? "eager"
                          : "lazy"
                      }
                      fetchPriority={
                        index === 0
                          ? "high"
                          : "auto"
                      }
                      sizes="
                        (max-width: 768px) 86vw,
                        (max-width: 1024px) 76vw,
                        (max-width: 1728px) 67vw,
                        1160px
                      "
                      className="
                        select-none
                        object-cover
                        object-center
                        grayscale
                      "
                    />
                  </div>

                  {/* Dark image overlay */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-0
                      z-10
                      bg-black/50
                    "
                  />

                  {/* Company logo */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2 top-1/2
                      z-20
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <div
                      className="
                        relative
                        h-[clamp(70px,6.365741vw,110px)]
                        w-[clamp(190px,17.361111vw,300px)]
                      "
                    >
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        sizes="300px"
                        className="
                          object-contain
                          brightness-0
                          invert
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Next card preview spacing */}
                <div
                  aria-hidden="true"
                  className="
                    h-[clamp(30px,3.472222vw,60px)]
                    border-b-[0.5px]
                    border-[#2B2B2B]
                    bg-black
                  "
                />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}