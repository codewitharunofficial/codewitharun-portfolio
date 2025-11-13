"use client";

const qualifications = [
  {
    degree: "Bachelor of Computer Applications",
    year: "2021 – 2024",
    institute: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
    link: "https://www.hgu.ac.in/",
  },
  {
    degree: "12th Standard (Non-Medical)",
    year: "2015 – 2016",
    institute: "Board Of School Education, Haryana",
    link: "https://www.bseh.org.in/",
  },
];

const Qualifications = () => {
  return (
    <section
      id="qualifications"
      className="relative py-16 px-6 min-h-screen flex flex-col items-center justify-center text-white backdrop-blur-sm bg-black/30 w-screen"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        🎓 Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {qualifications.map((qual, index) => (
          <a
            key={index}
            href={qual.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">
                {qual.degree}
              </h3>
              <p className="text-gray-200 mt-2">{qual.institute}</p>
            </div>
            <p className="text-sm text-green-400 font-medium mt-4">
              {qual.year}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
