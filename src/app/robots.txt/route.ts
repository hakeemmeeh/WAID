export function GET(request: Request) {
  const sitemapUrl = new URL("/sitemap.xml", request.url).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
