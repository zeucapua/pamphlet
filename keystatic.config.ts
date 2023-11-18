import { config, fields, collection } from "@keystatic/core";

// component blocks:
// hero, "feature", CTA, banner

export default config({
  storage: { kind: "local" },
  singletons: {
    // basic: landing, about, contact
    // business: pricing page 


  },
  collections: {
    // basic: blog
    // business: products (integration w stripe, lmnsqueezy, etc.)
    // other: testimonials


  },
});
