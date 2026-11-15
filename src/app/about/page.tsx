import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "About WAID | Women Action for Inclusive Development",
  description:
    "Learn about WAID's commitment to inclusive community development through education, child protection and empowerment.",
  pathname: "/about",
  image: "/images/about/hero.jpg",
});

const values = [
  {
    number: "01",
    title: "Inclusion",
    description:
      "Creating opportunities for everyone to participate and contribute to community development.",
  },
  {
    number: "02",
    title: "Dignity",
    description:
      "Respecting the rights, voices and potential of every individual.",
  },
  {
    number: "03",
    title: "Equality",
    description:
      "Promoting fair access to opportunities, resources and support.",
  },
  {
    number: "04",
    title: "Empowerment",
    description:
      "Supporting women, young people and communities to shape their own futures.",
  },
  {
    number: "05",
    title: "Accountability",
    description:
      "Acting responsibly, transparently and with respect for the communities we serve.",
  },
  {
    number: "06",
    title: "Sustainability",
    description:
      "Encouraging lasting solutions that strengthen communities over time.",
  },
];

const priorities = [
  {
    number: "01",
    title: "Education",
    description:
      "Advancing access to inclusive learning and educational opportunities.",
    href: "/programmes/education",
    image: "/images/about/education.jpg",
    imageAlt: "African girls studying together using traditional writing tablets",
    imageCredit: null,
  },
  {
    number: "02",
    title: "Child Protection",
    description:
      "Promoting children's safety, dignity, rights and wellbeing.",
    href: "/programmes/child-protection",
    image: "/images/about/child-protection.jpg",
    imageAlt: "A teacher supporting a student during a classroom lesson",
    imageCredit: null,
  },
  {
    number: "03",
    title: "Women and Youth Empowerment",
    description:
      "Encouraging participation, skills development and meaningful opportunities.",
    href: "/programmes/empowerment",
    image: "/images/community-illustrations/maasai-dialogue.jpg",
    imageAlt:
      "Maasai women taking part in a community dialogue on financial empowerment in Kajiado County, Kenya",
    imageCredit: {
      author: "Mark Myles Mugambi",
      source:
        "https://commons.wikimedia.org/wiki/File:Maasai_women_in_community_dialogue_on_financial_empowerment_in_Kajiado_County,_Kenya.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  },
];

const approaches = [
  {
    title: "Community Participation",
    text: "Recognising community voices and encouraging meaningful participation in development.",
  },
  {
    title: "Collaboration",
    text: "Building constructive relationships with organisations and individuals who share our goals.",
  },
  {
    title: "Sustainable Impact",
    text: "Promoting approaches that support lasting opportunities and stronger communities.",
  },
];

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen overflow-hidden bg-white text-[#32113f]"
    >
      <SiteHeader activePath="/about" />

      <section className="relative bg-[#48145F] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-[#EBAA22]">
              Get to know us
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              About Women Action for Inclusive Development
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-purple-100">
              Advancing inclusive development and creating opportunities for
              underserved communities through education, child protection and
              empowerment.
            </p>
            <Link
              href="/programmes"
              prefetch={false}
              className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-8 py-4 font-bold text-[#48145F] transition-colors hover:bg-white"
            >
              Explore Our Programmes
            </Link>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#B52185] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
              <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/about/hero.jpg"
                  alt="African women gathered in conversation outside a community home"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="relative z-10 mt-3 text-right text-xs text-purple-200">
              Illustrative photography
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-3 font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Who we are
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Creating opportunities for a more inclusive future
          </h2>
          <p className="mt-7 leading-8 text-[#51465a]">
            Women Action for Inclusive Development (WAID) is committed to
            supporting inclusive and sustainable community development. We
            believe that every person deserves the opportunity to learn,
            participate, feel protected and contribute to society.
          </p>
          <p className="mt-5 leading-8 text-[#51465a]">
            Our geographical priorities include Wajir County and underserved
            communities in Nairobi, Kenya. Through our programme priorities,
            we aim to contribute to stronger, more inclusive communities.
          </p>
        </div>

        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about/who-we-are.jpg"
              alt="Two African women collaborating on a laptop in a community workspace"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-right text-xs text-slate-500">
            Illustrative photography
          </p>
        </div>
      </section>

      <section className="bg-[#F8F5FA] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          <article className="rounded-3xl bg-[#48145F] p-8 text-white sm:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#EBAA22]">
              Our vision
            </span>
            <h2 className="mt-5 text-3xl font-bold">
              A future where everyone belongs.
            </h2>
            <p className="mt-6 leading-8 text-purple-100">
              Inclusive and empowered communities where everyone has the
              opportunity to thrive with dignity and equality.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm sm:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B52185]">
              Our mission
            </span>
            <h2 className="mt-5 text-3xl font-bold text-[#48145F]">
              Turning opportunity into lasting progress.
            </h2>
            <p className="mt-6 leading-8 text-[#51465a]">
              To advance inclusive community development through education,
              child protection and the empowerment of women and young people.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-xs text-slate-600">
          Proposed vision and mission statements for WAID&apos;s review and
          approval.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#B52185]">
            What guides us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-5 leading-8 text-[#51465a]">
            The principles that guide our commitment to inclusive and
            responsible community development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#B52185]">
                {value.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#48145F]">
                {value.title}
              </h3>
              <p className="mt-3 leading-7 text-[#51465a]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F8F5FA] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-[0.18em] text-[#238343]">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              An inclusive approach to development
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div className="grid gap-8 sm:grid-cols-2">
              {approaches.map((approach) => (
                <div
                  key={approach.title}
                  className="border-l-4 border-[#238343] pl-6"
                >
                  <h3 className="text-xl font-bold text-[#48145F]">
                    {approach.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#51465a]">
                    {approach.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/about/approach.jpg"
                alt="Community members gathered under a tree for a village discussion"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#B52185]">
              Our priorities
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#48145F] sm:text-4xl">
              Where our work is focused
            </h2>
          </div>
          <Link
            href="/programmes"
            prefetch={false}
            className="font-bold text-[#B52185] transition-colors hover:text-[#48145F]"
          >
            View all programmes <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {priorities.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              {item.imageCredit && (
                <p className="px-5 pt-3 text-xs leading-5 text-[#62576a]">
                  Illustrative photo by{" "}
                  <a
                    href={item.imageCredit.source}
                    className="underline underline-offset-2"
                  >
                    {item.imageCredit.author}
                  </a>{" "}
                  ({item.imageCredit.license}), via Wikimedia Commons; not a
                  WAID activity.{" "}
                  <a
                    href={item.imageCredit.licenseUrl}
                    className="underline underline-offset-2"
                  >
                    License
                  </a>
                </p>
              )}
              {!item.imageCredit && (
                <p className="px-5 pt-3 text-xs leading-5 text-[#62576a]">
                  Illustrative stock photography; not a WAID activity
                </p>
              )}
              <div className="p-7">
                <span className="text-sm font-bold text-[#B52185]">
                  {item.number}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#48145F]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[#51465a]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="mt-6 inline-block font-bold text-[#238343] transition-colors hover:text-[#48145F]"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#48145F] px-5 py-20 text-center text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold uppercase tracking-[0.18em] text-[#EBAA22]">
            Work with us
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Be Part of Creating Change
          </h2>
          <p className="mt-6 leading-8 text-purple-100">
            Building inclusive communities requires collaboration. We welcome
            conversations with organisations, institutions and individuals who
            share our commitment to a more inclusive future.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-9 inline-flex rounded-full bg-[#EBAA22] px-9 py-4 font-bold text-[#48145F] transition-colors hover:bg-white"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
