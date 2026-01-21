"use client";

const experience = [
  {
    roll: "Node.js Developer",
    tenure: "July 13, 2022 – Jan 2023",
    employer: "Aeonaxxy Pvt. Ltd.",
    description:
      "Worked as a Node.js Developer building RESTful APIs and backend systems for service-based applications. Used Node.js, Express.js, and MongoDB to create scalable solutions. Implemented token-based authentication for secure data access and built admin panels for internal management tools.",
  },
  {
    roll: "MERN Stack Developer",
    tenure: "September 13, 2023 – Present",
    employer: "Freelance",
    description:
      "Developing full-stack web and mobile apps using the MERN stack (MongoDB, Express.js, React, Node.js). Designed APIs, integrated authentication, and managed deployments. Collaborated with clients to create responsive, optimized applications and improve project efficiency through reusable components.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 px-6 min-h-screen flex flex-col items-center justify-center text-white backdrop-blur-sm bg-black/30 w-screen"
    >
      <h2 className="text-xl md:text-3xl font-bold text-center mb-10">
        💼 Professional Experience
      </h2>

      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-300">
              {exp.roll}
            </h3>
            <p className="text-lg text-gray-200">{exp.employer}</p>
            <p className="text-sm text-green-400 font-medium mt-1">
              {exp.tenure}
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
