"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { MouseEvent } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import { useLenis } from "lenis/react";
import { GoArrowRight } from "react-icons/go";
import {
  LuMenu,
  LuX,
} from "react-icons/lu";

import Typography from "@/ui/Typography";

type NavigationItem = {
  label: string;
  href: string;
  sectionId?: string;
};

const PENDING_SECTION_KEY =
  "prospero-pending-section";

const navigationLinks: NavigationItem[] = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Eco System",
    href: "/#ecosystem",
    sectionId: "ecosystem",
  },
  {
    label: "Companies",
    href: "/#companies",
    sectionId: "companies",
  },
  {
    label: "News",
    href: "/#news",
    sectionId: "news",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isPastAbout, setIsPastAbout] =
    useState(false);

  const [
    isFooterVisible,
    setIsFooterVisible,
  ] = useState(false);

  const [isHoverReveal, setIsHoverReveal] =
    useState(false);

  const [
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  ] = useState(false);

  const scrollFrameRef =
    useRef<number | null>(null);

  const isHomePage = pathname === "/";

  const isAboutPage =
    pathname === "/about" ||
    pathname.startsWith("/about/");

  const isNavbarVisible =
    isMobileMenuOpen ||
    (!isFooterVisible &&
      (!isPastAbout || isHoverReveal));

  const getNavbarHeight = useCallback(
    () => {
      const rootStyles = getComputedStyle(
        document.documentElement,
      );

      const customProperty =
        rootStyles
          .getPropertyValue(
            "--navbar-height",
          )
          .trim();

      const parsedHeight =
        Number.parseFloat(customProperty);

      if (
        Number.isFinite(parsedHeight) &&
        parsedHeight > 0
      ) {
        return parsedHeight;
      }

      return 0;
    },
    [],
  );

  const jumpToSection = useCallback(
    (sectionId: string) => {
      const target =
        document.getElementById(sectionId);

      if (!target) {
        return false;
      }

      const navbarHeight =
        getNavbarHeight();

      if (lenis) {
        lenis.resize();

        lenis.scrollTo(target, {
          offset: -navbarHeight,
          immediate: true,
          force: true,
        });
      } else {
        const targetTop =
          window.scrollY +
          target.getBoundingClientRect().top -
          navbarHeight;

        window.scrollTo({
          top: Math.max(0, targetTop),
          left: 0,
          behavior: "auto",
        });
      }

      return true;
    },
    [getNavbarHeight, lenis],
  );

  /*
   * Reset temporary navbar states when
   * changing between pages.
   */
  useLayoutEffect(() => {
    setIsFooterVisible(false);
    setIsHoverReveal(false);
    setIsMobileMenuOpen(false);

    if (!isHomePage) {
      setIsPastAbout(false);
    }
  }, [isHomePage, pathname]);

  /*
   * Open a pending landing-page section after
   * navigating from About, Contact or a blog.
   */
  useLayoutEffect(() => {
    if (!isHomePage) {
      return;
    }

    const pendingSection =
      sessionStorage.getItem(
        PENDING_SECTION_KEY,
      );

    const hashSection =
      window.location.hash
        .replace(/^#/, "")
        .trim();

    const sectionId =
      pendingSection || hashSection;

    if (!sectionId) {
      return;
    }

    let cancelled = false;
    let attempts = 0;

    let retryFrame:
      | number
      | null = null;

    let correctionFrame:
      | number
      | null = null;

    let correctionTimer:
      | number
      | null = null;

    const completeNavigation = () => {
      if (cancelled) {
        return;
      }

      const sectionFound =
        jumpToSection(sectionId);

      if (!sectionFound) {
        attempts += 1;

        if (attempts < 60) {
          retryFrame =
            requestAnimationFrame(
              completeNavigation,
            );
        }

        return;
      }

      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      window.history.replaceState(
        null,
        "",
        `/#${sectionId}`,
      );

      /*
       * Correct the position after the browser
       * finishes its immediate layout pass.
       */
      correctionFrame =
        requestAnimationFrame(() => {
          if (!cancelled) {
            jumpToSection(sectionId);
          }
        });

      correctionTimer =
        window.setTimeout(() => {
          if (!cancelled) {
            jumpToSection(sectionId);
          }
        }, 160);
    };

    retryFrame =
      requestAnimationFrame(() => {
        retryFrame =
          requestAnimationFrame(
            completeNavigation,
          );
      });

    document.fonts.ready.then(() => {
      if (!cancelled) {
        jumpToSection(sectionId);
      }
    });

    return () => {
      cancelled = true;

      if (retryFrame !== null) {
        cancelAnimationFrame(retryFrame);
      }

      if (correctionFrame !== null) {
        cancelAnimationFrame(
          correctionFrame,
        );
      }

      if (correctionTimer !== null) {
        window.clearTimeout(
          correctionTimer,
        );
      }
    };
  }, [isHomePage, jumpToSection]);

  /*
   * Navbar scroll state.
   */
  const updateNavbarState =
    useCallback(() => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current =
        requestAnimationFrame(() => {
          const nextIsScrolled =
            window.scrollY > 30;

          setIsScrolled((current) =>
            current === nextIsScrolled
              ? current
              : nextIsScrolled,
          );

          /*
           * Auto-hide behaviour is only used
           * on the landing page.
           */
          if (!isHomePage) {
            setIsPastAbout(false);
            scrollFrameRef.current = null;
            return;
          }

          const aboutSection =
            document.getElementById("about");

          const nextIsPastAbout =
            aboutSection
              ? aboutSection.getBoundingClientRect()
                  .bottom <= 0
              : false;

          setIsPastAbout((current) =>
            current === nextIsPastAbout
              ? current
              : nextIsPastAbout,
          );

          scrollFrameRef.current = null;
        });
    }, [isHomePage]);

  useEffect(() => {
    updateNavbarState();

    window.addEventListener(
      "scroll",
      updateNavbarState,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      updateNavbarState,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateNavbarState,
      );

      window.removeEventListener(
        "resize",
        updateNavbarState,
      );

      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(
          scrollFrameRef.current,
        );

        scrollFrameRef.current = null;
      }
    };
  }, [updateNavbarState]);

  /*
   * Hide navbar when footer is visible.
   */
  useEffect(() => {
    const footer =
      document.getElementById("footer");

    if (!footer) {
      setIsFooterVisible(false);
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(
            entry.isIntersecting,
          );

          if (entry.isIntersecting) {
            setIsHoverReveal(false);
            setIsMobileMenuOpen(false);
          }
        },
        {
          threshold: 0.05,
        },
      );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  /*
   * Close mobile menu using Escape.
   */
  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    item: NavigationItem,
  ) => {
    setIsMobileMenuOpen(false);

    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    /*
     * About is a normal page route.
     */
    if (!item.sectionId) {
      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      return;
    }

    event.preventDefault();

    /*
     * Section already exists on the current
     * landing page.
     */
    if (isHomePage) {
      sessionStorage.removeItem(
        PENDING_SECTION_KEY,
      );

      window.history.pushState(
        null,
        "",
        `/#${item.sectionId}`,
      );

      jumpToSection(item.sectionId);

      requestAnimationFrame(() => {
        jumpToSection(item.sectionId!);
      });

      return;
    }

    /*
     * Save the requested target before changing
     * from About, Contact or blog pages.
     */
    sessionStorage.setItem(
      PENDING_SECTION_KEY,
      item.sectionId,
    );

    /*
     * scroll:true prevents the previous landing
     * page position from being restored.
     */
    router.push("/", {
      scroll: true,
    });
  };

  const revealNavbar = () => {
    if (!isFooterVisible) {
      setIsHoverReveal(true);
    }
  };

  const hideNavbarReveal = () => {
    if (
      isPastAbout &&
      !isMobileMenuOpen
    ) {
      setIsHoverReveal(false);
    }
  };

  const handleContactClick = () => {
    sessionStorage.removeItem(
      PENDING_SECTION_KEY,
    );

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop top-hover trigger */}
      <div
        aria-hidden="true"
        data-cursor-hidden
        onPointerEnter={revealNavbar}
        className="
          fixed left-0 top-0
          z-40 hidden
          h-[42px] w-full
          bg-transparent

          md:block
        "
      />

      <header
        data-cursor-hidden
        className={`
          pointer-events-none
          sticky top-0 z-50
          h-[var(--navbar-height)]
          w-full shrink-0
          transition-[transform,opacity]
          duration-300
          ease-[cubic-bezier(0.16,1,0.3,1)]

          motion-reduce:transition-none

          ${
            isNavbarVisible
              ? `
                translate-y-0
                opacity-100
              `
              : `
                -translate-y-[115%]
                opacity-0
              `
          }
        `}
      >
        <nav
          aria-label="Main navigation"
          onPointerEnter={revealNavbar}
          onPointerLeave={hideNavbarReveal}
          className={`
            navbar-load-animation
            pointer-events-auto
            absolute left-1/2 top-1/2
            flex -translate-x-1/2
            -translate-y-1/2
            items-center justify-center
            overflow-hidden
            transition-[width,height,border-radius,background-color,border-color,box-shadow]
            duration-300
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              isScrolled
                ? `
                  h-[64px]
                  w-[min(92vw,1050px)]
                  rounded-[8px]
                  border border-white/[0.15]
                  bg-black/[0.88]
                  shadow-[0_10px_28px_rgba(0,0,0,0.2)]
                  backdrop-blur-[8px]

                  max-md:h-[58px]
                  max-md:w-[calc(100%_-_24px)]
                `
                : `
                  h-full
                  w-full max-w-[1728px]
                  rounded-none
                  border border-transparent
                  bg-black
                  shadow-none
                  backdrop-blur-none

                  max-md:h-[58px]
                  max-md:w-[calc(100%_-_24px)]
                  max-md:rounded-[8px]
                  max-md:border-white/[0.15]
                  max-md:bg-black/[0.94]
                  max-md:shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                `
            }
          `}
        >
          <div
            className={`
              flex items-center
              transition-[width,height,padding]
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                isScrolled
                  ? `
                    h-full w-full
                    justify-between
                    px-[22px]

                    max-md:px-[16px]
                  `
                  : `
                    h-[min(2.893519vw,50px)]
                    w-[min(83.622685vw,1445px)]
                    justify-between px-0

                    max-md:h-full
                    max-md:w-full
                    max-md:px-[16px]
                  `
              }
            `}
          >
            {/* Logo */}
            <Link
              href="/#home"
              scroll={false}
              onClick={(event) => {
                handleNavigation(event, {
                  label: "Home",
                  href: "/#home",
                  sectionId: "home",
                });
              }}
              aria-label="Prospero Holding home"
              className={`
                relative block shrink-0
                overflow-visible
                transition-opacity
                duration-200
                hover:opacity-75

                focus-visible:outline-none
                focus-visible:ring-1
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-4
                focus-visible:ring-offset-black

                ${
                  isScrolled
                    ? `
                      h-[27px] w-[132px]

                      max-md:h-[24px]
                      max-md:w-[116px]
                    `
                    : `
                      h-[min(2.115503vw,36.56px)]
                      w-[min(10.358796vw,179px)]

                      max-md:h-[24px]
                      max-md:w-[116px]
                    `
                }
              `}
            >
              <Image
                src="/images/company-logos/prospero-holding.svg"
                alt="Prospero Holding"
                width={179}
                height={37}
                priority
                className={`
                  absolute left-0 top-1/2
                  shrink-0 origin-left
                  -translate-y-1/2
                  scale-[2.35]
                  object-contain object-left
                  transition-[width,height,transform]
                  duration-300
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isScrolled
                      ? `
                        h-[27px] w-[132px]

                        max-md:h-[24px]
                        max-md:w-[116px]
                      `
                      : `
                        h-[min(2.115503vw,36.56px)]
                        w-[min(10.358796vw,179px)]

                        max-md:h-[24px]
                        max-md:w-[116px]
                      `
                  }
                `}
              />
            </Link>

            {/* Desktop links */}
            <div
              className={`
                hidden shrink-0
                items-center whitespace-nowrap
                transition-[gap]
                duration-300
                ease-out

                md:flex

                ${
                  isScrolled
                    ? `
                      gap-[clamp(14px,1.157407vw,20px)]
                    `
                    : `
                      gap-[min(1.273148vw,22px)]
                    `
                }
              `}
            >
              {navigationLinks.map(
                (item) => {
                  const isActive =
                    item.label === "About" &&
                    isAboutPage;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      scroll={!item.sectionId}
                      onClick={(event) => {
                        handleNavigation(
                          event,
                          item,
                        );
                      }}
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      className="
                        group relative z-10
                        inline-flex cursor-pointer
                        items-center justify-center
                        px-[4px] py-[8px]

                        focus-visible:outline-none
                      "
                    >
                      <Typography
                        as="span"
                        variant="navLink"
                        className={`
                          pointer-events-none
                          block
                          transition-colors
                          duration-200 ease-out

                          group-hover:!text-[#E0BE3D]
                          group-focus-visible:!text-[#E0BE3D]

                          ${
                            isScrolled
                              ? `
                                !text-[15px]
                                !font-medium
                                !text-white/90
                              `
                              : `
                                !font-normal
                                !text-white
                              `
                          }
                        `}
                      >
                        {item.label}
                      </Typography>

                      <span
                        aria-hidden="true"
                        className={`
                          pointer-events-none
                          absolute bottom-[3px]
                          left-[4px] right-[4px]
                          h-px origin-left
                          bg-[#E0BE3D]
                          transition-transform
                          duration-300
                          ease-[cubic-bezier(0.22,1,0.36,1)]

                          group-hover:scale-x-100
                          group-focus-visible:scale-x-100

                          ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0"
                          }
                        `}
                      />
                    </Link>
                  );
                },
              )}
            </div>

            {/* Desktop contact */}
            <Link
              href="/contact"
              scroll
              onClick={handleContactClick}
              aria-label="Go to contact page"
              className={`
                group relative isolate
                hidden shrink-0
                items-center justify-center
                bg-white text-black
                transition-[width,height,gap,border-radius,transform,box-shadow]
                duration-300
                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:-translate-y-px
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-black

                md:inline-flex

                ${
                  isScrolled
                    ? `
                      h-[40px]
                      w-[134px]
                      translate-x-[7px]
                      gap-[8px]
                      rounded-[4px]
                    `
                    : `
                      h-[min(2.893519vw,50px)]
                      w-[min(10.185185vw,176px)]
                      translate-x-0
                      gap-[min(0.578704vw,10px)]
                      rounded-none
                    `
                }
              `}
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0 -z-10
                  origin-left scale-x-0
                  bg-[#E0BE3D]
                  transition-transform
                  duration-300
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-x-100
                  group-focus-visible:scale-x-100
                "
              />

              <Typography
                as="span"
                variant="buttonDark"
                className={`
                  pointer-events-none
                  relative z-10
                  whitespace-nowrap
                  !text-black

                  ${
                    isScrolled
                      ? `
                        !text-[15px]
                        !font-medium
                      `
                      : ""
                  }
                `}
              >
                Contact
              </Typography>

              <GoArrowRight
                aria-hidden="true"
                strokeWidth={0.8}
                className={`
                  pointer-events-none
                  relative z-10
                  shrink-0 text-black
                  transition-transform
                  duration-300 ease-out

                  group-hover:translate-x-[3px]

                  ${
                    isScrolled
                      ? `
                        h-[18px] w-[18px]
                      `
                      : `
                        h-[min(1.388889vw,24px)]
                        w-[min(1.388889vw,24px)]
                      `
                  }
                `}
              />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setIsMobileMenuOpen(
                  (current) => !current,
                );
              }}
              className="
                flex h-[40px] w-[40px]
                cursor-pointer
                items-center justify-center
                border border-white/20
                bg-transparent text-white

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]

                md:hidden
              "
            >
              {isMobileMenuOpen ? (
                <LuX
                  aria-hidden="true"
                  className="h-[22px] w-[22px]"
                />
              ) : (
                <LuMenu
                  aria-hidden="true"
                  className="h-[22px] w-[22px]"
                />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          id="mobile-navigation"
          className={`
            pointer-events-auto
            absolute
            left-1/2
            top-[calc(50%_+_37px)]
            w-[calc(100%_-_24px)]
            -translate-x-1/2
            overflow-hidden
            rounded-[8px]
            border border-white/[0.14]
            bg-black/[0.96]
            shadow-[0_16px_38px_rgba(0,0,0,0.24)]
            backdrop-blur-[10px]
            transition-[opacity,transform,visibility]
            duration-200 ease-out

            md:hidden

            ${
              isMobileMenuOpen
                ? `
                  visible
                  translate-y-0
                  opacity-100
                `
                : `
                  invisible
                  -translate-y-[8px]
                  opacity-0
                `
            }
          `}
        >
          <div className="flex flex-col p-[10px]">
            {navigationLinks.map(
              (item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  scroll={!item.sectionId}
                  onClick={(event) => {
                    handleNavigation(
                      event,
                      item,
                    );
                  }}
                  className="
                    flex min-h-[48px]
                    items-center
                    border-b border-white/10
                    px-[14px]
                    text-white

                    last:border-b-0
                    hover:bg-white/[0.06]
                    focus-visible:outline-none
                    focus-visible:bg-white/[0.06]
                  "
                >
                  <Typography
                    as="span"
                    variant="navLink"
                    className="
                      !text-[15px]
                      !font-medium
                      !text-white
                    "
                  >
                    {item.label}
                  </Typography>
                </Link>
              ),
            )}

            <Link
              href="/contact"
              onClick={handleContactClick}
              className="
                mt-[10px]
                flex min-h-[48px]
                items-center justify-between
                bg-[#E0BE3D]
                px-[14px]
                text-black

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-white
              "
            >
              <Typography
                as="span"
                variant="buttonDark"
                className="
                  !text-[15px]
                  !font-medium
                  !text-black
                "
              >
                Contact
              </Typography>

              <GoArrowRight
                aria-hidden="true"
                className="
                  h-[20px] w-[20px]
                  text-black
                "
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}