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
      name: "React.JS",
      level: "advanced",
    },
    {
      icon: TypeScriptIcon,
      name: "TypeScript",
      level: "advanced",
    },
    {
      icon: JavaScriptIcon,
      name: "JavaScript ES2023",
      level: "advanced",
    },
    {
      icon: TailwindCSSIcon,
      name: "Tailwind",
      level: "advanced",
    },
    {
      icon: CSSIcon,
      name: "CSS3",
      level: "advanced",
    },
    {
      icon: SassIcon,
      name: "Sass",
      level: "advanced",
    },
    {
      icon: ReduxIcon,
      name: "Redux",
      level: "medium",
    },
    {
      icon: MaterialUICon,
      name: "MUI",
      level: "advanced",
    },
  ],
  backend: [
    {
      icon: NextjsIcon,
      name: "Next.JS",
      level: "advanced",
    },
    {
      icon: PrismaIcon,
      name: "Prisma",
      level: "advanced",
    },
    {
      icon: HonoIcon,
      name: "Hono.JS",
      level: "advanced",
    },
    {
      icon: NodeIcon,
      name: "Node.JS",
      level: "medium",
    },
    {
      icon: GraphQLIcon,
      name: "GraphQL",
      level: "basic",
    },
  ],
  tools: [
    {
      icon: GithubIcon,
      name: "Github",
      level: "advanced",
    },
    {
      icon: WordPressIcon,
      name: "WordPress",
      level: "advanced",
    },
    {
      icon: FigmaIcon,
      name: "Figma",
      level: "medium",
    },
  ],
  database: [
    {
      icon: PostgreSQLIcon,
      name: "PostgreSQL",
      level: "advanced",
    },
    {
      icon: SQLiteIcon,
      name: "SQLite",
      level: "advanced",
    },
    {
      icon: MongoDBIcon,
      name: "MongoDB",
      level: "medium",
    },
    {
      icon: RedisIcon,
      name: "Redis",
      level: "basic",
    },
    {
      icon: SupabaseIcon,
      name: "Supabase",
      level: "medium",
    },
    {
      icon: PlanetScaleIcon,
      name: "PlanetScale",
      level: "medium",
    },
  ],
};
