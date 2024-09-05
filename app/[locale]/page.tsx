import { BackToTop } from '@/components/back-to-top';
import { AboutMe } from '../_components/about-me';
import { Hero } from '../_components/hero';
import { Projects } from '../_components/projects';
import { Skills } from '../_components/skills';

export default function HomePage() {
  return (
    <section className="grid gap-20">
      <Hero />
      <Skills />
      <Projects />
      <AboutMe />
      <BackToTop />
    </section>
  );
}
