import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Section from "@/components/Section";

type Params = { params: { slug: string } };

export default async function ProjectDetailPage({ params }: Params) {
  // Await params to comply with Next.js dynamic route requirements
  const { slug } = await Promise.resolve(params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <Section>
      <div className={"container mx-auto"}>
        <div className="px-4 py-8">
          <Link href="/work" className="text-sm text-blue-600 underline">
            ← Back to Work
          </Link>

          <h1 className="text-2xl font-semibold mt-4">{project.title}</h1>

          <div className="mt-4 max-w-3xl">
            <div className="w-full h-56 bg-gray-100">
              {/* todo: Replace <img/> tag with Next.js <Image/> */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="mt-4">
              <p className="text-gray-700">{project.description}</p>

              <h4 className="mt-4 font-medium">Technologies</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600 underline"
                  >
                    Open Live App
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
// export const projects = [
//   {
//     slug: "awesome-app",
//     title: "Awesome App",
//     image: "https://via.placeholder.com/800x400.png?text=Awesome+App",
//     tech: ["React", "Next.js", "Tailwind"],
//     github: "https://github.com/yourname/awesome-app",
//     live: "https://awesome-app.example.com",
//     short: "A short one-line summary of Awesome App.",
//     description:
//       "Awesome App is a sample project demonstrating feature X, Y and Z. It includes authentication, realtime updates and responsive UI. Add more details here.",
//   },
//   {
//     slug: "portfolio-site",
//     title: "Portfolio Site",
//     image: "https://via.placeholder.com/800x400.png?text=Portfolio+Site",
//     tech: ["TypeScript", "Next.js", "CSS"],
//     github: "https://github.com/yourname/portfolio-site",
//     live: "https://portfolio.example.com",
//     short: "My personal portfolio site with projects and blog.",
//     description:
//       "This portfolio site showcases projects, posts and contact form. Built with Next.js and optimized for SEO and performance.",
//   },
// ];
