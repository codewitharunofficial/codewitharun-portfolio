const qualifications = [
  {
    degree: "Bachelor of Computer Applications",
    year: "2021-2024",
    institute: "Maharshi Agrasen University, Uttarakhand",
  },
  // { degree: "Full-Stack Developer Certification", year: "2022", institute: "Udemy" },
];

const Qualifications = () => {
  return (
    <section
      style={{ backgroundColor: "#100465ff" }}
      className="container mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center text-white">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 text-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{qual.degree}</h3>
            <p className="text-blue-400">{qual.institute}</p>
            <p className="text-sm text-green-400">{qual.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
