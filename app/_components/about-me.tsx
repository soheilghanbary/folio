'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { GlobeSection } from './globe';

export const AboutMe = () => {
  const t = useTranslations('about');
  return (
    <section className="grid gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="text-center font-black text-2xl"
      >
        {t('title')}
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-2">
        <GlobeSection />
        <AboutConnect />
      </div>
    </section>
  );
};

const AboutConnect = () => {
  const t = useTranslations('about');
  return (
    <section className="space-y-6 rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="font-bold text-xl">{t('subtitle')}</h2>
      <p className="text-muted-foreground text-sm/6">{t('description')}</p>
      <div className="grid gap-2">
        <Label>{t('namefield')}</Label>
        <Input type="text" />
      </div>
      <div className="grid gap-2">
        <Label>{t('emailfield')}</Label>
        <Input type="email" />
      </div>
      <div className="grid gap-2">
        <Label>{t('messagefield')}</Label>
        <Textarea />
      </div>
      <div className="flex items-center justify-between">
        <Button className="gap-2">
          {t('sendbtn')}
          <SendIcon className="size-4" />
        </Button>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <a
            href="https://github.com/soheilghanbary"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/soheilghanbary/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="mailto:soli.ghanbary@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <MailIcon className="size-5" />
          </a>
          <a
            href="tel:+989199973120"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'icon', variant: 'ghost' })}
          >
            <PhoneIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
