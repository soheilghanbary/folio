"use client";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";
import {
  CssIcon,
  NestIcon,
  LaravelIcon,
  NuxtIcon,
  WordpressIcon,
  PrismaIcon,
  TRPCIcon,
  NodeIcon,
  GithubIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
  SassIcon,
  ReduxIcon,
  VueIcon,
  JsIcon,
  TailwindIcon,
} from "~/assets/icons";
import useIntersectionObserver from "~/lib/hooks/useIntersectionObserver";
import styles from "~/styles/modules/skills.module.css";

interface SkillsProps {
  title: string;
}

interface SkillProps {
  icon: any;
  title: string;
  level: string;
}

const skills: SkillProps[] = [
  {
    icon: ReactIcon,
    title: "React",
    level: "advanced",
  },
  {
    icon: TypeScriptIcon,
    title: "TypeScript",
    level: "advanced",
  },
  {
    icon: JsIcon,
    title: "JavaScript ES2023",
    level: "advanced",
  },
  {
    icon: TailwindIcon,
    title: "Tailwind",
    level: "advanced",
  },
  {
    icon: CssIcon,
    title: "CSS3",
    level: "advanced",
  },
  {
    icon: SassIcon,
    title: "Sass",
    level: "advanced",
  },
  {
    icon: ReduxIcon,
    title: "Redux",
    level: "medium",
  },
  {
    icon: NodeIcon,
    title: "Node.JS",
    level: "medium",
  },
  {
    icon: NestIcon,
    title: "Nest.JS",
    level: "advanced",
  },
  {
    icon: TRPCIcon,
    title: "tRPC",
    level: "advanced",
  },
  {
    icon: PrismaIcon,
    title: "Prisma",
    level: "advanced",
  },
  {
    icon: GithubIcon,
    title: "Github",
    level: "advanced",
  },
  {
    icon: LaravelIcon,
    title: "Laravel",
    level: "advanced",
  },
  {
    icon: WordpressIcon,
    title: "WordPress",
    level: "advanced",
  },
  {
    icon: VueIcon,
    title: "Vue.JS",
    level: "medium",
  },
  {
    icon: NuxtIcon,
    title: "Nuxt",
    level: "medium",
  },
  {
    icon: PythonIcon,
    title: "Python",
    level: "medium",
  },
];

export default function Skills({ title }: SkillsProps) {
  const triggerRef = useRef<any>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });
  const itemProps = useSpring({
    from: { y: 50, opacity: 0 },
    to: {
      y: dataRef?.isIntersecting ? 0 : 50,
      opacity: dataRef?.isIntersecting ? 1 : 0,
    },
    delay: 300,
    config: {
      duration: 600,
    },
  });

  return (
    <div id="skills" className={`${styles.container}`} ref={triggerRef}>
      <animated.h2 style={itemProps}>{title}</animated.h2>
      <ul className={styles.items}>
        {skills.map((item, i) => {
          const itemProps = useSpring({
            from: { opacity: 0 },
            to: {
              opacity: dataRef?.isIntersecting ? 1 : 0,
            },
            delay: i * 100,
            config: {
              duration: 1000,
            },
          });
          return (
            <animated.li key={item.title} style={itemProps}>
              <item.icon />
              <div className="flex items-center gap-2">
                <span className="text-heading">{item.title}</span>
                <span className="text-sm text-body">{item.level}</span>
              </div>
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
}