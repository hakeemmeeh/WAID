import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Where We Work | Women Action for Inclusive Development",
  description:
    "Learn about WAID's geographical focus in Wajir County and underserved communities in Nairobi, Kenya.",
  pathname: "/where-we-work",
  image: "/images/where-we-work/hero.jpg",
});

const locations = [
  {
    name: "Wajir County",
    image: "/images/where-we-work/wajir-focus.jpg",
    alt: "Illustrative aerial view of a settlement in northern Kenya near Lake Turkana",
    caption:
      "Illustrative northern Kenya landscape; not a photograph of Wajir or WAID activities.",
    description: [
      "Wajir County is an important focus area for WAID's community development ambitions. We recognise the importance of inclusive opportunities, education, child wellbeing, and women's participation in strengthening communities.",
      "WAID aims to support approaches that respond to local priorities and encourage meaningful community involvement.",
    ],
    focusAreas: [
      "Education and learning opportunities.",
      "Child protection and wellbeing.",
      "Women's and youth empowerment.",
      "Community participation and inclusion.",
    ],
  },
  {
    name: "Underserved Communities in Nairobi",
    image: "/images/where-we-work/nairobi-focus.jpg",
    alt: "View across an urban informal settlement in Nairobi, Kenya",
    caption:
      "Illustrative Nairobi community photography; not a WAID project site.",
    description: [
      "Nairobi is home to diverse communities with different development needs and opportunities. WAID seeks to focus on underserved and slum communities where inclusive approaches can help promote education, child protection, and opportunities for women and young people.",
    ],
    focusAreas: [
      "Inclusive education opportunities.",
      "Child protection awareness.",
      "Women's economic participation.",
      "Youth skills and community engagement.",
    ],
  },
] as const;

const communityApproach = [
  {
    title: "Listening to Communities",
    description:
      "Understanding local priorities through consultation and engagement.",
    icon: "listen",
  },
  {
    title: "Inclusive Participation",
    description:
      "Encouraging women, young people, families, and community members to participate.",
    icon: "participate",
  },
  {
    title: "Local Collaboration",
    description:
      "Building relationships with relevant stakeholders and community organisations.",
    icon: "collaborate",
  },
  {
    title: "Sustainable Development",
    description:
      "Promoting approaches that consider long-term community needs and accountability.",
    icon: "sustainable",
  },
] as const;

const programmes = [
  {
    title: "Education",
    description:
      "Promoting inclusive learning opportunities for children and young people.",
    href: "/programmes/education",
    image: "/images/where-we-work/education.jpg",
    alt: "Children raising books and participating in a classroom lesson",
  },
  {
    title: "Child Protection",
    description:
      "Encouraging children's rights, wellbeing, and safe, supportive environments.",
    href: "/programmes/child-protection",
    image: "/images/where-we-work/child-protection.jpg",
    alt: "A caregiver playing with young children in a childcare setting",
  },
  {
    title: "Women and Youth Empowerment",
    description:
      "Supporting skills, participation, leadership, and economic opportunity.",
    href: "/programmes/empowerment",
    image: "/images/where-we-work/empowerment.jpg",
    alt: "A young person learning traditional basket weaving alongside an adult",
  },
] as const;

function ApproachIcon({
  name,
}: {
  name: (typeof communityApproach)[number]["icon"];
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
    case "listen":
      return (
        <svg {...sharedProps}>
          <path d="M12 18a6 6 0 0 0 6-6V8a6 6 0 0 0-12 0v4a6 6 0 0 0 6 6Zm0 0v4m-4 0h8M2 12a10 10 0 0 0 20 0" />
        </svg>
      );
    case "participate":
      return (
        <svg {...sharedProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M10 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      );
    case "collaborate":
      return (
        <svg {...sharedProps}>
          <path d="m8 12 2.5 2.5a2 2 0 0 0 2.8 0l5.2-5.2a2 2 0 0 0-2.8-2.8L12 10.2" />
          <path d="m8 12-1.6 1.6a2 2 0 0 1-2.8-2.8l4.8-4.8a3 3 0 0 1 4.2 0l.6.6M3 21l3-3m15 3-3-3" />
        </svg>
      );
    case "sustainable":
      return (
        <svg {...sharedProps}>
          <path d="M20 4c-8 0-14 3-14 9a5 5 0 0 0 5 5c6 0 9-6 9-14ZM4 21c2-5 6-8 11-11" />
        </svg>
      );
  }
}

export default function WhereWeWorkPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/where-we-work" />

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
                Where We Work
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
                <span className="h-px w-8 bg-[#EBAA22]" />
                Our geographical focus
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
                Working Towards Inclusive Communities.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
                WAID focuses on underserved communities in Wajir County and
                Nairobi, Kenya, with a commitment to promoting education, child
                protection, and the empowerment of women and young people.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
              <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
                <Image
                  src="/images/where-we-work/hero.jpg"
                  alt="Community members gathered together in a rural African village"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="relative z-10 ml-auto mt-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#48145F] shadow-md sm:text-sm">
                Illustrative community stock photography; not a WAID activity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Where we work
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Our Geographical Focus
          </h2>
        </div>
        <div className="space-y-5 leading-8 text-[#51465a]">
          <p>
            Women Action for Inclusive Development (WAID) recognises the
            importance of community-led development that responds to local needs
            and realities.
          </p>
          <p>
            Our geographical focus includes Wajir County and underserved
            communities in Nairobi. Through these areas, we aim to encourage
            inclusive development, strengthen community participation, and
            promote opportunities for women, children, and young people.
          </p>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 lg:space-y-20">
          {locations.map((location, index) => (
            <article
              key={location.name}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div
                  className={`absolute -bottom-4 h-24 w-24 rounded-3xl bg-[#238343]/15 ${
                    index % 2 === 0 ? "-left-4" : "-right-4"
                  }`}
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-xl shadow-[#32113f]/10">
                  <Image
                    src={location.image}
                    alt={location.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <p className="relative mt-3 text-right text-xs text-[#62576a]">
                  {location.caption}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
                  Geographic focus
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
                  {location.name}
                </h2>
                <div className="mt-5 space-y-4 leading-8 text-[#51465a]">
                  {location.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <h3 className="mt-7 font-bold text-[#48145F]">Focus areas</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {location.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 text-sm leading-6 text-[#51465a]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#238343]"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Development Begins With Communities
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {communityApproach.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#48145F]/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                    index % 2 === 0
                      ? "bg-[#238343]/10 text-[#238343] group-hover:bg-[#238343] group-hover:text-white"
                      : "bg-[#B52185]/10 text-[#B52185] group-hover:bg-[#B52185] group-hover:text-white"
                  }`}
                >
                  <ApproachIcon name={item.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-[#48145F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#51465a]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Our programmes
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Our Programmes Across These Areas
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.href}
                className="group overflow-hidden rounded-3xl border border-[#48145F]/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-medium text-[#62576a]">
                    Illustrative photography; not a WAID activity
                  </p>
                  <h3 className="text-xl font-bold text-[#48145F]">
                    {programme.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#51465a]">
                    {programme.description}
                  </p>
                  <Link
                    href={programme.href}
                    prefetch={false}
                    className="mt-5 inline-flex items-center gap-2 rounded-sm font-bold text-[#B52185] transition-colors hover:text-[#48145F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#48145F]"
                  >
                    Explore {programme.title}
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
            Join Us in Building Inclusive Communities
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Positive community development requires collaboration, shared
            responsibility, and commitment. We welcome opportunities to work
            with individuals, organisations, and stakeholders who share our
            vision.
          </p>
          <Link
            href="/get-involved"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Work With WAID
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
