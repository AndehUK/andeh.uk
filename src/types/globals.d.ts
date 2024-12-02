type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  type: ProjectType;
  thumbnail?: Image;
  images?: Image[];
  slug: string;
  sourceUrl?: string;
  liveUrl?: string;
  technologies: Technology[];
};

type ProjectType = "personal" | "professional" | "university";

type Technology =
  | "Next.js"
  | "React"
  | "Tailwindcss"
  | "Python"
  | "discord.py"
  | "OpenAI"
  | "RESTful API"
  | "SQL"
  | "System Design"
  | "Docker"
  | "Google Cloud"
  | "Firebase"
  | "PostgreSQL"
  | "MySQL"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "Java"
  | "C#"
  | "C++"
  | "Go"
  | "Django"
  | "Flask"
  | "Laravel"
  | "Clerk Auth"
  | "Convex DB"
  | "Liveblocks"
  | "Shadcn/ui";

type Image = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};
