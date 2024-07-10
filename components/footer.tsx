import Image from 'next/image';

const Signature = () => (
  <Image src="/signature.png" alt="Vercel" width={72} height={16} />
);

export function SiteFooter() {
  return (
    <footer className="border-border/50 border-t">
      <section className="container mx-auto flex flex-col items-center justify-center space-y-4 p-4">
        <p className="max-w-sm text-balance text-center text-foreground text-sm/6 tracking-wider">
          Soheil a professional web developer, specialize in building websites
          and web applications.
        </p>
        <Signature />
      </section>
    </footer>
  );
}
