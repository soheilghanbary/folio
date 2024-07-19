export const experiences = [
  {
    title: "IT Manager",
    company: "Kian Ertebat",
    date: "April 2016 - Jul 2024",
    description:
      "Develop and maintain internal systems to enhance cross-border transportation and logistics operations, following best development practices. Collaborate with product managers and designers to create user-friendly interfaces and improve user experience. Implement responsive designs using modern web technologies and frameworks. Write clean, maintainable code and conduct code reviews to ensure high code quality and performance.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "styled-components",
      "Tailwind CSS",
      "GraphQL",
      "Agile Development",
      "Trello",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "WebKade",
    date: "May 2022 - Jul 2024",
    description:
      "Develop and maintain internal systems to enhance cross-border transportation and logistics operations, following best development practices. Collaborate with product managers and designers to create user-friendly interfaces and improve user experience. Implement responsive designs using modern web technologies and frameworks. Write clean, maintainable code and conduct code reviews to ensure high code quality and performance.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "styled-components",
      "Tailwind CSS",
      "GraphQL",
      "Agile Development",
      "Trello",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Mosafermarket",
    date: "January 2023 - March 2023 · 3 mos",
    description:
      "I architected a landing page using Astro and a admin dashboard using Next.js for a local healthy market in Atibaia, Brazil. The project was built using a monorepo structure with Turborepo. All API routes were fully type-safe using TRPC and the database was managed with Drizzle ORM. The project was deployed to Vercel and the client was very satisfied with the results.",
    skills: ["TypeScript", "Vue", "Nuxt.Js", "Tailwind CSS"],
  },
  {
    title: "SEO Enginner",
    company: "MyRepeater.ir",
    date: "April 2017 - September 2021",
    description:
      "Developed a responsive web application for a local non-profit organization. Worked closely with the client to understand their needs and delivered a user-friendly website that met their requirements. Implemented a custom design using HTML, CSS, and JavaScript, and integrated a contact form for users to get in touch with the organization.",
    skills: [
      "SEO",
      "WordPress",
      "Elementor",
      "Google Analitycs",
      "GSC",
      "Rank Math",
    ],
  },
];

export type Experience = (typeof experiences)[number];
