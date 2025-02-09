import type { Metadata } from "next";
import Link from "next/link";
import { BlurFadeDemo } from "@/components/magicui/blur-fade-demo";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import PageHeader from '@/components/page-header';
import config from '@/config';
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const { title } = config;

export const metadata: Metadata = {
  title: `Gallery | ${title}`,
};

function Gallery() {
  return (
    <article>
      <PageHeader header="Shu's Gallery" />
      <BlurFadeDemo />
    </article>
  );
};

export default Gallery;
