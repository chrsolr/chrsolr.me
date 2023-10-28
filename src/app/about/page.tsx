import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'

export default function Page() {
  return (
    <PageWrapper>
      <section>
        <Typography size="2xl" weight="semibold">
          <span className="text-accent">Christian </span>
          <span className="text-accent">Soler</span>
        </Typography>

        <Typography>
          As a passionate person, I pride myself in my work and every project I
          take on. I am self-motivated and driven by puzzles and challenges.
          These skills are what help me stand out as a developer. I enjoy
          working in a team environment and thrive under pressure when working
          on multiple projects.
        </Typography>

        <Typography>
          I am a Full Stack Developer with 6+ years of hands-on experience
          designing, developing, and implementing applications and solutions
          using a range of technologies and programming languages. I am looking
          for an opportunity in a company with a great environment. A place
          where I can expand my knowledge and utilize my experience, as well as
          become part of a team that is as passionate about programming as I am.
        </Typography>
      </section>

      <br />

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
          Talk about the purpose of the site and the technogy behind it
        </Typography>

        <ul>
          <li>- NextJs 13 (App Router)</li>
          <li>- Tailwind</li>
          <li>- Typescript</li>
          <li>- Neovim</li>
        </ul>

        <Typography>{''}</Typography>
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
