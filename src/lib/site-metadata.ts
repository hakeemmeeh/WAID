import type { Metadata } from "next";

export const siteName = "Women Action for Inclusive Development";
export const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteMetadataBase = publicSiteUrl
  ? new URL(publicSiteUrl)
  : undefined;

export function createPageMetadata({
  title,
  description,
  pathname,
  image = "/images/community-hero.jpg",
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const pageUrl = siteMetadataBase
    ? new URL(pathname, siteMetadataBase).toString()
    : undefined;
  const imageUrl = siteMetadataBase
    ? new URL(image, siteMetadataBase).toString()
    : undefined;

  return {
    title,
    description,
    alternates: pageUrl ? { canonical: pageUrl } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      siteName,
      url: pageUrl,
      images: imageUrl ? [{ url: imageUrl, alt: title }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
