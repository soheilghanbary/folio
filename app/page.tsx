import { FadeText } from '@/components/magicui/fade-text';
import NumberTicker from '@/components/magicui/number-ticker';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { buttonVariants } from '@/components/ui/button';
import c from '@/data/common.json';
import { cn } from '@/lib/utils';
import {
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react';
import Link from 'next/link';
import { GlobeSection } from './_components/globe';
import { Skills } from './_components/skills';

export default function HomePage() {
  return (
    <section className="space-y-10">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <AboutMe />
    </section>
  );
}

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-80 max-w-screen-sm items-center justify-center">
      <div className="space-y-2 text-center">
        <ShimmerButton className="mx-auto shadow-2xl">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="ml-2 whitespace-pre-wrap text-center font-medium text-foreground text-xs leading-none tracking-tight dark:from-white dark:to-slate-900/10">
            Available for work
          </span>
        </ShimmerButton>
        <FadeText
          className="font-bold text-2xl text-primary md:text-4xl"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.3 } },
          }}
          text={c.title}
        />
        <FadeText
          className="text-center font-bold text-2xl text-foreground md:text-4xl"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.5 } },
          }}
          text={c.subTitle}
        />
        <FadeText
          className="text-balance text-muted-foreground text-sm/6"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.7 } },
          }}
          text={c.description}
        />
        <div className="flex items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download={true}
            className={cn(buttonVariants({ fullRounded: true }))}
          >
            <DownloadIcon className="mr-2 size-4" />
            Get resume
          </a>
          <a
            target="_blank"
            href="https://soheilghanbary.ir"
            className={cn(
              buttonVariants({
                fullRounded: true,
                variant: 'outline',
              }),
            )}
            rel="noreferrer"
          >
            <GithubIcon className="mr-2 size-4" />
            Source
          </a>
        </div>
      </div>
    </section>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="space-y-4">
      <h2 className="font-extrabold text-2xl text-primary">
        Featured Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {c.featureProjects.map((p, i) => (
          <div
            key={p.name}
            className={cn(
              'group flex cursor-pointer flex-col justify-between rounded-xl border p-4 shadow-sm',
              i === 3 && 'md:col-span-2',
            )}
          >
            <div className="transition-all group-hover:pl-2">
              <h2 className="font-bold text-base/8">{p.name}</h2>
              <p className="text-muted-foreground text-sm/6">{p.description}</p>
            </div>
            <Link
              href={p.url}
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  fullRounded: true,
                }),
                'mt-2.5 w-fit',
              )}
            >
              <GithubIcon className="mr-2 size-4" />
              Source code
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="space-y-8">
      <h2 className="font-extrabold text-2xl text-primary">About Me</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <GlobeSection />
        <AboutConnect />
      </div>
    </section>
  );
};

const AboutConnect = () => (
  <section className="space-y-6 rounded-xl border p-6 shadow-sm">
    <h2 className="font-bold text-xl">About Me</h2>
    <div className="space-y-4">
      <a
        href="https://github.com/soheilghanbary"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <GithubIcon className="size-5" />
        GitHub
      </a>
      <a
        href="https://x.com/soheil_prog"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <TwitterIcon className="size-5" />
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/soheilghanbary/"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <LinkedinIcon className="size-5" />
        LinkedIn
      </a>
      <a
        href="mailto:soli.ghanbary@gmail.com"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <MailIcon className="size-5" />
        Contact Mail
      </a>
      <a
        href="tel:+989199973120"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <PhoneIcon className="size-5" />
        +98 919 997 3120
      </a>
    </div>
  </section>
);

const RocketNow = () => (
  <div className="grid gap-4">
    <section className="space-y-6 rounded-xl border p-6 shadow-sm">
      <h2 className="font-bold text-xl">🚀 Rocket Now</h2>
      <div className="text-muted-foreground">
        <p className="font-medium">
          Coding Hours: <NumberTicker value={124587} />
        </p>
        <p className="font-medium">
          Project Success: <NumberTicker value={25} />
        </p>
        <p className="font-medium">
          Project Working: <NumberTicker value={5} />
        </p>
      </div>
    </section>
  </div>
);
