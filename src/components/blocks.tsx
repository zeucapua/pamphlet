import { component, fields } from "@keystatic/core";
import { solar_hero_preview } from "../components/previews.tsx";

// schemas
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

  banner: component({
    label: "Banner",
    preview: () => null, // TODO: create preview component
    schema: {
      announcement: fields.text({ label: "Announcement" }),
      url: fields.url({ label: "URL" })
    }
  }),
};
