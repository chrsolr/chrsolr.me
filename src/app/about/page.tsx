/* eslint-disable react/no-unescaped-entities */
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

        <Typography>
          My journey in the world of technology began when a friend in the
          Bronx, NYC, introduced me to a virus he had programmed on Windows 3.1
          using a floppy disk. At that time, I had little exposure to computers,
          but I was fascinated by what technology could do.
        </Typography>

        <Typography>
          As I grew older, I started learning the basics of computer hardware
          and troubleshooting, but coding was still a foreign concept to me. It
          wasn't until I was 29 that I decided to return to school, embarking on
          a career path in information technology. Luckily, a nearby college had
          a program that allowed students to earn their GED and an associate's
          degree in just two years, and I qualified for it. This was a turning
          point in my life, a moment when I realized I could achieve something
          significant.
        </Typography>

        <Typography>
          Initially, I explored various aspects of IT, taking Unix and
          networking classes, only to find that they didn't resonate with me. My
          true passion emerged when I took an introductory C++ class, and I fell
          in love with programming.Initially, I explored various aspects of IT,
          taking Unix and networking classes, only to find that they didn't
          resonate with me. My true passion emerged when I took an introductory
          C++ class, and I fell in love with programming.
        </Typography>

        <Typography>
          Around the same time, the smartphone industry was booming, and I began
          researching programming languages for my HTC 7 Windows phone. C#
          caught my attention, and I started watching YouTube tutorials to learn
          it. My first application project was a calculator app, and I also
          created an Xbox achievement app where I stored data in an XML file.
        </Typography>

        <Typography>
          After completing my associate's degree, my wife and I decided to move
          to Rhode Island, where I could pursue a computer science degree. This
          decision had its pros and cons. While it allowed me to focus on my
          coding passion and excel in class, my grades suffered as I prioritized
          coding over other subjects.
        </Typography>

        <Typography>
          A few years later, we relocated to Texas, and I considered returning
          to college. However, I faced the prospect of losing 30 credits, so I
          opted for a different path. I enrolled in a coding boot camp, which
          was a valuable experience due to my prior coding education and the
          shared enthusiasm for programming among my peers.A few years later, we
          relocated to Texas, and I considered returning to college. However, I
          faced the prospect of losing 30 credits, so I opted for a different
          path. I enrolled in a coding boot camp, which was a valuable
          experience due to my prior coding education and the shared enthusiasm
          for programming among my peers.
        </Typography>

        <Typography>
          Since completing the boot camp, I've worked in three different
          companies, each with its own set of technologies and work cultures,
          contributing to the ongoing journey of my career in technology.
        </Typography>
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

      <section className="hidden">
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
