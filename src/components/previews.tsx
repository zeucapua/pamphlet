import type { PreviewProps, ObjectField } from "@keystatic/core";
import { hero_schema } from "./blocks";

export function solar_hero_preview(
  props : PreviewProps<ObjectField<typeof hero_schema>>
) {
  return (
    <section className="flex flex-col text-center">
      <h1 className="text-5xl font-bold">{ props.fields.headline.value }</h1>
      <h2 className="text-2xl">{ props.fields.tagline.value }</h2>
      {
        props.fields.actions.elements.map( (action) => 
          <a href={action.fields.url.value ?? "/"}>{ action.fields.title.value }</a>
        )
      }
    </section>
  );
}
