"use client";

import {
  useEffect,
  useRef,
} from "react";

import Typography from "@/ui/Typography";
import GridLines from "@/ui/GridLines";

export default function Hero() {
  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const playVideo = () => {
      void video.play().catch((error) => {
        console.warn(
          "Hero video autoplay failed:",
          error,
        );
      });
    };

    /*
     * Attempt playback immediately when
     * the Hero component is mounted.
     */
    playVideo();

    video.addEventListener(
      "loadeddata",
      playVideo,
    );

    video.addEventListener(
      "canplay",
      playVideo,
    );

    const handleVisibilityChange = () => {
      if (
        document.visibilityState ===
        "visible"
      ) {
        playVideo();
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      video.removeEventListener(
        "loadeddata",
        playVideo,
      );

      video.removeEventListener(
        "canplay",
        playVideo,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative w-full shrink-0
        overflow-hidden bg-black
      "
      style={{
        height:
          "calc(100svh - var(--navbar-height, 122px))",
      }}
    >
      <div
        className="
          relative h-full w-full
          overflow-hidden bg-black
        "
      >
        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          aria-hidden="true"
          onLoadedMetadata={(event) => {
            event.currentTarget.muted = true;

            void event.currentTarget
              .play()
              .catch(() => {});
          }}
          onError={(event) => {
            console.error(
              "Hero video failed to load:",
              event.currentTarget.error,
            );
          }}
          className="
            absolute inset-0
            h-full w-full
            object-cover object-center
          "
        >
          <source
            src="/video/prospero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="
            hero-overlay-animation
            pointer-events-none
            absolute bottom-0 left-0
            z-[1] h-[112.261307%]
            w-full
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 22.83%, #000000 96.18%)",
          }}
        />

        {/* Grid lines */}
        <div
          aria-hidden="true"
          className="
            hero-grid-animation
            pointer-events-none
            absolute inset-0 z-10
          "
        >
          <GridLines
            thickness={0.5}
            color="rgba(255, 255, 255, 0.4)"
            zIndex={10}
            verticalLines={[
              {
                left: "7.465278%",
              },
              {
                right: "7.465278%",
              },
            ]}
          />
        </div>

        {/* Desktop heading */}
        <Typography
          as="h1"
          variant="heroHeading"
          className="
            hero-heading-animation
            absolute left-[9.31713%]
            top-[70.854271%] z-20
            hidden w-[45.196759%]
            md:block
          "
        >
          <span className="block whitespace-nowrap">
            Building Businesses.
          </span>

          <span className="block whitespace-nowrap">
            Creating Lasting Value.
          </span>
        </Typography>

        {/* Desktop description */}
        <Typography
          as="p"
          variant="heroDescription"
          className="
            hero-description-animation
            absolute left-[58.912037%]
            top-[75.477387%] z-20
            hidden w-[33.622685%]
            md:block
          "
        >
          <span className="block whitespace-nowrap">
            A diversified holding group investing in
          </span>

          <span className="block whitespace-nowrap">
            ideas, building businesses, and creating
          </span>

          <span className="block whitespace-nowrap">
            sustainable value across industries.
          </span>
        </Typography>

        {/* Mobile content */}
        <div
          className="
            absolute bottom-[8%]
            left-[8%] right-[8%]
            z-20 flex flex-col
            gap-5 md:hidden
          "
        >
          <Typography
            as="h1"
            variant="heroHeading"
            className="
              hero-heading-animation
              !text-[clamp(30px,8vw,42px)]
              !leading-[1.08]
            "
          >
            <span className="block">
              Building Businesses.
            </span>

            <span className="block">
              Creating Lasting Value.
            </span>
          </Typography>

          <Typography
            as="p"
            variant="heroDescription"
            className="
              hero-description-animation
              max-w-[420px]
              !text-[15px]
              !leading-[1.35]
            "
          >
            A diversified holding group investing in
            ideas, building businesses, and creating
            sustainable value across industries.
          </Typography>
        </div>
      </div>
    </section>
  );
}