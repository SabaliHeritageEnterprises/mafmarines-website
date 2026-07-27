import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";

// params is now a Promise – await it
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}

// Generate static paths
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata – also async with awaited params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.name} | Mafmarines Solutions`,
    description: service.short,
  };
}