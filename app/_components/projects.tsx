'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { GithubIcon, ImageIcon, LinkIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    name: 'ریپیتر من (MyRepeater)',
    description: 'وبسایت تخصصی فروش تقویت آنتن موبایل',
    title: 'SEO Engineer',
    link: 'https://myrepeater.ir',
  },
  {
    name: 'نوین بوستر (Novin Booster)',
    description: 'تولید کننده تجهیزات مخابراتی و رادیویی',
    title: 'WordPress Work',
    link: 'https://myrepeater.ir',
  },
  {
    name: 'وبکده (WebKade)',
    description: 'پلتفرم اشتراک گذاری وب اپلیکیشن',
    title: 'Next.JS Developer',
    link: 'https://webkade.vercel.app',
  },
  {
    name: 'خرجینو (Kharjino)',
    description: 'اپلیکیشن مدیریت محارج شخصی',
    title: 'Next.JS Developer',
    link: 'https://kharjino.vercel.app',
  },
  {
    name: 'شاپینو (Shopino)',
    description: 'اپلیکیشن ثبت اگهی بدون محدودیت',
    title: 'Next.JS Developer',
    link: 'https://shopino.vercel.app',
  },
  {
    name: 'کیان استور (KianStore)',
    description: 'وب اپلیکیشن مدیریت انبارداری شرکت کیان ارتباط',
    title: 'Full Stack Developer',
    link: 'https://kianstore.vercel.app',
  },
  {
    name: 'موویتو (Moovito)',
    description: 'وب اپلیکیشن اطلاعات فیلم TMDB',
    title: 'FrontEnd Developer',
    link: 'https://moovito.vercel.app',
  },
  {
    name: 'پستینو (Postino)',
    description: 'نمونه شبکه اجتماعی نوشته با Next.JS',
    title: 'Next.JS Developer',
    link: 'https://postino.vercel.app',
  },
  {
    name: 'جابینو (Jobino)',
    description: 'اپلیکیشن اشتراک گذاری مشاغل',
    title: 'React.JS Developer',
    link: 'https://jobino.vercel.app',
  },
];

export function Projects() {
  const t = useTranslations('projects');
  return (
    <div className="grid gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="text-center font-black text-2xl"
      >
        {t('title')}
      </motion.h2>
      <ProjectList />
      <Button
        asChild
        fullRounded
        variant={'blue'}
        className="mx-auto w-fit gap-2"
      >
        <a href={'https://github.com/soheilghanbary'}>
          <GithubIcon className="size-4" />
          مشاهده بیشتر
        </a>
      </Button>
    </div>
  );
}

const ProjectList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectItem key={p.name} {...p} />
      ))}
    </div>
  );
};

const ProjectItem = ({
  name,
  description,
  title,
  link,
}: (typeof projects)[0]) => (
  <div className="grid gap-2.5">
    <div className="flex h-64 w-full items-center justify-center rounded-lg bg-muted dark:bg-muted/40">
      <ImageIcon className="size-8" />
    </div>
    <h2 className="font-bold">{name}</h2>
    <p className="text-muted-foreground text-xs">{description}</p>
    <hr className="border-border/40" />
    <div className="flex items-center justify-between gap-2">
      <Button variant={'outline'} size={'icon'}>
        <GithubIcon className="size-4" />
      </Button>
      <Button asChild variant={'outline'} size={'icon'}>
        <a href={link} target="_blank" rel="noreferrer">
          <LinkIcon className="size-4" />
        </a>
      </Button>
      <span className="flex-1 text-left font-medium text-sm">{title}</span>
    </div>
  </div>
);
