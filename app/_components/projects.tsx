'use client';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { GithubIcon, LinkIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export function Projects() {
  const locale = useLocale();
  const t = useTranslations('projects');

  return (
    <div className="grid gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="text-center font-black text-2xl"
      >
        {t('title')}
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectItem
            key={p.name}
            {...p}
            name={locale === 'en' ? p.name : p.nameFa}
            description={locale === 'en' ? p.description : p.descriptionFa}
          />
        ))}
      </div>
      <Button
        asChild
        fullRounded
        variant={'secondary'}
        className="mx-auto w-fit gap-2"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={'https://github.com/soheilghanbary'}
        >
          <GithubIcon className="size-4" />
          {t('morebtn')}
        </a>
      </Button>
    </div>
  );
}

const ProjectItem = ({
  name,
  description,
  tags,
  title,
  link,
}: (typeof projects)[0]) => (
  <div className="grid gap-2.5 rounded-xl border border-border/40 bg-card p-4 shadow-sm">
    <a href={link} target="_blank" rel="noreferrer">
      <h2 className="font-bold">{name}</h2>
    </a>
    <p className="text-foreground/80 text-xs">{description}</p>
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="border-separate rounded-md border bg-muted/40 px-2 py-0.5 font-semibold text-muted-foreground text-xs shadow"
        >
          {t}
        </span>
      ))}
    </div>
    <hr className="border-border/40" />
    <div dir="rtl" className="flex items-center justify-between gap-2">
      <Button variant={'ghost'} size={'icon'}>
        <GithubIcon className="size-4" />
      </Button>
      <Button asChild variant={'ghost'} size={'icon'}>
        <a href={link} target="_blank" rel="noreferrer">
          <LinkIcon className="size-4" />
        </a>
      </Button>
      <span className="flex-1 text-left font-medium text-sm">{title}</span>
    </div>
  </div>
);
