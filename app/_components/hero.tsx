import { MotionDiv } from '@/components/framer-motion';
import { FadeText } from '@/components/magicui/fade-text';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DownloadIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';

const AvalibleWork = () => (
  <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
);

const HeroTitle = () => {
  const t = useTranslations();
  return (
    <FadeText
      className="font-black text-2xl text-primary md:text-4xl"
      direction="up"
      framerProps={{
        show: { transition: { delay: 0.3 } },
      }}
      text={t('title')}
    />
  );
};

const HeroSubtitle = () => {
  const t = useTranslations();
  return (
    <FadeText
      className="text-center font-bold text-foreground text-lg"
      direction="up"
      framerProps={{
        show: { transition: { delay: 0.5 } },
      }}
      text={t('subtitle')}
    />
  );
};

const HeroDescription = () => {
  const t = useTranslations();
  return (
    <FadeText
      className="text-balance text-muted-foreground text-sm/6"
      direction="up"
      framerProps={{
        show: { transition: { delay: 0.7 } },
      }}
      text={t('description')}
    />
  );
};

const HeroButton = () => {
  const t = useTranslations();
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <a
        href="/resume.pdf"
        download={true}
        className={cn(
          buttonVariants({ variant: 'default', fullRounded: true }),
          'gap-2',
        )}
      >
        <DownloadIcon className="size-4" />
        {t('resumebtn')}
      </a>
    </MotionDiv>
  );
};

const HeroInfo = async () => {
  const locale = await getLocale();
  return (
    <div
      className={cn(
        'flex max-w-lg flex-col gap-4 text-center',
        locale === 'en' ? 'md:text-left' : 'md:text-right',
      )}
    >
      <HeroTitle />
      <HeroSubtitle />
      <HeroDescription />
      <HeroButton />
    </div>
  );
};

const HeroImage = () => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className="relative h-96 w-80 rounded-lg ring-2 ring-blue"
  >
    <Image
      alt="Soheil Ghanbary"
      src={'/profile.jpeg'}
      fill
      draggable="false"
      className="size-full scale-[.97] rounded-[inherit] object-cover"
    />
  </MotionDiv>
);

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
      <HeroInfo />
      <HeroImage />
    </div>
  );
};
