import Image from "next/image";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
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
          h-[calc(100svh_-_var(--navbar-height,108px))]
          min-h-[720px]
          max-h-[900px]
          w-full max-w-[1728px]
          overflow-hidden
          bg-[#E4E4E4]
        "
      >
        {/* Leadership grid lines */}
        <GridLines
          thickness={0.5}
          color="rgba(0,0,0,0.1)"
          zIndex={0}
          verticalLines={[
            {
              left: "7.465278%",
            },
            {
              left: "50%",
              top: 0,
              bottom: "62.240664%",
            },
            {
              right: "7.465278%",
            },
            {
              left: "38.657407%",
              top: "37.759336%",
              bottom: 0,
            },
          ]}
          horizontalLines={[
            {
              top: "37.759336%",
              left: "7.465278%",
              right: "7.465278%",
            },
          ]}
        />

        {/* Leadership label and heading */}
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
              variant="sectionLabelDark"
              className="whitespace-nowrap"
            >
              Leadership
            </Typography>
          </ScrollReveal>

          {/* Heading */}
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
                The People
              </span>

              <span
                className="
                  block whitespace-nowrap
                  max-md:whitespace-normal
                "
              >
                Behind the Vision.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Introduction */}
        <ScrollReveal
          delay={130}
          distance={10}
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
            variant="sectionBodyDark"
          >
            Experienced leadership, strategic thinking,
            and a shared commitment to building
            businesses for long-term growth.
          </Typography>
        </ScrollReveal>

        {/* Leadership image */}
        <ScrollReveal
          delay={160}
          distance={12}
          className="
            absolute bottom-0
            left-[7.465278%]
            top-[37.863071%]
            z-10
            w-[31.19213%]
          "
        >
          <div
            className="
              group relative
              h-full w-full
              overflow-hidden
            "
          >
            <Image
              src="/images/leadership.png"
              alt="Adv. Sreelal Soolapani"
              fill
              sizes="
                (max-width: 1728px) 31.2vw,
                539px
              "
              className="
                object-cover
                object-center
                transition-transform
                duration-700 ease-out

                group-hover:scale-[1.015]
              "
            />

            {/* Subtle image overlay */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-t
                from-black/[0.06]
                via-transparent
                to-transparent
              "
            />
          </div>
        </ScrollReveal>

        {/* Leadership message */}
        <ScrollReveal
          delay={210}
          distance={10}
          className="
            absolute
            left-[42.997685%]
            top-[46.887967%]
            z-10
            w-[46.585648%]
          "
        >
          <Typography
            as="p"
            variant="sectionBodyDark"
          >
            At Prospero, we believe meaningful growth
            begins with clarity – understanding where
            we are, where we want to go, and making
            every decision with purpose. Our ambition
            is to build a group that creates lasting
            value through disciplined thinking,
            trusted relationships and a broader view of
            opportunity.
          </Typography>
        </ScrollReveal>

        {/* Leader details */}
        <ScrollReveal
          delay={260}
          distance={8}
          className="
            absolute
            left-[42.997685%]
            top-[83.5%]
            z-10
          "
        >
          <Typography
            as="p"
            variant="leaderName"
            className="
              whitespace-nowrap
            "
          >
            Adv. Sreelal Soolapani
          </Typography>

          <Typography
            as="p"
            variant="caption"
            className="
              mt-[clamp(6px,0.462963vw,8px)]
              whitespace-nowrap
            "
          >
            Founder, Prospero Group
          </Typography>
        </ScrollReveal>
      </div>
    </section>
  );
}