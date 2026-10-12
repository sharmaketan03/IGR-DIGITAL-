import config from "@payload-config";
import { RootPage } from "@payloadcms/next/views";
import { importMap } from "./importMap";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{
    segments?: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}) {
  return RootPage({
    config,
    importMap,
    params: params as any,
    searchParams: searchParams as any,
  });
}