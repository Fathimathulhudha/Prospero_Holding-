"use client";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type ProsperoReason = {
  number: string;
  title: string;
  description: string;
};

const prosperoReasons: ProsperoReason[] = [
  {
    number: "01",
    title: "Diversified Portfolio",
    description:
      "A presence across resilient and evolving industries.",
  },
  {
    number: "02",
    title: "Financial Strength",
    description:
      "A solid foundation supported by disciplined management and governance.",
  },
  {
    number: "03",
    title: "Leadership Expertise",
    description:
      "Cross-sector experience guiding businesses toward sustainable growth.",
  },
  {
    number: "04",
    title: "Innovation-Driven",
    description:
      "Adapting to evolving markets, technologies, and opportunities.",
  },
  {
    number: "05",
    title: "Sustainability Focus",
    description:
      "Creating long-term value over short-term gains.",
  },
];

export default function WhyProsperoSection() {
  return (
    <section
      id="why-prospero"
      className="
        relative w-full
        overflow-hidden
        bg-black text-white
      "
    >
      <div
        className="
          relative mx-auto
          h-[clamp(640px,41.666667vw,720px)]
          w-full max-w-[1728px]
          overflow-hidden
          bg-black

          max-md:h-auto
          max-md:min-h-[1100px]
        "
      >
        {/* Main grid lines */}
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
            },
            {
              left: "50%",
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
              top: "38%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "55.333333%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "72.666667%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "90%",
              left: "7.465278%",
              right: "7.465278%",
            },
          ]}
        />

        {/* Number-column grid lines */}
        <GridLines
          thickness={0.5}
          color="#2B2B2B"
          zIndex={0}
          verticalLines={[
            {
              left: "11.805556%",
              top: "38%",
              bottom: "10%",
            },
            {
              left: "54.340278%",
              top: "38%",
              bottom: "27.333333%",
            },
          ]}
        />

        {/* Label and heading */}
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
              Why Prospero
            </Typography>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal
            delay={90}
            distance={12}
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              w-full
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingLight"
            >
              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Built for Today.
              </span>

              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Positioned for Tomorrow.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Introduction */}
        <ScrollReveal
          delay={140}
          distance={12}
          className="
            absolute
            left-[51.388889%]
            top-[clamp(70px,5.208333vw,90px)]
            z-10
            -mt-[6px]
            w-[39.351852%]

            max-md:left-[calc(7.465278%+20px)]
            max-md:right-[calc(7.465278%+20px)]
            max-md:top-[245px]
            max-md:mt-0
            max-md:w-auto
          "
        >
          <Typography
            as="p"
            variant="sectionBodyLight"
            className="!text-[#8E8E8E]"
          >
            Our diversified model allows us to pursue
            opportunities across industries while
            maintaining a unified strategic direction.
          </Typography>
        </ScrollReveal>

        {/* Reason boxes */}
        <div
          className="
            absolute
            left-[7.465278%]
            right-[7.465278%]
            top-[38%]
            z-10
            grid h-[52%]
            grid-cols-2
            grid-rows-3

            max-md:relative
            max-md:left-auto
            max-md:right-auto
            max-md:top-auto
            max-md:mx-[7.465278%]
            max-md:mt-[360px]
            max-md:h-auto
            max-md:grid-cols-1
            max-md:grid-rows-none
          "
        >
          {prosperoReasons.map(
            (reason, index) => (
              <ScrollReveal
                key={reason.number}
                delay={170 + index * 40}
                distance={8}
                className="
                  relative h-full w-full

                  max-md:min-h-[150px]
                  max-md:border-b-[0.5px]
                  max-md:border-[#2B2B2B]
                "
              >
                <article
                  className="
                    relative h-full w-full
                    overflow-hidden
                  "
                >
                  {/* Number */}
                  <Typography
                    as="span"
                    variant="cardNumberLight"
                    className="
                      absolute
                      left-[3%]
                      top-[19%]
                      whitespace-nowrap
                    "
                  >
                    {reason.number}
                  </Typography>

                  {/* Title */}
                  <Typography
                    as="h3"
                    variant="cardTitleLight"
                    className="
                      absolute
                      left-[15.2%]
                      top-[18%]
                      w-[76%]
                      whitespace-nowrap

                      max-md:whitespace-normal
                    "
                  >
                    {reason.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      absolute
                      left-[15.2%]
                      top-[48%]
                      w-[68%]
                      !m-0
                      !font-normal
                      !leading-[1.35]
                      !tracking-[-0.015em]
                      !text-[#8E8E8E]

                      max-md:w-[76%]
                    "
                  >
                    {reason.description}
                  </Typography>
                </article>
              </ScrollReveal>
            ),
          )}

          {/* Empty bottom-right box */}
          <div
            aria-hidden="true"
            className="
              h-full w-full
              max-md:hidden
            "
          />
        </div>
      </div>
    </section>
  );
}