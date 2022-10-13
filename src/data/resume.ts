import {
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons'

const profile = {
  profileImageUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQGKKZ_eir17GA/profile-displayphoto-shrink_200_200/0/1516804819724?e=1670457600&v=beta&t=DT2Sp8KTwT_uAHQ9l89ZojXUbsxKS_vyk6aaoqNQwLU',
  aboutMe: [
    'As a passionate person, I pride myself on every project I take on. I am self-motivated and driven by puzzles and challenges. As a developer, I enjoy working in a team environment. In addition, I thrive under pressure when working on multiple projects.',
    'I am an experienced Full Stack Web Developer, as well as a Mobile Developer Hobbyist. I am looking for an opportunity to work in a company with a great environment, where I can expand my knowledge and help a company with my experience. As well as becoming part of a team that is as passionate about programming as I am.',
  ],
  socials: [
    {
      icon: faGithub,
      url: 'https://github.com/chrsolr/',
    },
    {
      icon: faCodepen,
      url: 'https://codepen.io/chrsolr',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/christiansoler/',
    },
    {
      icon: faInstagram,
      url: 'https://www.instagram.com/7w3n7y/',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'NodeJS',
    'ReactJs',
    'Kubernetes',
    'Docker',
    'Styled-Components',
    'Github',
    'Bitbucket',
  ],
  educations: [
    {
      location: 'Coder Camps, Pearland, TX',
      desc: '9 Week .NET Full Stack Program, 8/2014',
    },
    {
      location: 'Rhode Island College, Providence, RI',
      desc: "Bachelor's Degree in Computer Science, (78 Credits)",
    },
    {
      location: 'Monroe College, Bronx, NY',
      desc: 'Associate Degree in Applied Science in Information Technology, 08/2011',
    },
  ],
  jobs: [
    {
      companyName:
        'Innowatts Inc. - (Full Stack Developer) February 2018-Present',
      title: 'Full Stack Developer',
      startDate: 'February 2018',
      endDate: 'Present',
      technologies: [
        'AngularJs',
        'ReactJs',
        'style-components',
        'JavaScripts',
        'Typescript',
        'NodeJs',
        'MeteorJs',
        'MongoDB',
        'Docker',
        'Kubernetes',
      ],
      responsibilities: [
        'Built Web APIs with NodeJS, ExpressJS, Postgres, and MongoDB.',
        'Decouple codebase and built components make the code reusable.',
        'Build a RESTful API that communicates with various external RESTful & SOAP APIs utilizing a Microservice approach.',
        'Deploy dockerized applications to Kubernetes via Helm charts.',
      ],
    },
    {
      companyName:
        'Preventice Solutions - (Jr. Software Engineer) August 2015-June 2017',
      title: 'Jr. Software Engineer',
      startDate: 'August 2015',
      endDate: 'June 2017',
      technologies: [
        'C#',
        'ASP.NET MVC',
        'JavaScript',
        'KnockoutJs',
        'RequireJs',
        'Entity Framework',
        'MS SQL',
        'AJAX',
      ],
      responsibilities: [
        'Created JavaScript Modules from existing code using KnockoutJs, RequireJs, and ASP.NET.',
        'Find, Document, and implement design patterns such as Dependency Injection and Repository Pattern.',
        'Imported and improved legacy code from older applications into an ASP.NET MVC application.',
        'Improved and modularized a highly customizable User Interface.',
      ],
    },
    {
      companyName:
        'Coder Camps - (Jr. Web Developer/Teacher Assistants) September 2014-March 2015',
      title: 'Jr. Web Developer/Teacher Assistants',
      startDate: 'September 2014',
      endDate: 'March 2015',
      technologies: [
        'C#',
        'ASP.NET MVC',
        'AngularJs',
        'MS SQL',
        'AJAX',
        'LINQ',
      ],
      responsibilities: [
        'Re-designed the company’s website and layouts utilizing Razor Engine, Bootstrap, LESS CSS, JQuery, and HTML.',
        "Designed and Implemented the “partner” section on the company's website using C# ASP.NET, MVC, Entity Framework, LINQ, Razor Engine, and AngularJS.",
        'Implemented features where students can apply for a “partner’s” job through a website.',
        'Managed and led a team of 5-7 interns on daily assignments.',
      ],
    },
  ],
}

export default profile
