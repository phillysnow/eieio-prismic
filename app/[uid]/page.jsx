import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export const dynamicParams = false;

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("marketing_page", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("marketing_page", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("marketing_page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
