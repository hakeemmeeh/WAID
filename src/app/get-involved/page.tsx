import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Get Involved | Women Action for Inclusive Development",
  description:
    "Discover ways to connect and collaborate with WAID to promote inclusive development.",
  pathname: "/get-involved",
  image: "/images/get-involved/hero.jpg",
});

const involvementWays = [
  {
    title: "Partner With Us",
    description:
      "Collaborate with WAID on initiatives that promote education, child protection, and women and youth empowerment.",
    href: "/contact?subject=Partnership",
    action: "Discuss Partnership",
    icon: "partnership",
  },
  {
    title: "Volunteer With Us",
    description:
      "Contribute your time, knowledge, professional skills, or experience to support our mission.",
    href: "/contact?subject=Volunteering",
    action: "Express Interest",
    icon: "volunteer",
  },
  {
    title: "Support Our Mission",
    description:
      "Help strengthen initiatives that seek to create better opportunities for underserved communities.",
    href: "/contact?subject=Support",
    action: "Contact Us to Support",
    icon: "support",
  },
  {
    title: "Institutional Collaboration",
    description:
      "We welcome connections with organisations, community groups, educational institutions, and development stakeholders interested in shared goals.",
    href: "/contact?subject=Collaboration",
    action: "Explore Collaboration",
    icon: "collaboration",
  },
  {
    title: "Share Our Mission",
    description:
      "Help spread awareness about inclusive development and the importance of education, child protection, and empowerment.",
    href: "/contact",
    action: "Get in Touch",
    icon: "share",
  },
] as const;

const peopleWhoCanJoin = [
  "Individuals and community members",
  "Volunteers and professionals",
  "NGOs and civil society organisations",
  "Educational institutions",
  "Businesses and private sector organisations",
  "Development partners and institutions",
];

