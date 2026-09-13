"use client";

import {
  LuEye,
  LuTarget,
} from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type FoundationCard = {
  title: string;
  description: string;
  icon: typeof LuEye;
};

const foundationCards: FoundationCard[] = [
  {
    title: "Vision",
    description:
      "To be a leading multi-sector holding company recognized for creating sustainable impact across industries.",
    icon: LuEye,
  },
  {
    title: "Mission",
    description:
      "To strategically invest in, manage, and nurture businesses that redefine industry benchmarks through innovation, trust, and excellence.",
    icon: LuTarget,
  },
];

export default function OurFoundationSection() {
  return (
    <section
      id="foundation"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          h-[clamp(545px,35.300926vw,610px)]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:h-auto
          max-md:min-h-[840px]
        "
      >
        {/* Top and side grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
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
          ]}
        />

        {/* Foundation label and heading */}
        <div
          className="
            absolute
            left-[9.31713%]
            top-[clamp(70px,5.208333vw,90px)]
            z-10
            w-[40%]

            max-md:left-[calc(7.465278%+20px)]
            max-md:right-[calc(7.465278%+20px)]
            max-md:top-[70px]
            max-md:w-auto
          "
        >
          {/* Section label */}
          <ScrollReveal
            delay={40}
            distance={10}
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
              variant="sectionLabelDark"
              className="whitespace-nowrap"
            >
              Our Foundation
            </Typography>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal
            delay={100}
            distance={14}
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
                The Foundation
              </span>

              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                of Our Growth.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Vision and Mission cards */}
        <div
          className="
            absolute
            left-[11.574074%]
            right-[11.574074%]
            top-[43%]
            z-10

            grid
            h-[clamp(230px,15.625vw,270px)]
            grid-cols-2
            gap-[clamp(22px,2.314815vw,40px)]

            max-md:left-[9.31713%]
            max-md:right-[9.31713%]
            max-md:top-[30%]
            max-md:h-auto
            max-md:grid-cols-1
            max-md:gap-4
          "
        >
          {foundationCards.map(
            (card, index) => {
              const Icon = card.icon;

              return (
                <ScrollReveal
                  key={card.title}
                  delay={160 + index * 70}
                  distance={12}
                  className="
                    h-full min-h-0

                    max-md:h-[250px]
                  "
                >
                  <article
                    className="
                      group relative
                      h-full w-full
                      overflow-hidden
                      border border-[#E3E3E3]
                      bg-[#FAFAFA]
                      transition-[background-color,border-color,box-shadow]
                      duration-300 ease-out

                      hover:border-[#D5D5D5]
                      hover:bg-white
                      hover:shadow-[0_12px_32px_rgba(0,0,0,0.045)]
                    "
                  >
                    {/* Hover accent */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute left-0 top-0
                        h-[2px] w-full
                        origin-left
                        scale-x-0
                        bg-[#E0BE3D]
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-x-100
                      "
                    />

                    {/* Card icon */}
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.8}
                      className="
                        absolute
                        left-[7.8%]
                        top-[16%]
                        h-[clamp(20px,1.388889vw,24px)]
                        w-[clamp(20px,1.388889vw,24px)]
                        text-[#7D7D7D]
                        transition-colors
                        duration-300

                        group-hover:text-[#E0BE3D]
                      "
                    />

                    {/* Card title */}
                    <Typography
                      as="h3"
                      variant="sectionBodyDark"
                      className="
                        absolute
                        left-[7.8%]
                        top-[44%]
                        !m-0
                        !text-[clamp(16px,1.157407vw,20px)]
                        !font-medium
                        !leading-none
                        !tracking-[-0.03em]
                        !text-black
                      "
                    >
                      {card.title}
                    </Typography>

                    {/* Card description */}
                    <Typography
                      as="p"
                      variant="statLabel"
                      className="
                        absolute
                        left-[7.8%]
                        top-[58%]
                        w-[82%]
                        !m-0
                        !font-normal
                        !leading-[1.35]
                        !tracking-[-0.015em]
                        !text-[#777777]

                        max-md:w-[84%]
                      "
                    >
                      {card.description}
                    </Typography>
                  </article>
                </ScrollReveal>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}