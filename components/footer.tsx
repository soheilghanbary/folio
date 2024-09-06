import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Signature = () => (
  <Image src="/signature.png" alt="Vercel" width={72} height={16} />
);

export function SiteFooter() {
  const t = useTranslations('footer');
  return (
    <footer className="border-border/50 border-t">
      <section className="container mx-auto flex flex-col-reverse items-center justify-between gap-4 p-4 md:flex-row">
        <p className="text-balance text-center text-foreground text-sm/6">
          {t('description')}
        </p>
        <Signature />
      </section>
    </footer>
  );
}
