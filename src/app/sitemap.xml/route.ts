const sitePaths = [
  "/",
  "/about",
  "/programmes",
  "/programmes/education",
  "/programmes/child-protection",
  "/programmes/empowerment",
  "/where-we-work",
  "/get-involved",
  "/news",
  "/contact",
];

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const urls = sitePaths
    .map((path) => `  <url><loc>${new URL(path, origin).toString()}</loc></url>`)
    .join("\n");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
