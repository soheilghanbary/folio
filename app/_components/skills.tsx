'use client';
import { Separator } from '@/components/ui/separator';
import { skills } from '@/config/skills';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <div id="skills" className="space-y-4">
      <div>
        <h2 className="font-semibold text-2xl md:text-3xl">Skills</h2>
        <p className="text-sm/8">
          My specialty is solving problems, and my toolbox includes:
        </p>
      </div>
      <section className="flex flex-wrap gap-4">
        <SkillList title="FrontEnd" items={skills.frontend} />
        <SkillList title="Backend" items={skills.backend} />
        <SkillList title="DataBase" items={skills.database} />
        <SkillList title="Tools" items={skills.tools} />
      </section>
    </div>
  );
}

const SkillList = ({
  title,
  items,
}: { title: string; items: SkillProps[] }) => (
  <div className="space-y-4 rounded-xl border p-4 shadow-sm">
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="font-bold"
    >
      {title}
    </motion.h3>
    <Separator />
    <ul className={'flex flex-wrap items-center gap-8'}>
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
          className="flex items-center gap-3 text-lg"
        >
          <item.icon className="h-6 w-6" />
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{item.title}</span>
            <span className="text-muted-foreground text-xs">{item.level}</span>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
);
