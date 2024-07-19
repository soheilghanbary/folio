'use client';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { projects } from '@/config/projects';
import { motion } from 'framer-motion';

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="scroll-m-20 space-y-4">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="font-semibold text-2xl md:text-3xl"
      >
        Featured Projects
      </motion.h2>
      <section className="grid gap-4 md:grid-cols-3">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="space-y-2 rounded-xl border border-border/50 p-4 shadow-sm duration-200">
              {/* <img
                className="rounded-lg"
                src="https://cdn.dribbble.com/userupload/3491358/file/original-2c34eb4548cfc04a460b03d2e208603d.png?compress=1&resize=1600x1200"
                alt=""
              /> */}
              <div className="grid gap-2">
                <h2 className="font-bold">{p.name}</h2>
                <p className="text-muted-foreground text-sm/6">
                  {p.description}
                </p>
                <p className="text-muted-foreground text-xs">30 Agust 2024</p>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant={'secondary'}>React.JS</Badge>
                  <Badge variant={'secondary'}>TailwindCSS</Badge>
                  <Badge variant={'secondary'}>Next.JS</Badge>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <a
                    target="_blank"
                    href={p.link}
                    rel="noreferrer"
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'outline',
                    })}
                  >
                    Live Preview
                  </a>
                  <a
                    target="_blank"
                    href={p.source}
                    rel="noreferrer"
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'default',
                    })}
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};
