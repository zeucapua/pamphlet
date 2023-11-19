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
      <section className="flex flex-col gap-4 text-center items-center h-full lg:py-16">
          <h1 className="text-5xl font-bold">{ headline }</h1>
          <h2 className="text-2xl">{ tagline }</h2>

        <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {
          actions.map( (action) => 
            <a href={action.url ?? "/"} className="bg-neutral-900 w-fit px-8 py-4 rounded-xl shadow-2xl border border-white hover:bg-white hover:text-neutral-900 transition-all duration-300 text-white border border-black">
              { action.title }
            </a>
          )
        }
        </div>
      </section>
    )
  },
  feature: (props) => {
    // TODO: refactor with types
    return (
      <section className="flex flex-col lg:flex-row">
        <div className="lg:basis-1/2 flex flex-col gap-4 bg-neutral-700 p-8 m-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold">{ props.headline }</h2>
          <p className="text-lg">{ props.tagline }</p>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
          {
            props.actions.map( (action) => 
              <a href={action.url ?? "/"} className="bg-neutral-900 w-fit px-8 py-4 rounded-xl shadow-2xl border border-white hover:bg-white hover:text-neutral-900 transition-all duration-300">
                { action.title }
              </a>
            )
          }
          </div>
        </div>

        <div className={`${props.side && "order-first"} basis-1/2 p-8`}>
          <p>Images here</p>
        </div>
      </section>
    )
  },
  cta: (props : { headline: string, tagline: string, actions: { title: string, url: string }[]}) => {
    const { headline, tagline, actions } = props;
    return (
      <section className="flex flex-col gap-4 text-center bg-neutral-700 rounded-xl p-16 text-white items-center">
        <h1 className="text-5xl font-bold">{ headline }</h1>
        <h2 className="text-2xl">{ tagline }</h2>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
        {
          actions.map( (action) => 
            <a href={action.url ?? "/"} className="bg-neutral-900 w-fit px-8 py-4 rounded-xl shadow-2xl border border-white hover:bg-white hover:text-neutral-900 transition-all duration-300">
              { action.title }
            </a>
          )
        }
        </div>
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