const focusAreas = [
  {
    title: "Education",
    description:
      "Promoting inclusive learning opportunities for children and young people.",
    href: "/programmes/education",
    image: "/images/get-involved/education.jpg",
    alt: "Students collaborating on a classroom learning activity",
    imageCredit: null,
  },
  {
    title: "Child Protection",
    description:
      "Encouraging children's rights, wellbeing, and safe, supportive environments.",
    href: "/programmes/child-protection",
    image: "/images/community-illustrations/lodwar-mothers-support.jpg",
    alt: "Women and children gathered in a mothers' support group in Lodwar, northern Kenya",
    imageCredit: {
      author: "DFID - UK Department for International Development",
      source:
        "https://commons.wikimedia.org/wiki/File:A_mothers_support_group_in_Lodwar,_northern_Kenya,_September_2011_(6219651215).jpg",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    },
  },
  {
    title: "Women and Youth Empowerment",
    description:
      "Supporting skills, participation, leadership, and economic opportunity.",
    href: "/programmes/empowerment",
    image: "/images/community-illustrations/ochuna-craftwork.jpg",
    alt: "A woman works on a traditional craft as part of the Ochuna Craft Cooperative",
    imageCredit: {
      author: "Docesbe",
      source:
        "https://commons.wikimedia.org/wiki/File:Women_of_the_Ochuna_Craft_Cooperative_teaching_and_reviving_traditional_Luo_crafts_for_market_04.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
] as const;

function InvolvementIcon({
  name,
}: {
  name: (typeof involvementWays)[number]["icon"];
}) {
  const sharedProps = {
    "aria-hidden": true as const,
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "partnership":
      return (
        <svg {...sharedProps}>
          <path d="m8 12 2.5 2.5a2 2 0 0 0 2.8 0l5.2-5.2a2 2 0 0 0-2.8-2.8L12 10.2" />
          <path d="m8 12-1.6 1.6a2 2 0 0 1-2.8-2.8l4.8-4.8a3 3 0 0 1 4.2 0l.6.6M3 21l3-3m15 3-3-3" />
        </svg>
      );
    case "volunteer":
      return (
        <svg {...sharedProps}>
          <path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
        </svg>
      );
    case "support":
      return (
        <svg {...sharedProps}>
          <path d="M12 3v18m-9-9h18" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case "collaboration":
      return (
        <svg {...sharedProps}>
          <path d="M3 21h18M5 21V7l7-4 7 4v14m-9 0v-5h4v5m-6-9h.01M15 12h.01" />
        </svg>
      );
    case "share":
      return (
        <svg {...sharedProps}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.6 10.5 6.8-4m-6.8 7 6.8 4" />
        </svg>
      );
  }
}

export default function GetInvolvedPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/get-involved" />

      <section className="relative overflow-hidden bg-[#fffdf9]">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#238343]/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:pb-24">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[#62576a]">
              <li>
                <Link
                  href="/"
                  prefetch={false}
                  className="rounded-sm transition-colors hover:text-[#B52185]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#238343]">
                /
              </li>
              <li aria-current="page" className="font-semibold text-[#48145F]">
                Get Involved
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
                <span className="h-px w-8 bg-[#EBAA22]" />
                Get involved
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
                Be Part of Creating Lasting Change.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
                Every contribution matters. Join Women Action for Inclusive
                Development in promoting education, protecting children, and
                empowering women and young people.
              </p>
              <Link
                href="/contact"
                prefetch={false}
                className="mt-9 inline-flex rounded-full bg-[#48145F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#48145f]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#B52185]"
              >
                Contact WAID
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
              <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
                <Image
                  src="/images/get-involved/hero.jpg"
                  alt="Community members gathered together outdoors under a tree"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="relative z-10 ml-auto mt-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#48145F] shadow-md sm:text-sm">
                Illustrative community stock photography
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Get involved
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Together, We Can Make a Difference
          </h2>
        </div>
        <div className="space-y-5 leading-8 text-[#51465a]">
          <p>
            Creating inclusive communities requires collective effort. Whether
            you are an individual, organisation, professional, or institution,
            there are different ways to contribute to the vision of Women
            Action for Inclusive Development (WAID).
          </p>
          <p>
            We welcome meaningful connections with people and organisations
            who share our commitment to inclusive development.
          </p>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Find your way to contribute
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Ways to Get Involved
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {involvementWays.map((way, index) => (
              <article
                key={way.title}
                className="group flex flex-col rounded-3xl border border-[#48145F]/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                    index % 2 === 0
                      ? "bg-[#238343]/10 text-[#238343] group-hover:bg-[#238343] group-hover:text-white"
                      : "bg-[#B52185]/10 text-[#B52185] group-hover:bg-[#B52185] group-hover:text-white"
                  }`}
                >
                  <InvolvementIcon name={way.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-[#48145F]">
                  {way.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#51465a]">
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  prefetch={false}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm font-bold text-[#B52185] transition-colors hover:text-[#48145F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#48145F]"
                >
                  {way.action}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Everyone is welcome
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            There Is a Place for Everyone
          </h2>
          <p className="mt-5 leading-8 text-[#51465a]">
            People and organisations with different experiences and strengths
            can connect with WAID around a shared commitment to inclusive
            development.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {peopleWhoCanJoin.map((person, index) => (
            <li
              key={person}
              className="flex items-start gap-4 rounded-2xl border border-[#48145F]/5 bg-[#fffdf9] p-5 leading-7 text-[#51465a] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  index % 2 === 0
                    ? "bg-[#238343]/10 text-[#238343]"
                    : "bg-[#B52185]/10 text-[#B52185]"
                }`}
              >
                {index + 1}
              </span>
              {person}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Our programmes
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Our Areas of Focus
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area.href}
                className="group overflow-hidden rounded-3xl border border-[#48145F]/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  {area.imageCredit ? (
                    <p className="text-xs leading-5 text-[#62576a]">
                      Illustrative photo by{" "}
                      <a
                        href={area.imageCredit.source}
                        className="underline underline-offset-2"
                      >
                        {area.imageCredit.author}
                      </a>{" "}
                      ({area.imageCredit.license}), via Wikimedia Commons; not
                      a WAID activity.{" "}
                      <a
                        href={area.imageCredit.licenseUrl}
                        className="underline underline-offset-2"
                      >
                        License
                      </a>
                    </p>
                  ) : (
                    <p className="text-xs font-medium text-[#62576a]">
                      Illustrative stock photography; not a WAID activity
                    </p>
                  )}
                  <h3 className="mt-2 text-xl font-bold text-[#48145F]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#51465a]">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    prefetch={false}
                    className="mt-5 inline-flex items-center gap-2 rounded-sm font-bold text-[#B52185] transition-colors hover:text-[#48145F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#48145F]"
                  >
                    Explore {area.title}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
            Let&apos;s Build Something Meaningful Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            WAID believes that meaningful development is strengthened through
            collaboration, trust, and shared commitment. We welcome
            conversations with individuals and organisations interested in
            contributing to a more inclusive future.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="rounded-[2rem] bg-[#fffdf9] p-8 ring-1 ring-[#48145F]/5 sm:p-12 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
            Contact WAID
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#51465a]">
            Contact WAID to discuss volunteering, partnerships, institutional
            collaboration, or other ways to contribute. We look forward to
            hearing from people and organisations who share our commitment.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-7 inline-flex rounded-full bg-[#48145F] px-7 py-4 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#B52185]"
          >
            Contact WAID
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
