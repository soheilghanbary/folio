import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Signature = () => (
  <Image
    src="/signature.png"
    alt="Vercel"
    width={72}
    height={16}
    quality={100}
    sizes="100vw"
    className="dark:invert"
  />
);

export function SiteFooter() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-border/50 bg-card dark:bg-background">
      <section className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 p-4 md:flex-row">
        <p className="text-balance text-center text-sm/6 text-foreground">
          {t('description')}
        </p>
        <Signature />
      </section>
    </footer>
  );
}
