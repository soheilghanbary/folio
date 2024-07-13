import { MotionDiv } from '@/components/framer-motion';
import { FadeText } from '@/components/magicui/fade-text';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { buttonVariants } from '@/components/ui/button';
import c from '@/config/site.json';
import { cn } from '@/lib/utils';
import { DownloadIcon, GithubIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="mx-auto flex min-h-96 max-w-screen-sm items-center justify-center">
      <div className="space-y-2 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ShimmerButton className="mx-auto shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="ml-2 whitespace-pre-wrap text-center font-medium text-foreground text-xs leading-none tracking-tight dark:from-white dark:to-slate-900/10">
              Available for work
            </span>
          </ShimmerButton>
        </MotionDiv>
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
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
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
        </MotionDiv>
      </div>
    </section>
  );
};
