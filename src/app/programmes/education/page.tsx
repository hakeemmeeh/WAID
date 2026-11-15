import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Education Programme | Women Action for Inclusive Development",
  description:
    "Learn how WAID aims to promote inclusive education and learning opportunities for children and young people.",
  pathname: "/programmes/education",
  image: "/images/education-detail/hero.jpg",
});

const priorities = [
  {
    title: "Access to Education",
    description:
      "Promoting awareness and community efforts that encourage children to access educational opportunities.",
    icon: "book",
  },
  {
    title: "Inclusive Learning",
    description:
      "Supporting learning environments where children, regardless of their background or circumstances, have opportunities to participate.",
    icon: "people",
  },
  {
    title: "Educational Awareness",
    description:
      "Engaging families and communities on the importance of education and continued learning.",
    icon: "light",
  },
  {
    title: "Community Participation",
    description:
      "Encouraging collaboration among parents, educators, community members, and relevant stakeholders to support education.",
    icon: "community",
  },
] as const;

const intendedApproach = [
  "Community consultation to understand local education needs.",
  "Collaboration with schools and relevant stakeholders.",
  "Awareness initiatives encouraging education and inclusion.",
  "Promoting equal learning opportunities for girls and boys.",
  "Learning, monitoring, and accountability.",
];

const supportGroups = [
  "Children from underserved communities.",
  "Girls and young women facing educational barriers.",
  "Families and caregivers.",
  "Communities with limited access to learning opportunities.",
];

function PriorityIcon({ name }: { name: (typeof priorities)[number]["icon"] }) {
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
    case "book":
      return (
        <svg {...sharedProps}>
          <path d="M12 7v14m0-14C10.7 5.8 8.9 5 7 5S3.3 5.8 2 7v13c1.3-1.2 3.1-2 5-2s3.7.8 5 2m0-13c1.3-1.2 3.1-2 5-2s3.7.8 5 2v13c-1.3-1.2-3.1-2-5-2s-3.7.8-5 2" />
        </svg>
      );
    case "people":
      return (
        <svg {...sharedProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M10 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        </svg>
      );
    case "light":
      return (
        <svg {...sharedProps}>
          <path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.75c.6.4 1 1.04 1 1.75h6c0-.71.4-1.35 1-1.75A7 7 0 0 0 12 2Z" />
        </svg>
      );
    case "community":
      return (
        <svg {...sharedProps}>
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z" />
          <path d="M8 10h.01M16 10h.01M12 10h.01" />
        </svg>
      );
  }
}

export default function EducationProgrammePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/programmes" />

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
              <li>
                <Link
                  href="/programmes"
                  prefetch={false}
                  className="rounded-sm transition-colors hover:text-[#B52185]"
                >
                  Our Programmes
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#238343]">
                /
              </li>
              <li aria-current="page" className="font-semibold text-[#48145F]">
                Education
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
                <span className="h-px w-8 bg-[#EBAA22]" />
                Education
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
                Education Opens Doors to a Brighter Future.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
                Promoting inclusive learning opportunities and helping
                children and young people overcome barriers to education.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/programmes"
                  prefetch={false}
                  className="rounded-full bg-[#48145F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#48145f]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#B52185]"
                >
                  Our Programmes
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
                <Link
                  href="/get-involved"
                  prefetch={false}
                  className="rounded-full border border-[#48145F]/25 bg-white px-7 py-4 text-sm font-bold text-[#48145F] transition duration-200 hover:-translate-y-0.5 hover:border-[#B52185] hover:text-[#B52185]"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
              <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
                <Image
                  src="/images/education-detail/hero.jpg"
                  alt="African children listening and learning together in a classroom"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="relative z-10 ml-auto mt-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#48145F] shadow-md sm:text-sm">
                Illustrative classroom photography
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Our purpose
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Our Commitment to Education
          </h2>
        </div>
        <div className="space-y-5 leading-8 text-[#51465a]">
          <p>
            Education is a foundation for individual growth and stronger
            communities. However, many children and young people continue to
            face barriers that limit their ability to access and benefit from
            quality learning opportunities.
          </p>
          <p>
            Women Action for Inclusive Development (WAID) aims to promote
            inclusive education by encouraging community participation,
            raising awareness, and supporting initiatives that help create
            better learning opportunities for underserved communities.
          </p>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Areas of focus
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Our Education Priorities
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {priorities.map((priority, index) => (
              <article
                key={priority.title}
                className="group rounded-3xl border border-[#48145F]/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${
                    index % 2 === 0
                      ? "bg-[#238343]/10 text-[#238343] group-hover:bg-[#238343] group-hover:text-white"
                      : "bg-[#B52185]/10 text-[#B52185] group-hover:bg-[#B52185] group-hover:text-white"
                  }`}
                >
                  <PriorityIcon name={priority.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-[#48145F]">
                  {priority.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#51465a]">
                  {priority.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-3xl bg-[#238343]/15" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-xl shadow-[#32113f]/10">
            <Image
              src="/images/education-detail/learners.jpg"
              alt="African schoolgirls reading together at their classroom desk"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="relative mt-3 text-right text-xs text-[#62576a]">
            Illustrative classroom photography
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Our focus
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Who We Aim to Support
          </h2>
          <ul className="mt-7 space-y-4">
            {supportGroups.map((group) => (
              <li key={group} className="flex items-start gap-3 leading-7 text-[#51465a]">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#238343]"
                />
                {group}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Building Stronger Learning Communities
            </h2>
            <p className="mt-5 leading-8 text-[#51465a]">
              WAID aims to work in ways that reflect local priorities,
              encourage inclusion, and support responsible learning.
            </p>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {intendedApproach.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-[#48145F]/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#48145F] text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <span className="pt-1 leading-7 text-[#51465a]">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="rounded-[2rem] bg-[#fffdf9] p-8 ring-1 ring-[#48145F]/5 sm:p-12 lg:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Geographical focus
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
            Working With Communities
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[#51465a]">
            WAID&apos;s geographical focus includes Wajir County and underserved
            and slum communities in Nairobi, Kenya. These are areas of focus;
            this does not imply active projects are currently operating there.
          </p>
          <ul className="mt-7 flex flex-wrap gap-3">
            {["Wajir County, Kenya", "Underserved and slum communities in Nairobi, Kenya"].map(
              (location) => (
                <li
                  key={location}
                  className="rounded-full border border-[#238343]/20 bg-white px-5 py-3 text-sm font-semibold text-[#48145F]"
                >
                  {location}
                </li>
              ),
            )}
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
            Help Create Opportunities Through Education
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Together, we can support inclusive learning opportunities and
            contribute to a future where every child has the chance to learn
            and grow.
          </p>
          <Link
            href="/get-involved"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Partner With WAID
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
