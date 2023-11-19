import { component, fields } from "@keystatic/core";
import { solar_hero_preview } from "../components/previews.tsx";

export const IMAGE_CONFIGURATION = {
  directory: "public/images/",
  publicPath: "images/",
}

// schemas: exported for previews
export const hero_schema = {
  headline: fields.text({ label: "Headline" }),
  tagline: fields.text({ label: "Headline" }),
  actions: fields.array(
    fields.object({
      title: fields.text({ label: "Title" }),
      url: fields.url({ label: "URL" })
    })
  ),
}

// component blocks:
// hero, "feature", CTA, banner
export const componentBlocks = {
  hero: component({
    label: "Hero",
    preview: solar_hero_preview,
    schema: hero_schema
  }),

  cta: component({
    label: "Call to Action (CTA)",
    preview: () => null, // TODO: create preview component
    schema: {
      headline: fields.text({ label: "Headline" }),
      tagline: fields.text({ label: "Tagline" }),
      actions: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          url: fields.url({ label: "URL" })
        }),
        {
          label: "Actions",
          itemLabel: (props) => props.fields.title.value
        }
      ),
    }
  }),

  feature: component({
    label: "Feature Section",
    preview: () => null, // TODO: create preview component
    schema: {
      side: fields.checkbox({
        label: "Content Start",
        description: "If checked,' 'content' will be first/left side of images"
      }),
      headline: fields.text({ label: "Headline" }),
      tagline: fields.text({ label: "Tagline" }),
      actions: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          url: fields.url({ label: "URL" })
        }),
        {
          label: "Actions",
          itemLabel: (props) => props.fields.title.value
        }
      ),
      images: fields.array(
        fields.image({
          label: "Image",
          ...IMAGE_CONFIGURATION
        }),
        {
          label: "Feature Images"
        }
      )
    }
  }),

  banner: component({
    label: "Banner",
    preview: () => null, // TODO: create preview component
    schema: {
      announcement: fields.text({ label: "Announcement" }),
      url: fields.url({ label: "URL" })
    }
  }),
};
