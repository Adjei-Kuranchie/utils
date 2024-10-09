import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const technologies = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "GSAP",
  ];

  const tools = [
    "Git",
    "Kali Linux",
    "Figma",
    "Framer",
    "Photoshop",
    "Illustrator",
    "After Effects",
  ];

  return (
    <>
      <section
        className={`text-3xl w-full h-full ${inter.className} flex flex-col gap-20 `}
      >
        <div className={`w-full flex flex-row gap-16`}>
          <div className="text-3xl w-1/2">
            Hello, I am{" "}
            <span className={`text-4xl uppercase font-bold text-lime-400`}>
              Adjei&minus;Kuranchie.
            </span>
            <div>
              A Software Developer specializing in Web Development. I use the
              following technologies and tools.
            </div>
            <ul className={`text-sm flex gap-4 pt-4 list-none `}>
              Tech:
              {technologies.map((tech, index) => (
                <li className={`hover:text-lime-400`} key={index}>
                  {tech}
                </li>
              ))}
            </ul>
            <ul className={`text-sm flex gap-4 pt-1 list-none `}>
              Tools:
              {tools.map((tool, index) => (
                <li className={`hover:text-lime-400`} key={index}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className={`w-1/2`}>This is for image</div>
        </div>

        <div className={`w-full`}>
          <h3 className={`text-3xl font-light tracking-tight capitalize`}>
            Apps that i have built
          </h3>
          <div className={`grid grid-cols-4 gap-10`}>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
