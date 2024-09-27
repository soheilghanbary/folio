'use client';
import { skills } from '@/config/skills';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const Skills = () => {
  const t = useTranslations('skills');
  return (
    <div className="grid gap-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.5 }}
        className="text-center font-black text-2xl"
      >
        {t('title')}
      </motion.h2>
      <SkillList
        items={[
          ...skills.frontend,
          ...skills.backend,
          ...skills.tools,
          ...skills.database,
        ]}
      />
    </div>
  );
};

export const SkillList = ({ items }: { items: SkillProps[] }) => (
  <ul className={'flex flex-wrap items-center gap-8'}>
    {items.map((item, i) => (
      <motion.li
        key={item.name}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
        className="flex items-center gap-2 text-lg"
      >
        <item.icon className="h-6 w-6" />
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm">{item.name}</span>
        </div>
      </motion.li>
    ))}
  </ul>
);
