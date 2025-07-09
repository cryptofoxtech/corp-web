// client/src/data/siteConfig.js
// This file centralizes global site configuration and contact information.

const siteConfig = {
  company: {
    name: "Cryptofox Technology Ltd",
    tagline: "Accelerating your digital future with expert DevOps, Cloud, and AI solutions tailored for your business."
  },
  contact: {
    phone: "437-494-7222",
    email: "info@cryptofox.com",
    address: {
      street: "123 Main St, Suite 400",
      city: "Toronto",
      province: "ON",
      postalCode: "M1A 1A1",
      country: "Canada"
    }
  },
  social: {
    linkedin: "https://linkedin.com/company/cryptofox",
    twitter: "https://twitter.com/cryptofox"
  },
  copyrightYear: new Date().getFullYear() // Dynamically get current year
};

export default siteConfig;
