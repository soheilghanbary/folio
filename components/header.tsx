import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GithubIcon, Languages, PalmtreeIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import { IranFlag, UnitedKingdomFlag } from './icons/flags';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

const Logo = () => (
  <Link href={'/'} className="flex items-center gap-2 text-primary">
    <PalmtreeIcon className="size-6" />
    <h6 className="font-black text-lg/6">SOHEIL</h6>
  </Link>
);

const SelectLang = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant={'ghost'}>
          <Languages className="size-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={'/fa'}>
            <IranFlag className="mr-2 size-4" />
            Persian
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'/en'}>
            <UnitedKingdomFlag className="mr-2 size-4" />
            English
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function SiteHeader() {
  return (
    <header className="w-full border-border/40 border-b bg-card px-4 py-2 md:p-4 dark:bg-background">
      <nav className="container flex items-center justify-between gap-4">
        <Logo />
        <NavLinks />
      </nav>
    </header>
  );
}

const NavLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <SelectLang />
      <ModeToggle />
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
    </div>
  );
};
