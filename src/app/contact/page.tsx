import Link from "next/link";
import { Suspense } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Contact Us | Women Action for Inclusive Development",
  description:
    "Contact page for partnership, volunteering, and collaboration enquiries with WAID.",
  pathname: "/contact",
});

const enquiryTopics = [
  "General enquiry",
  "Partnership",
  "Volunteering",
  "Support",
  "Collaboration",
];

type ContactSearchParams = {
  searchParams: Promise<{ subject?: string | string[] }>;
};

async function ContactEnquiryForm({ searchParams }: ContactSearchParams) {
  const { subject } = await searchParams;
  const requestedSubject = Array.isArray(subject) ? subject[0] : subject;
  const selectedTopic =
    enquiryTopics.find((topic) => topic === requestedSubject) ??
    enquiryTopics[0];

  return <DisabledContactForm selectedTopic={selectedTopic} />;
}

function DisabledContactForm({ selectedTopic }: { selectedTopic: string }) {
  return (
    <form
      aria-describedby="contact-form-status"
      className="rounded-[2rem] border border-[#48145F]/10 bg-white p-6 shadow-sm sm:p-9"
    >
      <fieldset disabled className="space-y-5">
        <legend className="text-xl font-bold text-[#48145F]">
          Enquiry form preview
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-[#32113f]"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              className="min-h-12 w-full rounded-xl border border-[#48145F]/20 px-4 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-[#32113f]"
            >
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-h-12 w-full rounded-xl border border-[#48145F]/20 px-4 text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-sm font-semibold text-[#32113f]"
          >
            What would you like to discuss?
          </label>
          <select
            id="contact-subject"
            name="subject"
            defaultValue={selectedTopic}
            className="min-h-12 w-full rounded-xl border border-[#48145F]/20 bg-white px-4 text-sm"
          >
            {enquiryTopics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-[#32113f]"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="w-full rounded-xl border border-[#48145F]/20 px-4 py-3 text-sm"
          />
        </div>
        <button
          type="submit"
          className="min-h-12 rounded-full bg-[#48145F] px-7 text-sm font-bold text-white"
        >
          Send Message
        </button>
      </fieldset>
      <p
        id="contact-form-status"
        role="status"
        className="mt-5 text-sm leading-6 text-[#62576a]"
      >
        Form submission is disabled until WAID provides verified contact details
        and configures a message-delivery service.
      </p>
    </form>
  );
}

export default function ContactPage({
  searchParams,
}: ContactSearchParams) {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-white text-[#32113f]"
    >
      <SiteHeader activePath="/contact" />

      <section className="bg-[#fffdf9]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10">
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
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#238343] sm:text-sm">
              <span className="h-px w-8 bg-[#EBAA22]" />
              Get in touch
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#48145F] sm:text-5xl lg:text-6xl">
              Contact Women Action for Inclusive Development
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#51465a] sm:text-lg">
              We welcome conversations about partnerships, volunteering, and
              collaboration related to inclusive community development.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B52185]">
            Start a conversation
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#48145F] sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-5 leading-8 text-[#51465a]">
            Please use this page to explore the enquiry topics WAID welcomes.
            Contact details and a message-delivery service have not yet been
            configured for this website.
          </p>
          <p className="mt-5 rounded-2xl border border-[#EBAA22]/40 bg-[#fffdf9] p-5 text-sm leading-7 text-[#51465a]">
            This form is a non-submitting preview. No message is sent or stored
            when you use this page.
          </p>
          <Link
            href="/get-involved"
            prefetch={false}
            className="mt-7 inline-flex items-center gap-2 rounded-sm font-bold text-[#48145F] transition-colors hover:text-[#B52185] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#48145F]"
          >
            Explore ways to get involved <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Suspense fallback={<DisabledContactForm selectedTopic="General enquiry" />}>
          <ContactEnquiryForm searchParams={searchParams} />
        </Suspense>
      </section>

      <section className="bg-[#faf7fc] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="leading-7 text-[#51465a]">
            For information about WAID&apos;s programme priorities, visit{" "}
            <Link
              href="/programmes"
              prefetch={false}
              className="font-semibold text-[#48145F] underline decoration-[#EBAA22] underline-offset-4 hover:text-[#B52185]"
            >
              Our Programmes
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
