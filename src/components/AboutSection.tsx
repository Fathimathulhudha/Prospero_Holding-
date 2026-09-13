import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type AboutSectionProps = {
  showDiscoverButton?: boolean;
};

export default function AboutSection({
  showDiscoverButton = true,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          min-h-[500px]
          max-h-[600px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:!h-auto
          max-md:!min-h-0
          max-md:max-h-none
          max-md:pb-[40px]
        "
        style={{
          height: `
            calc(
              (
                100svh -
                var(--navbar-height, 108px)
              ) / 2 + clamp(
                100px,
                6.944444vw,
                120px
              )
            )
          `,
        }}
      >
        {/* Vertical grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={1}
          verticalLines={[
            {
              left: "7.465278%",
              className: "!left-5 md:!left-[7.465278%]",
            },
            {
              left: "50%",
              hideOnMobile: true,
            },
            {
              right: "7.465278%",
              className: "!right-5 md:!right-[7.465278%]",
            },
          ]}
        />

        {/* Top section boundary line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-5 right-5
            md:left-[7.465278%]
            md:right-[7.465278%]
            top-0
            z-[5]
            bg-[#D7D7D7]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Top content grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-5 right-5
            md:left-[7.465278%]
            md:right-[7.465278%]
            top-[18%]
            z-[5]
            bg-[#D7D7D7]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Bottom horizontal grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0
            left-5 right-5
            md:left-[7.465278%]
            md:right-[7.465278%]
            z-[5]
            bg-[#D7D7D7]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Content area */}
        <div
          className="
            md:absolute md:bottom-0
            md:left-[7.465278%]
            md:right-[7.465278%]
            md:top-[18%]
            z-10

            md:grid md:grid-cols-2

            max-md:relative
            max-md:mx-5
            max-md:mt-[40px]
            max-md:flex
            max-md:flex-col
          "
        >
          {/* Mobile horizontal divider */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              my-[24px]
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
              max-md:pb-[10px]
              max-md:pt-[10px]
            "
          >
            <div className="w-full">
              {/* Who We Are label */}
              <ScrollReveal
                delay={50}
                distance={12}
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
                  Who We Are
                </Typography>
              </ScrollReveal>

              {/* Main heading */}
              <ScrollReveal
                delay={120}
                distance={18}
                className="
                  mt-[clamp(24px,2.083333vw,36px)]
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
                    The Power Behind
                  </span>

                  <span
                    className="
                      block whitespace-nowrap
                      max-lg:whitespace-normal
                    "
                  >
                    Diversified Excellence.
                  </span>
                </Typography>
              </ScrollReveal>

              {/* Discover button */}
              {showDiscoverButton && (
                <ScrollReveal
                  delay={280}
                  distance={14}
                  className="
                    mt-[clamp(40px,3.125vw,54px)]
                  "
                >
                  <Link
                    href="/about"
                    aria-label="Discover Prospero"
                    className="
                      group relative isolate
                      inline-flex min-h-[42px]
                      items-center justify-center
                      gap-[10px]
                      overflow-hidden
                      border border-black
                      bg-white
                      px-[16px] py-[10px]
                      text-black
                      transition-[transform,box-shadow]
                      duration-300 ease-out

                      hover:-translate-y-px
                      hover:shadow-[0_8px_22px_rgba(0,0,0,0.14)]

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#E0BE3D]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-white
                    "
                  >
                    {/* Animated button background */}
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute inset-0
                        z-0
                        origin-left
                        scale-x-0
                        bg-black
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]

                        group-hover:scale-x-100
                        group-focus-visible:scale-x-100
                      "
                    />

                    <Typography
                      as="span"
                      variant="buttonDark"
                      className="
                        relative z-10
                        whitespace-nowrap
                        transition-colors
                        duration-500 ease-out

                        group-hover:!text-white
                        group-focus-visible:!text-white
                      "
                    >
                      Discover Prospero
                    </Typography>

                    <GoArrowRight
                      aria-hidden="true"
                      strokeWidth={0.8}
                      className="
                        relative z-10
                        h-[20px] w-[20px]
                        shrink-0
                        text-black
                        transition-[color,transform]
                        duration-500 ease-out

                        group-hover:translate-x-[3px]
                        group-hover:text-white
                        group-focus-visible:translate-x-[3px]
                        group-focus-visible:text-white
                      "
                    />
                  </Link>
                </ScrollReveal>
              )}
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
              delay={200}
              distance={18}
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
                  Prospero Holding is a multi-sector
                  investment and management company
                  driving innovation, value creation,
                  and long-term growth.
                </Typography>

                <Typography
                  as="p"
                  variant="sectionBodyDark"
                >
                  As the strategic parent organization
                  to a diverse portfolio of businesses,
                  we provide direction, financial
                  expertise, and operational support –
                  enabling each venture to grow with
                  purpose and perform in its market.
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}