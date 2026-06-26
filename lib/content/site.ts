// lib/content/site.ts

export async function getSiteSettings() {
  return {
    siteName: "Default Social",
    siteUrl: "https://defaultsocial.co.uk",
    contact: {
      email: "info@defaultmedia.com",
      phone: "+44 7878 849 182",
      location: "Brentford · London",
    },
    groupLink: {
        label: "Default Media Group",
        href: "https://defaultmedia.com",
        src: "/assets/default-media-logo.png",
        external: true,
      },
    footer: {
      eyebrow: "AI-enabled studio",
      description:
        "Strategy, content, technology and AI systems designed to help brands move faster and grow smarter."
    }
  };
}