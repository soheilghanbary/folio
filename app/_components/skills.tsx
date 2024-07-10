import Marquee from '@/components/magicui/marquee';
import { skills } from '@/data/skills';
import { cn } from '@/lib/utils';

type SkillProps = (typeof skills)[0];

const SkillCard = ({ icon: Icon, name, description }: SkillProps) => {
  return (
    <div
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <Icon className="size-8" />
      <h2 className="font-bold text-base/8">{name}</h2>
      <p className="text-muted-foreground text-xs/5">{description}</p>
    </div>
  );
};

export function Skills() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-sm">
      <h2 className="mb-8 font-bold text-4xl">My Skills</h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
