import { buttonVariants } from '@/components/ui/button';
import c from '@/config/site.json';
import { cn } from '@/lib/utils';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

export const FeaturedProjects = () => {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold text-2xl md:text-3xl">Featured Projects</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {c.featureProjects.map((p, i) => (
          <div
            key={p.name}
            className={cn(
              'group flex cursor-pointer flex-col justify-between rounded-xl border p-4 shadow-sm',
              i === 3 && 'md:col-span-2',
            )}
          >
            <div className="transition-all md:group-hover:pl-2">
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
