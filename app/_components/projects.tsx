'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { GithubIcon, LinkIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    name: 'ریپیتر من (MyRepeater)',
    description: 'وبسایت تخصصی فروش تقویت آنتن موبایل',
    title: 'SEO Engineer',
    link: 'https://myrepeater.ir',
    image: 'https://www.karlancer.com/api/file/x/x764/1723907835-WLfa.png',
    tags: ['SEO', 'Yoast', 'WordPress'],
  },
  {
    name: 'نوین بوستر (Novin Booster)',
    description: 'تولید کننده تجهیزات مخابراتی و رادیویی',
    title: 'WordPress Work',
    link: 'https://myrepeater.ir',
    image: 'https://www.karlancer.com/api/file/x/x764/1723908412-BkCo.jpg',
    tags: ['SEO', 'RankMath', 'WordPress'],
  },
  {
    name: 'وبکده (WebKade)',
    description: 'پلتفرم اشتراک گذاری وب اپلیکیشن',
    title: 'MERN Developer',
    link: 'https://webkade.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['React.JS', 'Express.Js', 'PostgreSQL'],
  },
  {
    name: 'خرجینو (Kharjino)',
    description: 'اپلیکیشن مدیریت محارج شخصی',
    title: 'Next.JS Developer',
    link: 'https://kharjino.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['Next.JS', 'Prisma', 'PostgreSQL'],
  },
  {
    name: 'شاپینو (Shopino)',
    description: 'اپلیکیشن ثبت اگهی بدون محدودیت',
    title: 'Next.JS Developer',
    link: 'https://shopino.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['Next.JS', 'DrizzleORM', 'PostgreSQL'],
  },
  {
    name: 'کیان استور (KianStore)',
    description: 'وب اپلیکیشن مدیریت انبارداری شرکت کیان ارتباط',
    title: 'Full Stack Developer',
    link: 'https://kianstore.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['Next.JS', 'Prisma', 'MySQL', 'TypeScript'],
  },
  {
    name: 'موویتو (Moovito)',
    description: 'وب اپلیکیشن اطلاعات فیلم TMDB',
    title: 'FrontEnd Developer',
    link: 'https://moovito.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['React.JS', 'TailwindCSS', 'Api'],
  },
  {
    name: 'پستینو (Postino)',
    description: 'نمونه شبکه اجتماعی نوشته با Next.JS',
    title: 'Next.JS Developer',
    link: 'https://postino.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908412-BkCo.jpg',
    tags: ['Next.JS', 'Hono.JS', 'DrizzleORM'],
  },
  {
    name: 'جابینو (Jobino)',
    description: 'اپلیکیشن اشتراک گذاری مشاغل',
    title: 'React.JS Developer',
    link: 'https://jobino.vercel.app',
    image: 'https://www.karlancer.com/api/file/x/x352_211/1723908660-y1Z9.jpg',
    tags: ['Next.JS', 'Prisma', 'TypeScript'],
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectItem key={p.name} {...p} />
        ))}
      </div>
      <Button
        asChild
        fullRounded
        variant={'blue'}
        className="mx-auto w-fit gap-2"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={'https://github.com/soheilghanbary'}
        >
          <GithubIcon className="size-4" />
          مشاهده بیشتر
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
    <h2 className="font-bold">{name}</h2>
    <p className="text-muted-foreground text-xs">{description}</p>
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
