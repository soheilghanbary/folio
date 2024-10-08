import { MotionDiv } from '@/components/framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { experiences } from '@/config/experiences';
import { cn } from '@/lib/utils';

export function ExperienceSection() {
  return (
    <section
      className="animate-delay-700 animate-fade-up space-y-4 pb-4"
      id="experience"
    >
      <div>
        <h2 className="font-semibold text-2xl md:text-3xl">Experience</h2>
        <p className="text-sm/8">
          I like to create something powerful, simple, and clean.
        </p>
      </div>
      <ExperienceList />
    </section>
  );
}

function ExperienceList(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={cn('flex flex-col gap-4', props.className)}>
      {experiences.map((experience) => (
        <Card key={experience.company} className="w-full">
          <MotionDiv
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 },
            }}
          >
            <Card.Header>
              <Card.Title>
                {experience.title} · {experience.company}
              </Card.Title>
              <Card.Description>{experience.date}</Card.Description>
            </Card.Header>
          </MotionDiv>
          <Card.Content className="flex flex-col gap-4">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4 },
              }}
            >
              <p className="leading-7">{experience.description}</p>
            </MotionDiv>
            {experience.skills && (
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <MotionDiv
                    key={skill}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.1, delay: index / 40 },
                    }}
                  >
                    <Badge>{skill}</Badge>
                  </MotionDiv>
                ))}
              </div>
            )}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
