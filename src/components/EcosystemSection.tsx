import type { CSSProperties } from "react";
import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Sector = {
  number: string;
  title: string;
  description: string;
  icon: string;
  iconPosition: CSSProperties;
};

const sectors: Sector[] = [
  {
    number: "01",
    title: "Finance",
    description: "Accessible financial solutions.",
    icon: "/images/sectors/finance.svg",
    iconPosition: {
      left: "29.33%",
      top: "23.9%",
      width: "37.83%",
      height: "33.51%",
    },
  },
  {
    number: "02",
    title: "Real Estate",
    description:
      "Designing spaces and assets for enduring value.",
    icon: "/images/sectors/real-estate.svg",
    iconPosition: {
      left: "27.57%",
      top: "22.37%",
      width: "40.92%",
      height: "31.54%",
    },
  },
  {
    number: "03",
    title: "Investments",
    description: "Strategic wealth and growth.",
    icon: "/images/sectors/investments.svg",
    iconPosition: {
      left: "34.31%",
      top: "25.22%",
      width: "31.91%",
      height: "28.24%",
    },
  },
  {
    number: "04",
    title: "Precious Metals",
    description:
      "Trusted gold and metal solutions.",
    icon: "/images/sectors/precious-metals.svg",
    iconPosition: {
      left: "30.5%",
      top: "25.66%",
      width: "35.07%",
      height: "24.54%",
    },
  },
  {
    number: "05",
    title: "Forex & Trading",
    description:
      "Revolutionizing finance with tech and know-how.",
    icon: "/images/sectors/forex-trading.svg",
    iconPosition: {
      left: "28.74%",
      top: "26.75%",
      width: "43.07%",
      height: "28.35%",
    },
  },
  {
    number: "06",
    title: "Insurance",
    description:
      "Offering clear, client-centered risk solutions.",
    icon: "/images/sectors/insurance.svg",
    iconPosition: {
      left: "31.09%",
      top: "24.78%",
      width: "33.99%",
      height: "29.76%",
    },
  },
  {
    number: "07",
    title: "Education & Tech",
    description:
      "Knowledge and digital innovation.",
    icon: "/images/sectors/education-tech.svg",
    iconPosition: {
      left: "26.69%",
      top: "26.1%",
      width: "46.93%",
      height: "28.74%",
    },
  },
];

type SectorCardProps = {
  sector: Sector;
};

