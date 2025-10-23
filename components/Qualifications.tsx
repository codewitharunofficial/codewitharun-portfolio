const qualifications = [
  {
    degree: "Bachelor of Computer Applications",
    year: "2021-2024",
    institute: "Maharaja Agrasen Himalayan Garhwal University, Uttarakhand",
    link: "https://www.hgu.ac.in/",
  },
  {
    degree: "12th Standard (Non-Medical)",
    year: "2015-2016",
    institute: "Board Of School Education, Haryana",
    link: "https://www.bseh.org.in/",
  },
];

const Qualifications = () => {
  return (
    <section
      style={{ backgroundImage: "url(/bg2.jpg)" }}
      className="mx-auto py-16 px-16"
    >
      <h2 className="text-3xl font-bold text-center text-white">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {qualifications.map((qual, index) => (
          <a
            href={qual.link}
            key={index}
            className="bg-gray-700 hover:bg-gray-600 text-white p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 flex flex-col gap-2"
            target="_blank"
          >
            <h3 className="text-xl font-semibold">{qual.degree}</h3>
            <p className="text-blue-400">{qual.institute}</p>
            <p className="text-sm text-green-400">{qual.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
