import Image from "next/image";
import Link from "next/link";

export { SiteHeader } from "./site-header";

const copyrightYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-[#25102f] px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <Link
            href="/"
            aria-label="WAID home"
            className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EBAA22]"
          >
            <Image
              src="/logo/waid-logo.png"
              alt="WAID - Women Action for Inclusive Development"
              width={240}
              height={160}
              className="h-20 w-auto rounded bg-white object-contain p-1"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            Women Action for Inclusive Development. Empowered Women. Inclusive
            Communities.
          </p>
        </div>

        <div>
          <h2 className="font-bold">Explore</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
            <Link
              href="/about"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/programmes"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              Our Programmes
            </Link>
            <Link
              href="/where-we-work"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              Where We Work
            </Link>
            <Link
              href="/news"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              News &amp; Updates
            </Link>
            <Link
              href="/get-involved"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold">Get in Touch</h2>
          <p className="mt-5 text-sm leading-7 text-white/75">
            Interested in partnering with WAID or learning more about our work?
            We would love to hear from you.
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-4 inline-block font-semibold text-[#EBAA22] transition-colors hover:text-white"
          >
            Contact WAID <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-7 text-center text-xs text-white/65">
        © {copyrightYear} Women Action for Inclusive Development (WAID). All
        rights reserved.
      </div>
    </footer>
  );
}
