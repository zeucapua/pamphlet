import { config, fields, collection, singleton } from "@keystatic/core";
import { componentBlocks } from "./src/components/blocks";

export default config({
  storage: { kind: "local" },
  singletons: {
    // basic: landing, about, contact
    // business: pricing page 
    landing: singleton({
      label: "Landing (Home)",
      path: "/src/content/singletons/landing/",
      schema: {
        body: fields.document({
          label: "Body",
          componentBlocks
        })
      }
    })

  },
  collections: {
    // basic: blog
    // business: products (integration w stripe, lmnsqueezy, etc.)
    // other: testimonials
    blogs: collection({
      label: "Blogs",
      slugField: "slug",
      path: "/src/content/blogs/*",
      schema: {
        slug: fields.slug({ name: { label: "Slug" }}),
        title: fields.text({ label: "Title" }),
        subtitle: fields.text({ label: "Subtitle" }),
        body: fields.document({
          label: "Content",
          formatting: true,
          links: true,
          images: true
        })
      }
    }),

  },
});
