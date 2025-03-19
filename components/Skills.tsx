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
  { name: "ReactJs", icon: <SiReact size={30} className="text-blue-500" /> },
  {
    name: "NextJs",
    icon: <SiNextdotjs size={30} className="text-gray-900 dark:text-white" />,
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs size={30} className="text-green-500" />,
  },
  {
    name: "ExpressJs",
    icon: <SiExpress size={30} className="text-gray-700 dark:text-gray-300" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={30} className="text-green-600" /> },
  {
    name: "React Native",
    icon: <SiExpo size={30} className="text-blue-400" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={30} className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} className="text-blue-600" />,
  },
  { name: "Python", icon: <SiPython size={30} className="text-yellow-400" /> },
];

const Skills = () => {
  return (
    <section
      style={{ backgroundColor: "#100465ff" }}
      className="container mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer "
          >
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
