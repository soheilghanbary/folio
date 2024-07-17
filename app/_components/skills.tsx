'use client';
import { skills } from '@/config/skills';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <div id="skills" className="scroll-m-20 space-y-4">
      <div>
        <h2 className="font-semibold text-2xl md:text-3xl">Skills</h2>
        <p className="text-sm/8">
          My specialty is solving problems, and my toolbox includes:
        </p>
      </div>
      <section className="flex flex-wrap gap-4">
        <SkillList
          items={[
            ...skills.frontend,
            ...skills.backend,
            ...skills.database,
            ...skills.tools,
          ]}
        />
      </section>
    </div>
  );
}

const SkillList = ({ items }: { items: SkillProps[] }) => (
  <div className="space-y-4 rounded-xl border p-4 shadow-sm">
    <ul className={'flex flex-wrap items-center gap-8'}>
      {items.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
          className="flex items-center gap-3 text-lg"
        >
          <item.icon className="h-6 w-6" />
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">{item.name}</span>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
);
