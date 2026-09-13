"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { UIEvent } from "react";

import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import Typography from "@/ui/Typography";

type Development = {
  id: number;
  company: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

const developments: Development[] = [
  {
    id: 1,
    company: "Prospero",
    title:
      "Prospero Investment Group Enters Malayalam Cinema With Khalifa",
    image:
      "/images/blogs/prospero/prospero-02.jpg",
    imageAlt:
      "Prospero Investment Group Khalifa project",
    href:
      "/blog/prospero-investment-group-khalifa-malayalam-cinema",
  },
  {
    id: 2,
    company: "PSFX Pro",
    title:
      "PSFX Pro at Money Expo India 2026: Connecting With the Trading Community",
    image:
      "/images/blogs/psfx-pro/psfx-pro.jpg",
    imageAlt:
      "PSFX Pro at Money Expo India 2026",
    href:
      "/blog/psfx-pro-money-expo-india-2026",
  },
  {
    id: 3,
    company: "Matrix Finbiz",
    title:
      "Matrix Finbiz Expands Its Financial Services Footprint With a Microfinance Focus",
    image:
      "/images/blogs/matrix-finbiz/matrix-finbiz.jpg",
    imageAlt:
      "Matrix Finbiz financial services and microfinance",
    href:
      "/blog/matrix-finbiz-microfinance-expansion",
  },
  {
    id: 4,
    company: "NueGrid",
    title:
      "NueGrid Expands Its Technology Portfolio With NueBits CRM",
    image:
      "/images/blogs/nuegrid/nuebits-01.jpg",
    imageAlt:
      "NueGrid NueBits CRM technology platform",
    href:
      "/blog/nuegrid-nuebits-broker-sales-crm",
  },
  {
    id: 5,
    company: "Desert Castle",
    title:
      "Dubai Real Estate: Exploring the Opportunities Taking Shape",
    image:
      "/images/blogs/desert-castle/desert-castle.jpg",
    imageAlt:
      "Dubai real estate opportunities by Desert Castle",
    href:
      "/blog/dubai-real-estate-future-opportunities",
  },
  {
    id: 6,
    company: "PS Gold",
    title:
      "Understanding Gold Trading: Markets, Opportunities and Risk",
    image:
      "/images/blogs/ps-gold/ps-gold.jpg",
    imageAlt:
      "PS Gold trading markets and opportunities",
    href:
      "/blog/understanding-gold-trading-market-dynamics",
  },
  {
    id: 7,
    company: "PSFX International",
    title:
      "Beyond Borders: Turning Business Opportunities Into Market Presence",
    image:
      "/images/blogs/psfx-international/psfx-international.jpg",
    imageAlt:
      "PSFX International business facilitation services",
    href:
      "/blog/business-facilitation-services-uae",
  },
];

function DevelopmentCard({
  development,
}: {
  development: Development;
}) {
  return (
    <Link
      href={development.href}
      prefetch={false}
      aria-label={`Read ${development.title}`}
      className="
        group block
        h-full min-w-[84vw]
        shrink-0 cursor-pointer
        text-inherit no-underline

        sm:min-w-[64vw]

        lg:min-w-[calc((100%_-_40px)/3)]
        lg:max-w-[calc((100%_-_40px)/3)]
        lg:flex-none

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#E0BE3D]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
      "
    >
      <article
        className="
          flex h-full w-full
          transform-gpu flex-col
          overflow-hidden
          border border-[#D7D7D7]
          bg-[#F9F9F9]

          transition-[transform,border-color]
          duration-200 ease-out

          group-hover:-translate-y-[2px]
          group-hover:border-[#BDBDBD]

          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        <div
          className="
            relative min-h-0
            flex-1 overflow-hidden
            bg-[#929292]
          "
        >
          <Image
            src={development.image}
            alt={development.imageAlt}
            fill
            loading="lazy"
            quality={75}
            draggable={false}
            sizes="(max-width: 640px) 84vw, (max-width: 1024px) 64vw, (max-width: 1728px) 27vw, 460px"
            className="
              select-none
              object-cover object-center
              transform-gpu
              transition-transform
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:scale-[1.015]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0 z-10
              bg-gradient-to-b
              from-black/20
              via-transparent
              to-black/5
            "
          />

          <div
            className="
              absolute
              left-[clamp(14px,1.157407vw,20px)]
              top-[clamp(14px,1.157407vw,20px)]
              z-20
              bg-black/80
              px-[clamp(12px,0.925926vw,16px)]
              py-[clamp(7px,0.578704vw,10px)]
            "
          >
            <Typography
              as="span"
              variant="statLabel"
              className="
                !m-0
                block whitespace-nowrap
                !text-[clamp(12px,0.925926vw,16px)]
                !font-normal
                !leading-none
                !tracking-[-0.02em]
                !text-white
              "
            >
              {development.company}
            </Typography>
          </div>
        </div>

        <div
          className="
            flex min-h-[112px]
            shrink-0 items-center
            justify-between
            gap-[clamp(14px,1.157407vw,20px)]
            px-[clamp(18px,1.50463vw,26px)]
            py-[clamp(16px,1.273148vw,22px)]

            max-md:min-h-[120px]
          "
        >
          <Typography
            as="h3"
            variant="sectionBodyDark"
            className="
              line-clamp-2
              min-w-0 flex-1
              !m-0
              !text-[clamp(15px,1.041667vw,18px)]
              !font-normal
              !leading-[1.45]
              !tracking-[-0.018em]
              !text-black

              max-md:!text-[15px]
              max-md:!leading-[1.4]
            "
          >
            {development.title}
          </Typography>

          <span
            aria-hidden="true"
            className="
              flex
              h-[clamp(42px,2.893519vw,50px)]
              w-[clamp(42px,2.893519vw,50px)]
              shrink-0
              items-center justify-center
              rounded-full bg-black
              transition-colors
              duration-200

              group-hover:bg-[#E0BE3D]
            "
          >
            <LuArrowUpRight
              strokeWidth={2}
              className="
                block
                h-[clamp(17px,1.157407vw,20px)]
                w-[clamp(17px,1.157407vw,20px)]
                shrink-0
                origin-center
                transform-gpu text-white

                transition-[color,transform]
                duration-200

                group-hover:rotate-45
                group-hover:text-black

                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function LatestDevelopmentsSection() {
  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  const scrollFrameRef =
    useRef<number | null>(null);

  const [activePage, setActivePage] =
    useState<0 | 1>(0);

  const updateActivePage = useCallback(
    (slider: HTMLDivElement) => {
      const maximumScroll = Math.max(
        slider.scrollWidth -
          slider.clientWidth,
        0,
      );

      if (maximumScroll === 0) {
        setActivePage(0);
        return;
      }

      const nextPage =
        slider.scrollLeft / maximumScroll >=
        0.5
          ? 1
          : 0;

      setActivePage((currentPage) =>
        currentPage === nextPage
          ? currentPage
          : nextPage,
      );
    },
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      const slider = sliderRef.current;

      if (slider) {
        updateActivePage(slider);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );

      if (
        scrollFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          scrollFrameRef.current,
        );
      }
    };
  }, [updateActivePage]);

  const handleSliderScroll = (
    event: UIEvent<HTMLDivElement>,
  ) => {
    const slider = event.currentTarget;

    if (
      scrollFrameRef.current !== null
    ) {
      return;
    }

    scrollFrameRef.current =
      requestAnimationFrame(() => {
        updateActivePage(slider);
        scrollFrameRef.current = null;
      });
  };

  const scrollToPage = (
    page: 0 | 1,
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maximumScroll = Math.max(
      slider.scrollWidth -
        slider.clientWidth,
      0,
    );

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    setActivePage(page);

    slider.scrollTo({
      left:
        page === 0
          ? 0
          : maximumScroll,
      behavior: reduceMotion
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section
      id="news"
      className="
        relative w-full
        overflow-x-clip
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          h-svh min-h-[700px]
          max-h-[900px]
          w-full max-w-[1728px]
          overflow-hidden bg-white

          max-md:h-auto
          max-md:min-h-0
        "
      >
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

        <div
          className="
            absolute
            left-[9.31713%]
            right-[9.31713%]
            top-[clamp(70px,5.208333vw,90px)]
            z-10

            max-md:relative
            max-md:left-auto
            max-md:right-auto
            max-md:top-auto
            max-md:mx-[calc(7.465278%+16px)]
            max-md:pb-[44px]
            max-md:pt-[60px]
          "
        >
          <div
            className="
              flex items-center
              gap-[10px]
            "
          >
            <span
              aria-hidden="true"
              className="
                h-[15px] w-[15px]
                shrink-0 bg-[#E0BE3D]
              "
            />

            <Typography
              as="span"
              variant="sectionLabelDark"
              className="whitespace-nowrap"
            >
              Latest Developments
            </Typography>
          </div>

          <div
            className="
              mt-[clamp(24px,2.083333vw,36px)]
              max-w-[1000px]
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingDark"
              className="
                !m-0
                !leading-[1.12]
                !tracking-[-0.045em]
              "
            >
              What&apos;s Moving Prospero Forward.
            </Typography>
          </div>
        </div>

        <div
          ref={sliderRef}
          role="region"
          aria-label="Latest developments"
          tabIndex={0}
          onScroll={handleSliderScroll}
          data-hide-scrollbar
          className="
            absolute
            left-[9.31713%]
            right-[9.31713%]
            top-[31%]
            z-10

            flex h-[53%]
            gap-3
            overflow-x-auto
            overflow-y-hidden
            scroll-auto
            touch-auto

            lg:gap-5

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [-webkit-overflow-scrolling:touch]
            [&::-webkit-scrollbar]:hidden

            focus-visible:outline-none

            max-md:relative
            max-md:left-auto
            max-md:right-auto
            max-md:top-auto
            max-md:mx-[calc(7.465278%+16px)]
            max-md:h-[430px]
          "
        >
          {developments.map(
            (development) => (
              <DevelopmentCard
                key={development.id}
                development={development}
              />
            ),
          )}
        </div>

        <div
          className="
            absolute bottom-[5%]
            left-1/2 z-20
            flex -translate-x-1/2
            items-center gap-[14px]

            max-md:relative
            max-md:bottom-auto
            max-md:left-auto
            max-md:mt-[36px]
            max-md:translate-x-0
            max-md:justify-center
            max-md:pb-[54px]
          "
        >
          <button
            type="button"
            onClick={() => scrollToPage(0)}
            aria-label="Show first group"
            className="
              cursor-pointer
              border-0 bg-transparent
              p-1
            "
          >
            <span
              className={`text-xs font-medium tracking-[0.08em] ${
                activePage === 0
                  ? "text-black"
                  : "text-black/30"
              }`}
            >
              01
            </span>
          </button>

          <div
            aria-hidden="true"
            className="
              relative h-px
              w-[90px]
              overflow-hidden
              bg-black/15
            "
          >
            <span
              className={`absolute left-0 top-0 h-full w-1/2 bg-[#E0BE3D] transition-transform duration-200 ${
                activePage === 1
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
            />
          </div>

          <button
            type="button"
            onClick={() => scrollToPage(1)}
            aria-label="Show last group"
            className="
              cursor-pointer
              border-0 bg-transparent
              p-1
            "
          >
            <span
              className={`text-xs font-medium tracking-[0.08em] ${
                activePage === 1
                  ? "text-black"
                  : "text-black/30"
              }`}
            >
              02
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}