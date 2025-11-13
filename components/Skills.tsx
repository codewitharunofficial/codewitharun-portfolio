import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiJavascript,
  SiTypescript,
  SiPython,
} from "react-icons/si";


const skills = [
  { name: "ReactJs", icon: <SiReact size={30} className="text-blue-500" />, url: "https://react.dev/" },
  {
    name: "NextJs",
    icon: <SiNextdotjs size={30} className="text-gray-900 dark:text-white" />, url: "https://nextjs.org/"
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs size={30} className="text-green-500" />, url: "https://nodejs.org/en"
  },
  {
    name: "ExpressJs",
    icon: <SiExpress size={30} className="text-gray-700 dark:text-gray-300" />, url: "https://expressjs.com/"
  },
  { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-600" />, url: "https://cloud.mongodb.com" },
  {
    name: "React Native",
    icon: <SiExpo size={30} className="text-blue-400" />, url: "https://reactnative.dev/"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={30} className="text-yellow-500" />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} className="text-blue-600" />,
    url: "https://www.typescriptlang.org/"
  },
  { name: "Python", icon: <SiPython size={30} className="text-yellow-400" />, url: "https://www.python.org/" },
];

const Skills = () => {
  return (
    <section
      className="mx-auto p-24 min-h-screen flex flex-col justify-center backdrop-blur-sm bg-black/30 w-screen"
    >
      <h2 className="text-3xl font-bold text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {skills.map((skill, index) => (
          <Link
            href={skill.url}
            key={index}
            className="flex flex-col items-center bg-gray-600 text-white p-4 rounded-lg shadow-md hover:bg-gray-400 cursor-pointer "
            target="_blank"
          >
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Skills;
