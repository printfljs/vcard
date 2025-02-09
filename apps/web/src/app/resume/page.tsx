import type { Metadata } from "next";
import React from "react";
import TimeLine from '@/components/resume/timeline';
import PageHeader from '@/components/page-header';
import config from '@/config';
import DownloadCV from "@/components/resume/download-cv";
import { getTranslations } from 'next-intl/server';

const { title } = config;

const { resume } = config;
const { professionalExperiences } = resume;
const { educations } = resume;
const { projectExperiences } = resume;
const { skills } = resume;

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

async function Resume() {
  const t = await getTranslations();

  return (
    <article>
      <PageHeader header={t("resume.title")} />
      <DownloadCV />
      <TimeLine data={educations} />
      <TimeLine data={professionalExperiences} />
      <TimeLine data={projectExperiences} />
      <TimeLine data={skills} />
    </article >
  );
}

export default Resume
