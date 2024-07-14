import {
  CSSIcon,
  FigmaIcon,
  GraphQLIcon,
  HonoIcon,
  JavaScriptIcon,
  MaterialUICon,
  MongoDBIcon,
  NextjsIcon,
  NodeIcon,
  PlanetScaleIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  RedisIcon,
  ReduxIcon,
  SQLiteIcon,
  SassIcon,
  SupabaseIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  WordPressIcon,
} from "@/components/icons";
import { GithubIcon } from "lucide-react";

export const skills = {
  frontend: [
    {
      icon: ReactIcon,
      title: "React.JS",
      level: "advanced",
    },
    {
      icon: TypeScriptIcon,
      title: "TypeScript",
      level: "advanced",
    },
    {
      icon: JavaScriptIcon,
      title: "JavaScript ES2023",
      level: "advanced",
    },
    {
      icon: TailwindCSSIcon,
      title: "Tailwind",
      level: "advanced",
    },
    {
      icon: CSSIcon,
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
      icon: MaterialUICon,
      title: "MUI",
      level: "advanced",
    },
  ],
  backend: [
    {
      icon: NextjsIcon,
      title: "Next.JS",
      level: "advanced",
    },
    {
      icon: PrismaIcon,
      title: "Prisma",
      level: "advanced",
    },
    {
      icon: HonoIcon,
      title: "Hono.JS",
      level: "advanced",
    },
    {
      icon: NodeIcon,
      title: "Node.JS",
      level: "medium",
    },
    {
      icon: GraphQLIcon,
      title: "GraphQL",
      level: "basic",
    },
  ],
  tools: [
    {
      icon: GithubIcon,
      title: "Github",
      level: "advanced",
    },
    {
      icon: WordPressIcon,
      title: "WordPress",
      level: "advanced",
    },
    {
      icon: FigmaIcon,
      title: "Figma",
      level: "medium",
    },
  ],
  database: [
    {
      icon: PostgreSQLIcon,
      title: "PostgreSQL",
      level: "advanced",
    },
    {
      icon: SQLiteIcon,
      title: "SQLite",
      level: "advanced",
    },
    {
      icon: MongoDBIcon,
      title: "MongoDB",
      level: "medium",
    },
    {
      icon: RedisIcon,
      title: "Redis",
      level: "basic",
    },
    {
      icon: SupabaseIcon,
      title: "Supabase",
      level: "medium",
    },
    {
      icon: PlanetScaleIcon,
      title: "PlanetScale",
      level: "medium",
    },
  ],
};
