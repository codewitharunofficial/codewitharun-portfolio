const experience = [
  {
    roll: "NodeJs Developer",
    tenure: "September 13, 2023 - July 09, 2024",
    employer: "Freelance",
    description:
      "I have worked for as a NodeJs Developer for Service Provider and created RestFul APIs, created Backend for different apps with NodeJs, ExpressJs, MongoDB and implemented token based authentication for better data management security. I also created admin panels for a small start-up.",
  },
];

const Experience = () => {
  return (
    <section
      style={{ backgroundImage: "url(/bg2.jpg)" }}
      className=" py-16 px-6 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center text-white">
        Professional Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-md gap-3"
          >
            <h3 className="text-xl font-semibold">{exp.roll}</h3>
            <p className="text-white">{exp.employer}</p>
            <p className="text-sm text-green-400">{exp.tenure}</p>
            <p className="text-sm text-blue-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
