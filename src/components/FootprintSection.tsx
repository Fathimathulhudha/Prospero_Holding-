"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type Statistic = {
  value: number;
  suffix: string;
  label: string;
  left: string;
  duration: number;
};

const statistics: Statistic[] = [
  {
    value: 7,
    suffix: "+",
    label: "Industries",
    left: "9.31713%",
    duration: 1000,
  },
  {
    value: 200,
    suffix: "+",
    label: "Professionals",
    left: "31.59604%",
    duration: 1400,
  },
  {
    value: 35,
    suffix: "+",
    label: "Offices",
    left: "56.53641%",
    duration: 1200,
  },
  {
    value: 5000,
    suffix: "+",
    label: "Employees",
    left: "79.4011%",
    duration: 1800,
  },
];

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
};

function CountUp({
  end,
  suffix = "",
  duration = 1400,
  delay = 0,
}: CountUpProps) {
  const counterRef =
    useRef<HTMLSpanElement | null>(null);

  const animationFrameRef =
    useRef<number | null>(null);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null,
    );

  const hasAnimatedRef = useRef(false);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = counterRef.current;

    if (!counter) {
      return;
    }

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    const startAnimation = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;

      if (prefersReducedMotion) {
        setCount(end);
        return;
      }

      timeoutRef.current = setTimeout(() => {
        const startTime = performance.now();

        const updateCount = (
          currentTime: number,
        ) => {
          const elapsed =
            currentTime - startTime;

          const progress = Math.min(
            elapsed / duration,
            1,
          );

          const easedProgress =
            1 - Math.pow(1 - progress, 4);

          setCount(
            Math.round(end * easedProgress),
          );

          if (progress < 1) {
            animationFrameRef.current =
              requestAnimationFrame(
                updateCount,
              );
          } else {
            setCount(end);
            animationFrameRef.current =
              null;
          }
        };

        animationFrameRef.current =
          requestAnimationFrame(updateCount);
      }, delay);
    };

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        {
          threshold: 0.35,
          rootMargin:
            "0px 0px -5% 0px",
        },
      );

    observer.observe(counter);

    return () => {
      observer.disconnect();

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );

        animationFrameRef.current = null;
      }
    };
  }, [delay, duration, end]);

  return (
    <span
      ref={counterRef}
      className="tabular-nums"
      aria-label={`${end}${suffix}`}
    >
      <span aria-hidden="true">
        {count}
        {suffix}
      </span>
    </span>
  );
}

export default function FootprintSection() {
  return (
    <section
      id="footprint"
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

          max-md:min-h-[700px]
          max-md:max-h-none
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
            },
            {
              left: "50%",
            },
            {
              right: "7.465278%",
            },
          ]}
        />

        {/* Top horizontal grid line */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-[7.465278%]
            right-[7.465278%]
            top-0 z-[5]
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
            left-[7.465278%]
            right-[7.465278%]
            z-[5]
            bg-[#D7D7D7]
          "
          style={{
            height: "0.5px",
          }}
        />

        {/* Our Footprint label */}
        <ScrollReveal
          delay={100}
          distance={12}
          className="
            absolute
            left-[9.31713%]
            top-[14%]
            z-10
            flex items-center
            gap-[10px]

            max-md:left-[calc(7%+20px)]
            max-md:top-[8%]
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
            Our Footprint
          </Typography>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal
          delay={170}
          distance={18}
          className="
            absolute
            left-[9.31713%]
            top-[24%]
            z-10
            w-[40%]

            max-lg:w-[48%]

            max-md:left-[calc(7%+20px)]
            max-md:right-[calc(7%+20px)]
            max-md:top-[16%]
            max-md:w-auto
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
              Built Across Markets.
            </span>

            <span
              className="
                block whitespace-nowrap
                max-md:whitespace-normal
              "
            >
              Connected by Purpose.
            </span>
          </Typography>
        </ScrollReveal>

        {/* Desktop statistics */}
        <div
          className="
            absolute inset-0
            z-10

            max-md:hidden
          "
        >
          {statistics.map(
            (item, index) => (
              <div
                key={item.label}
                className="
                  absolute top-[56%]
                  h-[100px]
                "
                style={{
                  left: item.left,
                }}
              >
                <ScrollReveal
                  delay={
                    250 + index * 90
                  }
                  distance={16}
                  className="
                    relative
                    h-full
                  "
                >
                  {/* Yellow vertical line */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute left-0 top-0
                      h-[100px] w-[2px]
                      bg-[#E0BE3D]
                    "
                  />

                  {/* Number */}
                  <Typography
                    as="p"
                    variant="statValue"
                    className="
                      absolute
                      left-[28px]
                      top-[5px]
                      !m-0
                      !leading-none
                      whitespace-nowrap
                      tabular-nums
                    "
                  >
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      duration={item.duration}
                      delay={index * 100}
                    />
                  </Typography>

                  {/* Statistic label */}
                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      absolute
                      left-[28px]
                      top-[64px]
                      !m-0
                      !leading-none
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </Typography>
                </ScrollReveal>
              </div>
            ),
          )}
        </div>

        {/* Mobile statistics */}
        <div
          className="
            absolute
            left-[calc(7%+20px)]
            right-[calc(7%+20px)]
            top-[43%]
            z-10

            hidden grid-cols-2
            gap-x-[24px]
            gap-y-[42px]

            max-md:grid
          "
        >
          {statistics.map(
            (item, index) => (
              <ScrollReveal
                key={item.label}
                delay={
                  250 + index * 90
                }
                distance={16}
                className="min-w-0"
              >
                <div
                  className="
                    relative
                    h-[105px]
                    border-l-2
                    border-[#E0BE3D]
                    pl-[18px]
                  "
                >
                  <Typography
                    as="p"
                    variant="statValue"
                    className="
                      absolute left-[18px]
                      top-[5px]
                      !m-0
                      !leading-none
                      whitespace-nowrap
                      tabular-nums
                    "
                  >
                    <CountUp
                      end={item.value}
                      suffix={item.suffix}
                      duration={item.duration}
                      delay={index * 100}
                    />
                  </Typography>

                  <Typography
                    as="p"
                    variant="statLabel"
                    className="
                      absolute left-[18px]
                      top-[66px]
                      !m-0
                      !leading-none
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </Typography>
                </div>
              </ScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}