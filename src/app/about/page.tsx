import Image from 'next/image'
import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'

export default function Page() {
  return (
    <PageWrapper>
      <section className="flex flex-col">
        <div className="flex flex-1 flex-col items-center">
          <Image
            width={100}
            height={100}
            alt="Avatar"
            className="rounded-full"
            src="/assets/images/1516804819724.jpeg"
          />

          <div className="ml-4 flex">
            <span className="text-4xl font-light lowercase text-accent">
              Christian{' '}
            </span>
            <span className="text-4xl font-semibold lowercase text-accent">
              Soler
            </span>
          </div>

          <Typography size="lg" className="lowercase text-gray-500">
            Software Developer
          </Typography>
        </div>

        <Typography size="xl" weight="semibold" className="text-accent">
          About Me
        </Typography>

        <Typography>
          I am a dedicated Full Stack Developer with over six years of extensive
          experience in conceiving, designing, and executing applications and
          solutions using a diverse array of programming languages and
          technologies. I take great pride in my work and am known for my
          unwavering self-motivation, adept problem-solving abilities, and a
          strong inclination towards thriving in collaborative, high-pressure
          project environments.
        </Typography>
      </section>

      <section>
        <Typography size="xl" weight="semibold" className="text-accent">
          The Journey
        </Typography>

        <Typography>Talk about how I became a Software Developer</Typography>
      </section>

      <section>
        <Typography size="xl" weight="semibold" className="text-accent">
          The Site
        </Typography>

        <Typography>
          Chrsolr.me have been residing on the internet since 2015, and here are
          some particulars about its present form. It has been constructed using
          the following frameworks and tools
        </Typography>

        <ul className="mb-4 list-inside list-disc indent-4">
          <li>Meticulously crafted with Kitty and Neovim.</li>
          <li>Developed on NextJs 13, employing App Router and Typescript.</li>
          <li>Personally customized with an in-house theme using Tailwind.</li>
        </ul>
      </section>

      <section>
        <Typography size="xl" weight="semibold" className="text-accent">
          Work Experience
        </Typography>

        <Typography>
          Talk about by work experience in details, including tech stacks
        </Typography>

        <ul>
          <li>-- Coder Camps</li>
          <li>-- Preventice</li>
          <li>-- Innowatts</li>
        </ul>
      </section>
    </PageWrapper>
  )
}
