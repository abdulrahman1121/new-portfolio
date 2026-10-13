import React from "react";
import { artifacts } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return artifacts.map((artifact) => ({
    slug: artifact.slug,
  }));
}

const ArtifactPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const artifact = artifacts.find((a) => a.slug === slug);

  if (!artifact) return notFound();

  return (
    <div className="font-body py-3 px-4 sm:px-6 md:px-10">
      <div className="mt-30 text-wrap">
        <h2 className="font-grotesk font-semibold text-[32px] sm:text-[38px] md:text-[45px]">
          {artifact.name}
        </h2>
        <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[19px]">
          {artifact.show}
        </p>

        <div className="mt-8">
          {artifact.link ? (
            <Link target="_blank" href={artifact.link}>
              <Button className="!py-6 !bg-black/90 text-white !cursor-pointer">
                View Artifact <ExternalLink />
              </Button>
            </Link>
          ) : (
            <span className="inline-block rounded-lg border border-dashed px-4 py-3 text-sm text-gray-500">
              Link coming soon
            </span>
          )}
        </div>

        <div className="mt-10 rounded-xl border p-4 sm:p-6 md:p-8 bg-[#FAFAFA]">
          <span className="font-grotesk font-bold text-[16px] sm:text-[17px] md:text-[18px]">
            Reflection
          </span>
          {artifact.reflection ? (
            <p className="text-base text-wrap prose font-light text-gray-700 mt-2 whitespace-pre-line">
              {artifact.reflection}
            </p>
          ) : (
            <p className="text-base text-gray-500 italic mt-2">
              Reflection coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtifactPage;
