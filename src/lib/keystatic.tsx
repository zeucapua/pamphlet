import { createReader } from "@keystatic/core/reader";
import { type InferRenderersForComponentBlocks } from "@keystatic/core";

import config from "../../keystatic.config.ts";

// used to get data from CMS
export const reader = createReader(process.cwd(), config);

// use different renderers based on theme
export const solar_base_renderer = {};
export const solar_componentBlocks_renderers = {
  hero: (props : { headline: string, tagline: string, actions: { title: string, url: string }[]}) => {
    const { headline, tagline, actions } = props;
    return (
      <section className="flex flex-col gap-4 text-center">
        <h1 className="text-5xl font-bold">{ headline }</h1>
        <h2 className="text-2xl">{ tagline }</h2>
        {
          actions.map( (action) => 
            <a href={action.url ?? "/"}>{ action.title }</a>
          )
        }
      </section>
    )
  },
  cta: (props) => {
    console.log("Solar CTA", { props });
    return (
      <section>
        <p>Hi</p>
      </section>
    )
  },
  banner: (props) => {
    console.log("Solar Banner", { props });
    return (
      <section>
        <p>Hi</p>
      </section>
    )
  },
} satisfies InferRenderersForComponentBlocks<typeof componentBlocks>;

export const lunar_base_renderer = {};
export const lunar_componentBlocks_renderers = {};
