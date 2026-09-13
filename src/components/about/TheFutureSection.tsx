"use client";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function TheFutureSection() {
  return (
    <section
      id="the-future"
      className="
        relative w-full
        overflow-hidden
        bg-[#E4E4E4]
        text-black
      "
    >
      <div
        className="
          relative mx-auto
          h-[clamp(480px,34.722222vw,600px)]
          w-full max-w-[1728px]
          overflow-hidden
          bg-[#E4E4E4]

          max-md:h-auto
          max-md:min-h-[640px]
        "
      >
        {/* Grid lines */}
        <GridLines
          thickness={0.5}
          color="#C8C8C8"
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
              top: "83%",
              left: "7.465278%",
              right: "7.465278%",
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
              variant="sectionLabelDark"
              className="whitespace-nowrap"
            >
              The Future
            </Typography>
          </ScrollReveal>

          {/* Heading */}
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
              variant="sectionHeadingDark"
            >
              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Shaping the
              </span>

              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Future Together.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Description */}
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
            max-md:top-[285px]
            max-md:mt-0
            max-md:w-auto
          "
        >
          <div
            className="
              flex flex-col
              gap-[clamp(24px,2.083333vw,36px)]
            "
          >
            <Typography
              as="p"
              variant="sectionBodyDark"
              className="!text-[#707070]"
            >
              Prospero Holding continues to explore new
              markets, digital finance innovations, and
              sustainable investment opportunities.
            </Typography>

            <Typography
              as="p"
              variant="sectionBodyDark"
              className="!text-[#707070]"
            >
              Our strategic roadmap looks toward areas
              including fintech, smart real estate, and
              international partnerships as we work to
              expand our capabilities and strengthen
              our global presence.
            </Typography>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}