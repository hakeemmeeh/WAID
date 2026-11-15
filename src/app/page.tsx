import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const programmes = [
  {
    number: "01",
    title: "Education",
    description:
      "Supporting access to learning opportunities and encouraging inclusive education for children and underserved communities.",
    image: "/images/education.jpg",
    imageAlt: "Illustrative photo of children learning together",
    link: "/programmes/education",
  },
  {
    number: "02",
    title: "Child Protection",
    description:
      "Promoting children's safety, dignity, rights and access to supportive environments where they can thrive.",
    image: "/images/child-protection.jpg",
    imageAlt: "Illustrative photo of children receiving community support",
    link: "/programmes/child-protection",
  },
  {
    number: "03",
    title: "Women and Youth Empowerment",
    description:
      "Encouraging skills development, participation and opportunities for women and young people to build better futures.",
    image: "/images/women-youth.jpg",
    imageAlt: "Illustrative photo of women working together",
    link: "/programmes/empowerment",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-[#32113f]">
      <SiteHeader activePath="/" />

      <section className="relative overflow-hidden bg-[#fffdf9]">
        <div className="absolute -left-36 top-12 h-80 w-80 rounded-full bg-[#238343]/[0.06] blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
              <span className="h-px w-8 bg-[#EBAA22]" />
              Women Action for Inclusive Development
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
              Building Inclusive Communities.
              <span className="mt-2 block text-[#B52185]">
                Empowering Futures.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#51465a] sm:text-lg">
              WAID seeks to promote inclusive development by encouraging
              opportunities in education, child protection and empowerment for
              women and young people in underserved communities.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/programmes"
                className="rounded-full bg-[#48145F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#48145f]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#B52185] hover:shadow-xl"
              >
                Explore Our Programmes
              </a>
              <a
                href="/get-involved"
                className="rounded-full border border-[#48145F]/25 bg-white px-7 py-4 text-sm font-bold text-[#48145F] transition duration-200 hover:-translate-y-0.5 hover:border-[#B52185] hover:text-[#B52185]"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-4 -top-4 z-0 h-28 w-28 rounded-[2rem] bg-[#EBAA22] sm:-right-6 sm:-top-6 sm:h-36 sm:w-36" />
            <div className="absolute -bottom-5 -left-5 z-0 h-32 w-32 rounded-full bg-[#B52185] sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#32113f]/15">
              <Image
                src="/images/community-hero.jpg"
                alt="Illustrative photo of a diverse group joining hands in a collaborative activity"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="relative z-10 ml-auto mt-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#48145F] shadow-md sm:text-sm">
              Education · Protection · Empowerment
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-[#238343]/15" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/community-intro.jpg"
              alt="Illustrative photo of a community group coming together"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Welcome to WAID
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl lg:text-5xl">
            Creating Opportunities for a More Inclusive Future
          </h2>
          <p className="mt-6 text-base leading-8 text-[#51465a]">
            Women Action for Inclusive Development (WAID) aims to support
            communities through inclusive and sustainable development
            approaches. Its priorities include expanding access to education,
            promoting child protection and creating opportunities for women
            and young people.
          </p>
          <a
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-bold text-[#48145F] transition-colors hover:text-[#B52185]"
          >
            Discover Our Organisation <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="bg-[#faf7fc] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
              What We Focus On
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl lg:text-5xl">
              Our Programmes
            </h2>
            <p className="mt-5 leading-7 text-[#51465a]">
              WAID&apos;s programme priorities aim to support more inclusive and
              supportive communities.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.number}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#48145f]/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#32113f]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-[#238343]">
                    {programme.number}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#48145F]">
                    {programme.title}
                  </h3>
                  <p className="mt-3 min-h-20 leading-7 text-[#51465a]">
                    {programme.description}
                  </p>
                  <a
                    href={programme.link}
                    className="mt-5 inline-flex items-center gap-2 font-bold text-[#B52185] transition-colors hover:text-[#48145F]"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#238343]">
            Our Geographical Focus
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
            Working With Communities
          </h2>
          <p className="mt-5 leading-8 text-[#51465a]">
            WAID focuses on communities where inclusive opportunities and
            support can make a meaningful difference. Our geographical
            priorities include Wajir County and underserved communities in
            Nairobi.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-[#238343] bg-[#f7faf7] p-5">
              <h3 className="font-bold text-[#48145F]">Wajir County</h3>
            </div>
            <div className="rounded-2xl border-l-4 border-[#B52185] bg-[#fcf7fb] p-5">
              <h3 className="font-bold text-[#48145F]">
                Underserved communities in Nairobi
              </h3>
            </div>
          </div>
          <a
            href="/where-we-work"
            className="mt-7 inline-flex items-center gap-2 font-bold text-[#48145F] transition-colors hover:text-[#B52185]"
          >
            Explore Where We Work <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
          <Image
            src="/images/kenyan-community.jpg"
            alt="Illustrative photo of a community landscape in Kenya"
            fill
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#48145F] px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[40px] border-white/[0.06]" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#B52185]/20 blur-2xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EBAA22]">
            Partnership
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Be Part of Creating Change
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
            Building inclusive communities requires collaboration. We welcome
            partnerships with organisations, institutions and individuals who
            share our commitment to education, child protection and
            empowerment.
          </p>
          <a
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#32113f] transition duration-200 hover:-translate-y-0.5 hover:bg-white"
          >
            Partner With WAID
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
