'use client';
import { cn } from '@/lib/utils';
import {
  BoltIcon,
  HomeIcon,
  LayoutGridIcon,
  type LucideIcon,
  UserIcon,
} from 'lucide-react';

export function Navigation() {
  return (
    <section className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-4 border border-border/40 bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/95 md:hidden">
      <NavigationLink href="#" label="Home" icon={HomeIcon} />
      <NavigationLink href="#projects" label="Projects" icon={LayoutGridIcon} />
      <NavigationLink href="#skills" label="skills" icon={BoltIcon} />
      <NavigationLink href="#about" label="About" icon={UserIcon} />
    </section>
  );
}

type NavigationLinkProps = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const NavigationLink = ({ href, icon: Icon, label }: NavigationLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        'flex flex-col items-center justify-center gap-2 pt-2 text-muted-foreground',
      )}
    >
      <Icon className="size-5" />
      <p className="text-muted-foreground text-xs">{label}</p>
    </a>
  );
};