function SectorCard({
  sector,
}: SectorCardProps) {
  return (
    <article
      className="
        group relative isolate
        h-full w-full min-w-0
        overflow-hidden
        border border-[#D7D7D7]
        bg-[#F9F9F9]
        transition-[transform,border-color,box-shadow]
        duration-500 ease-out

        hover:-translate-y-[3px]
        hover:border-[#B99A25]
        hover:shadow-[0_16px_38px_rgba(0,0,0,0.10)]
      "
    >
      {/* Yellow hover background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          origin-bottom-left
          scale-0
          bg-[#E0BE3D]
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-100
        "
      />

      {/* Subtle lighting effect */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[1]
          bg-gradient-to-tr
          from-black/[0.03]
          via-transparent
          to-white/[0.18]
          opacity-0
          transition-opacity
          duration-500 ease-out

          group-hover:opacity-100
        "
      />

      {/* Card number */}
      <Typography
        as="p"
        variant="cardNumberDark"
        className="
          absolute
          left-[9.090909%]
          top-[8.991228%]
          z-10
          whitespace-nowrap
          transition-transform
          duration-500 ease-out

          group-hover:translate-x-[3px]
        "
      >
        {sector.number}
      </Typography>

      {/* Sector icon */}
      <div
        aria-hidden="true"
        className="
          absolute z-10
          transition-transform
          duration-700 ease-out

          group-hover:-translate-y-[5px]
          group-hover:scale-[1.04]
        "
        style={sector.iconPosition}
      >
        <Image
          src={sector.icon}
          alt=""
          fill
          sizes="(max-width: 768px) 32vw, (max-width: 1728px) 9vw, 150px"
          className="
            object-contain
            transition-[filter]
            duration-500

            group-hover:[filter:drop-shadow(0_2px_1px_rgba(0,0,0,0.18))]
          "
        />
      </div>

      {/* Card title */}
      <Typography
        as="h3"
        variant="cardTitleDark"
        className="
          absolute
          left-[9.090909%]
          top-[69.736842%]
          z-10
          w-[81.818182%]
          whitespace-nowrap
          transition-transform
          duration-500 ease-out

          group-hover:translate-x-[3px]
        "
      >
        {sector.title}
      </Typography>

      {/* Card description */}
      <Typography
        as="p"
        variant="statLabel"
        className="
          absolute
          left-[9.090909%]
          top-[79.605263%]
          z-10
          w-[79%]
          !m-0
          !leading-[1.35]
          transition-[color,transform]
          duration-500 ease-out

          group-hover:translate-x-[3px]
          group-hover:!text-black/75
        "
      >
        {sector.description}
      </Typography>

      {/* Bottom hover accent */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0
          z-10
          h-[3px] w-0
          bg-black
          transition-[width]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:w-full
        "
      />
    </article>
  );
}

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="
        w-full overflow-hidden
        border-b-[0.5px]
        border-[#D7D7D7]
        bg-white
      "
    >
      <div
        className="
          relative mx-auto
          aspect-[1728/1425]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:aspect-auto
          max-md:!h-auto
          max-md:!min-h-0
          max-md:pb-[60px]
          max-md:flex
          max-md:flex-col
        "
      >
        {/* Vertical grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
              className: "!left-5 md:!left-[7.465278%]",
            },
            {
              left: "50%",
              color: "#EEEEEE",
              hideOnMobile: true,
            },
            {
              right: "7.465278%",
              className: "!right-5 md:!right-[7.465278%]",
            },
          ]}
        />

        {/* Label and heading */}
        <div
          className="
            md:absolute
            md:left-[9.31713%]
            md:top-[clamp(70px,5.208333vw,90px)]
            z-10
            md:w-[40%]

            max-md:static
            max-md:mt-[50px]
            max-md:mx-5
            max-md:w-auto
          "
        >
          {/* Section label */}
          <ScrollReveal
            delay={30}
            distance={8}
            className="
              flex items-center
              gap-[clamp(8px,0.694444vw,12px)]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-[clamp(10px,1.041667vw,18px)]
                w-[clamp(10px,1.041667vw,18px)]
                shrink-0
                bg-[#E0BE3D]
              "
            />

            <Typography
              as="span"
              variant="sectionLabelDark"
              className="whitespace-nowrap"
            >
              Eco System
            </Typography>
          </ScrollReveal>

          {/* Section heading */}
          <ScrollReveal
            delay={80}
            distance={10}
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              w-full
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingDark"
            >
              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Seven Sectors.
              </span>

              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                One Strategic Vision.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Introduction */}
        <ScrollReveal
          delay={130}
          distance={10}
          className="
            md:absolute
            md:left-[51.388889%]
            md:top-[clamp(70px,5.208333vw,90px)]
            z-10
            md:-mt-[6px]
            md:w-[39.351852%]

            max-md:static
            max-md:mt-[20px]
            max-md:mx-5
            max-md:w-auto
          "
        >
          <Typography
            as="p"
            variant="sectionBodyDark"
          >
            Our businesses span various sectors,
            including finance, real estate, technology,
            and education, all united by a common goal:
            to create sustainable value.
          </Typography>
        </ScrollReveal>

        {/* Cards container */}
        <div
          className="
            md:absolute
            md:left-1/2
            md:top-[25.5%]
            z-10
            md:h-[62.5%]
            md:w-[78%]
            md:-translate-x-1/2

            max-md:static
            max-md:mt-[36px]
            max-md:mx-auto
            max-md:h-auto
            max-md:w-[85.069444%]
          "
        >
          {/* Desktop first row */}
          <div
            className="
              absolute
              left-0 top-0
              grid
              h-[49%] w-full
              grid-cols-4
              gap-[0.9%]

              max-md:static
              max-md:h-auto
              max-md:grid-cols-1
              max-md:gap-[18px]
            "
          >
            {sectors
              .slice(0, 4)
              .map((sector, index) => (
                <ScrollReveal
                  key={sector.number}
                  delay={160 + index * 40}
                  distance={10}
                  className="
                    h-full min-w-0
                    max-md:h-[210px]
                  "
                >
                  <SectorCard
                    sector={sector}
                  />
                </ScrollReveal>
              ))}
          </div>

          {/* Desktop second row */}
          <div
            className="
              absolute
              left-1/2
              top-[51%]
              grid
              h-[49%]
              w-[74.75%]
              -translate-x-1/2
              grid-cols-3
              gap-[1.2%]

              max-md:static
              max-md:mt-[18px]
              max-md:h-auto
              max-md:w-full
              max-md:translate-x-0
              max-md:grid-cols-1
              max-md:gap-[18px]
            "
          >
            {sectors
              .slice(4)
              .map((sector, index) => (
                <ScrollReveal
                  key={sector.number}
                  delay={230 + index * 40}
                  distance={10}
                  className="
                    h-full min-w-0
                    max-md:h-[210px]
                  "
                >
                  <SectorCard
                    sector={sector}
                  />
                </ScrollReveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}