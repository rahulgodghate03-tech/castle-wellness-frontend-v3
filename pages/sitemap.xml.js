import api from "../lib/api";

function generateSiteMap(businesses) {
  const baseUrl = "https://mrgroup.business";
  const staticPage = `
    <url>
      <loc>${baseUrl}/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>`;

  const businessPages = businesses
    .map((b) => {
      const businessBase = `${baseUrl}/${b.slug}`;
      const subPages = ["", "/about", "/services", "/packages", "/gallery"];
      return subPages
        .map(
          (sub) => `
    <url>
      <loc>${businessBase}${sub}</loc>
      <changefreq>weekly</changefreq>
      <priority>${sub === "" ? "0.9" : "0.7"}</priority>
    </url>`
        )
        .join("");
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPage}
    ${businessPages}
</urlset>`;
}

export default function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  let businesses = [];
  try {
    const { data } = await api.get("/businesses");
    businesses = data.businesses;
  } catch (err) {
    businesses = [];
  }

  const sitemap = generateSiteMap(businesses);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}