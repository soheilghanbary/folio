import { FlameIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

type NavItemProps = {
  href: string;
  label: string;
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border border-border/40 bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between gap-4">
        <Logo />
        <Navbar />
        <NavLinks />
      </nav>
    </header>
  );
}

const Logo = () => (
  <Link href={'/'} className="flex items-center gap-1 text-primary">
    <FlameIcon className="size-5" />
    <h6 className="font-extrabold text-lg/6">Soheil Ghanbary</h6>
  </Link>
);

const Navbar = () => (
  <ul className="hidden flex-1 items-center justify-center md:flex">
    <NavItem href="#" label="Home" />
    <NavItem href="#projects" label="Projects" />
    <NavItem href="#skills" label="Skills" />
    <NavItem href="#about" label="About" />
  </ul>
);

const NavItem = ({ href, label }: NavItemProps) => (
  <li>
    <a
      href={href}
      className="rounded-md px-4 py-2 font-medium text-muted-foreground text-sm duration-150 hover:bg-muted hover:text-foreground"
    >
      {label}
    </a>
  </li>
);

const NavLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <Button asChild size={'icon'} variant={'link'}>
        <a
          target="_blank"
          href={'https://github.com/soheilghanbary'}
          rel="noreferrer"
        >
          <GithubIcon className="size-5" />
        </a>
      </Button>
      <Button asChild size={'icon'} variant={'link'}>
        <a href="https://x.com/soheil_prog" target="_blank" rel="noreferrer">
          <TwitterIcon className="size-5" />
        </a>
      </Button>
      <ModeToggle />
    </div>
  );
};
