"use client";

import { GoArrowRight } from "react-icons/go";
import {
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import GridLines from "@/ui/GridLines";
import ScrollReveal from "@/ui/ScrollReveal";
import Typography from "@/ui/Typography";

type ContactSectionProps = {
  showContactDetails?: boolean;
};

const formFieldTypography = `
  font-[family-name:var(--font-geist-sans)]
  text-[clamp(14px,1.273148vw,22px)]
  font-normal
  leading-[1.3]
  tracking-[-0.02em]
`;

const formFieldAppearance = `
  border border-[#D7D7D7]
  bg-[#F9F9F9]
  text-black
  outline-none
  placeholder:text-[#676767]
  placeholder:opacity-100
  transition-[border-color,background-color,box-shadow]
  duration-300 ease-out
  hover:bg-white
  focus:border-black/40
  focus:bg-white
  focus:shadow-[0_0_0_3px_rgba(224,190,61,0.12)]
`;

export default function ContactSection({
  showContactDetails = false,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="
        relative w-full
        overflow-hidden
        bg-white text-black
      "
    >
      <div
        className="
          relative mx-auto
          aspect-[1728/744]
          w-full max-w-[1728px]
          overflow-hidden
          bg-white

          max-md:aspect-auto
          max-md:!h-auto
          max-md:!min-h-0
          max-md:pb-[60px]
          max-md:flex
          max-md:flex-col
        "
      >
        {/* Contact grid lines */}
        <GridLines
          thickness={0.5}
          color="#D7D7D7"
          zIndex={0}
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
          horizontalLines={[
            {
              top: 0,
              left: "7.465278%",
              right: "7.465278%",
              className: "!left-5 !right-5 md:!left-[7.465278%] md:!right-[7.465278%]",
            },
            {
              bottom: 0,
              left: "7.465278%",
              right: "7.465278%",
              className: "!left-5 !right-5 md:!left-[7.465278%] md:!right-[7.465278%]",
            },
          ]}
        />

        {/* Contact label and heading */}
        <div
          className="
            md:absolute
            md:left-[9.31713%]
            md:top-[clamp(70px,5.208333vw,90px)]
            z-10
            md:w-[38%]

            max-md:static
            max-md:mt-[50px]
            max-md:mx-5
            max-md:w-auto
          "
        >
          {/* Contact label */}
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
              Contact
            </Typography>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal
            delay={80}
            distance={10}
            className="
              mt-[clamp(24px,2.083333vw,36px)]
            "
          >
            <Typography
              as="h2"
              variant="sectionHeadingDark"
            >
              <span className="block">
                Let&apos;s Start
              </span>

              <span className="block">
                a Conversation.
              </span>
            </Typography>
          </ScrollReveal>
        </div>

        {/* Description */}
        <ScrollReveal
          delay={130}
          distance={10}
          className="
            md:absolute
            md:left-[9.31713%]
            md:top-[41.397849%]
            z-10
            md:w-[31.30787%]

            max-md:static
            max-md:mt-[20px]
            max-md:mx-5
            max-md:w-auto
          "
        >
          <Typography
            as="p"
            variant="sectionBodyDark"
          >
            Have a business opportunity, partnership
            proposal, or investment idea?
            <br />
            Tell us what you&apos;re building. Our team
            will be in touch.
          </Typography>
        </ScrollReveal>

        {/* Contact-page-only details */}
        {showContactDetails && (
          <ScrollReveal
            delay={180}
            distance={10}
            className="
              md:absolute
              md:left-[9.31713%]
              md:top-[64%]
              z-10
              md:w-[36%]

              max-md:static
              max-md:mt-[24px]
              max-md:mx-5
              max-md:w-auto
            "
          >
            <address
              className="
                flex flex-col
                gap-[clamp(14px,1.041667vw,18px)]
                not-italic
              "
            >
              {/* Email */}
              <a
                href="mailto:info@prospero.ae"
                aria-label="Email Prospero Holding"
                className="
                  group flex items-start
                  gap-[clamp(10px,0.694444vw,12px)]

                  focus-visible:outline-none
                "
              >
                <LuMail
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    mt-[clamp(3px,0.289352vw,5px)]
                    h-[clamp(17px,1.157407vw,20px)]
                    w-[clamp(17px,1.157407vw,20px)]
                    shrink-0
                    text-[#676767]
                    transition-colors
                    duration-300

                    group-hover:text-[#E0BE3D]
                  "
                />

                <Typography
                  as="span"
                  variant="sectionBodyDark"
                  className="
                    !text-[clamp(15px,1.041667vw,18px)]
                    !leading-[1.35]
                    transition-colors
                    duration-300

                    group-hover:!text-black
                    group-focus-visible:!text-black
                  "
                >
                  info@prospero.ae
                </Typography>
              </a>

              {/* Phone */}
              <a
                href="tel:+97145689506"
                aria-label="Call Prospero Holding"
                className="
                  group flex items-start
                  gap-[clamp(10px,0.694444vw,12px)]

                  focus-visible:outline-none
                "
              >
                <LuPhone
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    mt-[clamp(3px,0.289352vw,5px)]
                    h-[clamp(17px,1.157407vw,20px)]
                    w-[clamp(17px,1.157407vw,20px)]
                    shrink-0
                    text-[#676767]
                    transition-colors
                    duration-300

                    group-hover:text-[#E0BE3D]
                  "
                />

                <Typography
                  as="span"
                  variant="sectionBodyDark"
                  className="
                    !text-[clamp(15px,1.041667vw,18px)]
                    !leading-[1.35]
                    transition-colors
                    duration-300

                    group-hover:!text-black
                    group-focus-visible:!text-black
                  "
                >
                  +971 4 568 9506
                </Typography>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tower+Plaza+Hotel+and+Office+Tower+Suite+2003+20th+Floor+Sheikh+Zayed+Road+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Prospero Holding address in Google Maps"
                className="
                  group flex items-start
                  gap-[clamp(10px,0.694444vw,12px)]

                  focus-visible:outline-none
                "
              >
                <LuMapPin
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="
                    mt-[clamp(3px,0.289352vw,5px)]
                    h-[clamp(17px,1.157407vw,20px)]
                    w-[clamp(17px,1.157407vw,20px)]
                    shrink-0
                    text-[#676767]
                    transition-colors
                    duration-300

                    group-hover:text-[#E0BE3D]
                  "
                />

                <Typography
                  as="span"
                  variant="sectionBodyDark"
                  className="
                    !text-[clamp(15px,1.041667vw,18px)]
                    !leading-[1.35]
                    transition-colors
                    duration-300

                    group-hover:!text-black
                    group-focus-visible:!text-black
                  "
                >
                  Tower Plaza Hotel &amp; Office Tower,
                  Suite No: 2003, 20th Floor, Sheikh
                  Zayed Road, Dubai.
                </Typography>
              </a>
            </address>
          </ScrollReveal>
        )}

        {/* Contact form */}
        <form
          className="
            contents
            md:contents
            max-md:static
            max-md:mt-[36px]
            max-md:mx-5
            max-md:flex
            max-md:flex-col
            max-md:gap-[16px]
          "
        >
          {/* Full name */}
          <ScrollReveal
            delay={70}
            distance={10}
            className="
              md:absolute
              md:left-[52.777778%]
              md:top-[9.811828%]
              z-10
              md:h-[11.693548%]
              md:w-[36.979167%]

              max-md:static
              max-md:h-[64px]
              max-md:w-full
            "
          >
            <input
              type="text"
              name="fullName"
              aria-label="Full name"
              placeholder="Full Name"
              autoComplete="name"
              required
              className={`
                h-full w-full
                px-[clamp(18px,2.083333vw,36px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal
            delay={110}
            distance={10}
            className="
              md:absolute
              md:left-[52.777778%]
              md:top-[23.252688%]
              z-10
              md:h-[11.693548%]
              md:w-[36.979167%]

              max-md:static
              max-md:h-[64px]
              max-md:w-full
            "
          >
            <input
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email Address"
              autoComplete="email"
              required
              className={`
                h-full w-full
                px-[clamp(18px,2.083333vw,36px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Message */}
          <ScrollReveal
            delay={150}
            distance={10}
            className="
              md:absolute
              md:left-[52.777778%]
              md:top-[36.693548%]
              z-10
              md:h-[36.827957%]
              md:w-[36.979167%]

              max-md:static
              max-md:h-[190px]
              max-md:w-full
            "
          >
            <textarea
              name="message"
              aria-label="Enquiry message"
              placeholder="Tell us more about your enquiry..."
              required
              className={`
                h-full w-full
                resize-none
                px-[clamp(18px,2.083333vw,36px)]
                pt-[clamp(16px,1.678241vw,29px)]
                ${formFieldTypography}
                ${formFieldAppearance}
              `}
            />
          </ScrollReveal>

          {/* Submit button */}
          <ScrollReveal
            delay={190}
            distance={8}
            className="
              md:absolute
              md:left-[52.777778%]
              md:top-[77.688172%]
              z-10

              max-md:static
              max-md:mt-[8px]
            "
          >
            <button
              type="submit"
              className="
                group relative isolate
                inline-flex
                h-[clamp(42px,2.893519vw,50px)]
                items-center justify-center
                gap-[clamp(8px,0.578704vw,10px)]
                overflow-hidden
                border border-black
                bg-white
                px-[clamp(15px,0.983796vw,17px)]
                text-black
                transition-[transform,box-shadow]
                duration-300 ease-out

                hover:-translate-y-px
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#E0BE3D]
                focus-visible:ring-offset-2
              "
            >
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
                Submit Enquiry
              </Typography>

              <GoArrowRight
                aria-hidden="true"
                className="
                  relative z-10
                  h-[clamp(17px,1.388889vw,24px)]
                  w-[clamp(17px,1.388889vw,24px)]
                  shrink-0
                  text-black
                  transition-[color,transform]
                  duration-500 ease-out

                  group-hover:translate-x-[3px]
                  group-hover:text-white
                  group-focus-visible:text-white
                "
              />
            </button>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}