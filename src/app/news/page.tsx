import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "News & Updates | Women Action for Inclusive Development",
  description:
    "Insights and proposed editorial topics on inclusive education, child protection, and women and youth empowerment.",
  pathname: "/news",
  image: "/images/news/hero.jpg",
});

const featuredInsights = [
  {
    category: "Education",
    title: "Education and the Future of Inclusive Communities",
    excerpt:
      "Explore why access to inclusive education matters and how communities can contribute to better learning opportunities for children and young people.",
    image: "/images/news/education-insight.jpg",
    alt: "Two students in blue headscarves seated together in a classroom",
    href: "/programmes/education",
    linkLabel: "Read More",
  },
  {
    category: "Child Protection",
    title: "Why Child Protection Is Everyone's Responsibility",
    excerpt:
      "Discover the importance of protecting children's rights, promoting safe environments, and strengthening community awareness.",
    image: "/images/news/child-protection-insight.jpg",
    alt: "A teacher leaning over to support a young student with classroom work",
    href: "/programmes/child-protection",
    linkLabel: "Read More",
  },
  {
    category: "Women and Youth Empowerment",
    title: "Empowering Women and Young People for Sustainable Development",
    excerpt:
      "Learn how skills development, participation, leadership, and economic opportunities can contribute to stronger communities.",
    image: "/images/news/empowerment-insight.jpg",
    alt: "Women working at sewing machines in a tailoring workshop",
    href: "/programmes/empowerment",
    linkLabel: "Read More",
  },
] as const;

const categories = [
  "All Updates",
  "Education",
  "Child Protection",
  "Women and Youth Empowerment",
  "Community Development",
] as const;

type NewsArticle = {
  title: string;
  excerpt: string;
  category: (typeof categories)[number];
  publishedAt: string;
  href: string;
};

const publishedArticles: NewsArticle[] = [];

export default function NewsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/news" />

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
                News &amp; Updates
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
                <span className="h-px w-8 bg-[#EBAA22]" />
                News &amp; updates
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
                Stories, Insights and Updates.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
                Stay connected with Women Action for Inclusive Development as
                we share insights, announcements, and developments related to
                inclusive community development.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
              <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
                <Image
                  src="/images/news/hero.jpg"
                  alt="A community member speaking to a gathered group outdoors"
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
            From WAID
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            What&apos;s Happening at WAID
          </h2>
        </div>
        <div className="space-y-5 leading-8 text-[#51465a]">
          <p>
            Information, awareness, and community engagement are important
            parts of inclusive development. This space is dedicated to sharing
            updates, useful insights, announcements, and stories related to
            education, child protection, and women and youth empowerment.
          </p>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Editorial insights
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Featured Insights
            </h2>
            <p className="mt-5 leading-7 text-[#51465a]">
              These are proposed editorial topics, not reports of WAID projects
              or activities. Read More links to related programme information;
              no articles have been published here yet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredInsights.map((insight) => (
              <article
                key={insight.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#48145F]/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-[#238343]/10 px-3 py-1 text-xs font-bold text-[#238343]">
                    {insight.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#48145F]">
                    {insight.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#51465a]">
                    {insight.excerpt}
                  </p>
                  <Link
                    href={insight.href}
                    prefetch={false}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm font-bold text-[#B52185] transition-colors hover:text-[#48145F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#48145F]"
                  >
                    {insight.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="latest"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
              From our newsroom
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Latest News and Announcements
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="News categories">
            {categories.map((category, index) => (
              <span
                key={category}
                aria-disabled="true"
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                  index === 0
                    ? "border-[#48145F] bg-[#48145F] text-white"
                    : "border-[#48145F]/15 bg-white text-[#62576a]"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-[#62576a]">
          Categories are shown for future organisation; filters are not active
          because there are no published updates yet.
        </p>

        {publishedArticles.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedArticles.map((article) => (
              <article
                key={article.href}
                className="rounded-3xl border border-[#48145F]/10 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#238343]">
                  {article.category}
                </p>
                <h3 className="mt-3 text-xl font-bold text-[#48145F]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#51465a]">
                  {article.excerpt}
                </p>
                <time className="mt-5 block text-xs text-[#62576a]">
                  {article.publishedAt}
                </time>
                <Link
                  href={article.href}
                  prefetch={false}
                  className="mt-5 inline-flex font-bold text-[#B52185] hover:text-[#48145F]"
                >
                  Read More <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-dashed border-[#48145F]/20 bg-[#fffdf9] px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#238343]/10 text-[#238343]"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
                <path d="M8 7h8m-8 4h8" />
              </svg>
            </div>
            <p className="mt-5 text-lg font-semibold text-[#48145F]">
              Updates from WAID will be shared here. Please check back soon.
            </p>
          </div>
        )}
      </section>

      <section className="bg-[#faf7fc] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
              Newsletter
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#48145F]">
              Stay Connected With WAID
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#51465a]">
              Keep up with insights and updates on inclusive development,
              education, child protection, and community empowerment.
            </p>
            <p className="mt-3 text-sm font-medium text-[#62576a]">
              Newsletter sign-up is a preview and is not connected to a mailing
              service yet.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 sm:flex-row lg:min-w-[26rem]">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              disabled
              className="min-h-12 min-w-0 flex-1 rounded-full border border-[#48145F]/20 bg-[#faf7fc] px-5 text-sm text-[#32113f] placeholder:text-[#62576a] disabled:cursor-not-allowed disabled:opacity-70"
            />
            <button
              type="button"
              disabled
              className="min-h-12 rounded-full bg-[#48145F] px-6 text-sm font-bold text-white opacity-60"
            >
              Coming Soon
            </button>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#48145F] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-white/[0.06]" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#B52185]/20 blur-2xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EBAA22]">
            Discover WAID
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Discover What We Stand For
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Learn more about our mission and the programmes we aim to promote
            in underserved communities.
          </p>
          <Link
            href="/programmes"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Explore Our Programmes
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
