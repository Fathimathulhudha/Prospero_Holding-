import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function OurPurposeSection() {
  return (
    <section
      id="our-purpose"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          min-h-[950px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:min-h-[1300px]
        "
        style={{
          height: `
            calc(
              100svh -
              var(--navbar-height, 108px) +
              clamp(
                180px,
                12.731481vw,
                220px
              )
            )
          `,
        }}
      >
        {/* Main grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={1}
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
              top: "5%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "54.5%",
              left: "7.465278%",
              right: "7.465278%",
            },
            {
              top: "60%",
              left: "7.465278%",
              right: "7.465278%",
            },
          ]}
        />

        {/* Building image */}
        <div
          className="
            absolute
            left-[7.465278%]
            right-[7.465278%]
            top-[5%]
            z-10
            h-[49.5%]
            overflow-hidden
            bg-[#E7EBEF]
          "
        >
          <Image
            src="/about/our-purpose.jpg"
            alt="Modern business buildings"
            fill
            loading="lazy"
            quality={85}
            sizes="
              (max-width: 768px) 85vw,
              (max-width: 1728px) 85.069444vw,
              1470px
            "
            className="
              object-cover
              object-center
            "
          />

          {/* Subtle image overlay */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-black/[0.02]
            "
          />
        </div>

        {/* Empty space between image and content */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[7.465278%]
            right-[7.465278%]
            top-[54.5%]
            h-[5.5%]
            bg-white
          "
        />

        {/* Content area */}
        <div
          className="
            absolute bottom-0
            left-[7.465278%]
            right-[7.465278%]
            top-[60%]
            z-20

            grid grid-cols-2

            max-md:grid-cols-1
            max-md:grid-rows-[0.8fr_1.2fr]
          "
        >
          {/* Mobile horizontal divider */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-0 right-0
              top-[40%]
              z-[5]
              hidden
              bg-[#D7D7D7]

              max-md:block
            "
            style={{
              height: "0.5px",
            }}
          />

          {/* Left content column */}
          <div
            className="
              relative min-w-0
              px-[clamp(28px,2.083333vw,36px)]
              pb-[clamp(42px,3.472222vw,60px)]
              pt-[clamp(70px,5.208333vw,90px)]

              max-md:px-[20px]
              max-md:pb-[30px]
              max-md:pt-[34px]
            "
          >
            <div className="w-full">
              {/* Our Purpose label */}
              <ScrollReveal
                delay={50}
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
                  Our Purpose
                </Typography>
              </ScrollReveal>

              {/* Purpose heading */}
              <ScrollReveal
                delay={120}
                distance={16}
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
                      max-lg:whitespace-normal
                    "
                  >
                    One Vision.
                  </span>

                  <span
                    className="
                      block whitespace-nowrap
                      max-lg:whitespace-normal
                    "
                  >
                    Many Opportunities.
                  </span>
                </Typography>
              </ScrollReveal>
            </div>
          </div>

          {/* Right description column */}
          <div
            className="
              relative min-w-0
              px-[clamp(28px,2.083333vw,36px)]
              pb-[clamp(42px,3.472222vw,60px)]
              pt-[clamp(70px,5.208333vw,90px)]

              max-md:px-[20px]
              max-md:pb-[34px]
              max-md:pt-[34px]
            "
          >
            <ScrollReveal
              delay={190}
              distance={16}
              className="
                relative
                -top-[6px]
                w-full

                max-md:top-0
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
                >
                  We bring together businesses across
                  diverse industries to create a
                  balanced and future-ready ecosystem.
                </Typography>

                <Typography
                  as="p"
                  variant="sectionBodyDark"
                >
                  By combining specialized expertise
                  with strategic oversight, Prospero
                  Holding aims to strengthen every
                  business within the group while
                  creating sustainable value for
                  clients, partners, stakeholders, and
                  the communities we serve.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}