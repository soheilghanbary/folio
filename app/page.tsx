import NumberTicker from '@/components/magicui/number-ticker';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react';
import { DockDemo } from './_components/dock';
import { ExperienceSection } from './_components/experience-section';
import { FeaturedProjects } from './_components/featured-projects';
import { GlobeSection } from './_components/globe';
import { Hero } from './_components/hero';
import { Skills } from './_components/skills';

export default function HomePage() {
  return (
    <section className="space-y-10">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <AboutMe />
      <ExperienceSection />
      <DockDemo />
    </section>
  );
}

const AboutMe = () => {
  return (
    <section className="space-y-8">
      <h2 className="font-semibold text-2xl md:text-3xl">About Me</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <GlobeSection />
        <AboutConnect />
      </div>
    </section>
  );
};

const AboutConnect = () => (
  <section className="space-y-6 rounded-xl border p-6 shadow-sm">
    <h2 className="font-bold text-xl">About Me</h2>
    <div className="space-y-4">
      <a
        href="https://github.com/soheilghanbary"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <GithubIcon className="size-5" />
        GitHub
      </a>
      <a
        href="https://x.com/soheil_prog"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <TwitterIcon className="size-5" />
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/soheilghanbary/"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <LinkedinIcon className="size-5" />
        LinkedIn
      </a>
      <a
        href="mailto:soli.ghanbary@gmail.com"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <MailIcon className="size-5" />
        Contact Mail
      </a>
      <a
        href="tel:+989199973120"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"
        rel="noreferrer"
      >
        <PhoneIcon className="size-5" />
        +98 919 997 3120
      </a>
    </div>
  </section>
);

const RocketNow = () => (
  <div className="grid gap-4">
    <section className="space-y-6 rounded-xl border p-6 shadow-sm">
      <h2 className="font-bold text-xl">🚀 Rocket Now</h2>
      <div className="text-muted-foreground">
        <p className="font-medium">
          Coding Hours: <NumberTicker value={124587} />
        </p>
        <p className="font-medium">
          Project Success: <NumberTicker value={25} />
        </p>
        <p className="font-medium">
          Project Working: <NumberTicker value={5} />
        </p>
      </div>
    </section>
  </div>
);
