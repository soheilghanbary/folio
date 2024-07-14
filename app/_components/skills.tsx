'use client';
import {
  CSSIcon,
  GithubIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodeIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  WordPressIcon,
} from '@/components/icons';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SkillProps {
  icon: any;
  title: string;
  level: string;
}

const skills: SkillProps[] = [
  {
    icon: ReactIcon,
    title: 'React.JS',
    level: 'advanced',
  },
  {
    icon: TypeScriptIcon,
    title: 'TypeScript',
    level: 'advanced',
  },
  {
    icon: NextjsIcon,
    title: 'Next.JS',
    level: 'advanced',
  },
  {
    icon: JavaScriptIcon,
    title: 'JavaScript ES2023',
    level: 'advanced',
  },
  {
    icon: TailwindCSSIcon,
    title: 'Tailwind',
    level: 'advanced',
  },
  {
    icon: CSSIcon,
    title: 'CSS3',
    level: 'advanced',
  },
  {
    icon: SassIcon,
    title: 'Sass',
    level: 'advanced',
  },
  {
    icon: ReduxIcon,
    title: 'Redux',
    level: 'medium',
  },
  {
    icon: NodeIcon,
    title: 'Node.JS',
    level: 'medium',
  },
  {
    icon: ReactIcon,
    title: 'Nest.JS',
    level: 'advanced',
  },
  {
    icon: PrismaIcon,
    title: 'Prisma',
    level: 'advanced',
  },
  {
    icon: GithubIcon,
    title: 'Github',
    level: 'advanced',
  },
  {
    icon: WordPressIcon,
    title: 'WordPress',
    level: 'advanced',
  },
  {
    icon: PostgreSQLIcon,
    title: 'PostgreSQL',
    level: 'advanced',
  },
];

export function Skills() {
  return (
    <div id="skills">
      <h2 className="mb-10 font-semibold text-2xl text-heading">Skills</h2>
      <ul className={'flex flex-wrap items-center gap-8'}>
        {skills.map((item, i) => (
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
              <span className="text-muted-foreground text-xs">
                {item.level}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
