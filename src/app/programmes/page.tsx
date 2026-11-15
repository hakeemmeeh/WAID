import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Our Programmes | Women Action for Inclusive Development",
  description:
    "Explore WAID's planned focus areas in education, child protection, and women and youth empowerment.",
  pathname: "/programmes",
  image: "/images/programmes/hero.jpg",
});

const programmes = [
  {
    number: "01",
    title: "Education",
    description:
      "We believe education is essential for building stronger communities. WAID aims to promote access to inclusive learning opportunities and support children and young people in overcoming barriers to education.",
    focusAreas: [
      "Access to education",
      "Inclusive learning opportunities",
      "Educational support and awareness",
      "Community engagement in education",
    ],
    image: "/images/community-illustrations/shela-school.jpg",
    imageAlt:
      "Female students taking part in a classroom activity at Shela Primary School in Lamu County, Kenya",
    imageCredit: {
      author: "Queen Asali",
      source:
        "https://commons.wikimedia.org/wiki/File:Female_students_at_Shela_Primary_School_-_Lamu_County,_Kenya.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    href: "/programmes/education",
    cta: "Explore Education Programme",
    accent: "green",
  },
  {
    number: "02",
    title: "Child Protection",
    description:
      "Every child deserves to grow up in a safe, supportive, and protective environment. WAID seeks to promote child protection awareness, strengthen community responsibility, and support the wellbeing and rights of children.",
    focusAreas: [
      "Child protection awareness",
      "Children's rights and wellbeing",
      "Community-based protection",
      "Safe and supportive environments",
    ],
    image: "/images/programmes/child-protection.jpg",
    imageAlt: "A teacher supporting students in a welcoming classroom",
    imageCredit: null,
    href: "/programmes/child-protection",
    cta: "Explore Child Protection",
    accent: "magenta",
  },
  {
    number: "03",
    title: "Women and Youth Empowerment",
    description:
      "Women and young people play an important role in community development. WAID seeks to strengthen their opportunities through skills development, participation, leadership, and economic empowerment.",
    focusAreas: [
      "Skills development",
      "Women's economic empowerment",
      "Youth participation and leadership",
      "Entrepreneurship and livelihood awareness",
    ],
    image: "/images/programmes/empowerment.jpg",
    imageAlt: "African women learning practical bicycle repair skills together",
    imageCredit: null,
    href: "/programmes/empowerment",
    cta: "Explore Empowerment Programme",
    accent: "gold",
  },
] as const;

const approachAreas = [
  "Community participation and consultation",
  "Collaboration with relevant stakeholders",
  "Inclusive and locally informed approaches",
  "Monitoring, learning, and accountability",
];

export default function ProgrammesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/programmes" />

      <section className="relative overflow-hidden bg-[#fffdf9]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#238343]/[0.07] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
              <span className="h-px w-8 bg-[#EBAA22]" />
              Our Programmes
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
              Creating Opportunities.
              <span className="mt-2 block text-[#B52185]">
                Protecting Futures.
              </span>
              <span className="mt-2 block">Empowering Communities.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
              WAID focuses on practical, community-centred programmes that
              promote education, protect children, and empower women and young
              people to build better futures.
            </p>
            <Link
              href="#focus"
              className="mt-9 inline-flex rounded-full bg-[#48145F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#48145f]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#B52185] hover:shadow-xl"
            >
              Explore Our Focus Areas
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
            <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
              <Image
                src="/images/programmes/hero.jpg"
                alt="Women gathered outdoors for a community discussion"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="relative z-10 ml-auto mt-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#48145F] shadow-md sm:text-sm">
              Illustrative community photography
            </p>
          </div>
        </div>
      </section>

      <section
        id="focus"
        className="scroll-mt-32 px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Our purpose
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
            Our Areas of Focus
          </h2>
          <p className="mt-5 text-base leading-8 text-[#51465a]">
            Our work is centred on three interconnected areas that address
            important community needs and contribute to inclusive and
            sustainable development.
          </p>
        </div>
      </section>

      <div className="space-y-5 pb-20 sm:space-y-8 sm:pb-24">
        {programmes.map((programme, index) => (
          <section
            key={programme.number}
            className={
              index % 2 === 1
                ? "bg-[#faf7fc] px-5 py-14 sm:px-8 sm:py-20"
                : "px-5 py-14 sm:px-8 sm:py-20"
            }
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div
                  className={`absolute -bottom-3 -left-3 h-24 w-24 rounded-3xl ${
                    programme.accent === "green"
                      ? "bg-[#238343]/20"
                      : programme.accent === "magenta"
                        ? "bg-[#B52185]/20"
                        : "bg-[#EBAA22]/30"
                  }`}
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-xl shadow-[#32113f]/10">
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                {programme.imageCredit && (
                  <p className="mt-3 text-xs leading-5 text-[#62576a]">
                    Illustrative photo by{" "}
                    <a
                      href={programme.imageCredit.source}
                      className="underline underline-offset-2"
                    >
                      {programme.imageCredit.author}
                    </a>{" "}
                    ({programme.imageCredit.license}), via Wikimedia Commons;
                    not a WAID activity.{" "}
                    <a
                      href={programme.imageCredit.licenseUrl}
                      className="underline underline-offset-2"
                    >
                      License
                    </a>
                  </p>
                )}
                {!programme.imageCredit && (
                  <p className="mt-3 text-xs leading-5 text-[#62576a]">
                    Illustrative stock photography; not a WAID activity
                  </p>
                )}
              </div>

              <div>
                <p
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${
                    programme.accent === "green"
                      ? "text-[#238343]"
                      : programme.accent === "magenta"
                        ? "text-[#B52185]"
                        : "text-[#9a6b00]"
                  }`}
                >
                  Programme {programme.number}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
                  {programme.title}
                </h2>
                <p className="mt-5 leading-8 text-[#51465a]">
                  {programme.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {programme.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-sm leading-6 text-[#51465a]">
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                          programme.accent === "green"
                            ? "bg-[#238343]"
                            : programme.accent === "magenta"
                              ? "bg-[#B52185]"
                              : "bg-[#EBAA22]"
                        }`}
                      />
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  href={programme.href}
                  prefetch={false}
                  className="mt-8 inline-flex rounded-full border border-[#48145F]/20 px-6 py-3.5 text-sm font-bold text-[#48145F] transition duration-200 hover:-translate-y-0.5 hover:border-[#48145F] hover:bg-[#48145F] hover:text-white"
                >
                  {programme.cta}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              A Community-Centred Approach
            </h2>
            <p className="mt-5 leading-8 text-[#51465a]">
              WAID intends to work alongside communities and relevant
              stakeholders, with locally informed and accountable approaches.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approachAreas.map((area, index) => (
              <li
                key={area}
                className="rounded-2xl border border-[#48145F]/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#B52185]">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold leading-7 text-[#48145F]">
                  {area}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#48145F] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-white/[0.06]" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#B52185]/20 blur-2xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EBAA22]">
            Partnership
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Be Part of the Change
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Working together can help create more inclusive communities and
            better opportunities for women, children, and young people.
          </p>
          <Link
            href="/get-involved"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Partner With Us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
