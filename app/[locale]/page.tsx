import { BackToTop } from '@/components/back-to-top';
import NumberTicker from '@/components/magicui/number-ticker';
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react';
import { ExperienceSection } from '../_components/experience-section';
import { GlobeSection } from '../_components/globe';
import { Hero } from '../_components/hero';
import { Projects } from '../_components/projects';
import { Skills } from '../_components/skills';
import { AboutMe } from '../_components/about-me';

export default function HomePage() {
  return (
    <section className="space-y-10">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <ExperienceSection />
      <RocketNow />
      <BackToTop />
    </section>
  );
}

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
