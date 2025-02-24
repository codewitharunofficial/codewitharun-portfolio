import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = {
  mobileApps: [
    {
      name: "Gaao - The Karaoke App",
      logo: "/logos/Gaao-Icon.png",
      description:
        "Gaao is a karaoke app that allows users to record their singing, apply audio effects, and share with friends.",
      features: [
        "Record vocals",
        "Apply reverb & effects",
        "Real-time preview",
        "Save and share recordings",
      ],
      repoLink: "https://github.com/codewitharunofficial/gaao",
      appLink: "https://play.google.com/store/apps/details?id=com.gaao",
    },
    {
      name: "Chattr",
      logo: "/logos/Chattr.png",
      description:
        "Chatrr is a real-time messaging app with text, voice, and video calling features.",
      features: [
        "End-to-end encryption",
        "Voice & video calls",
        "Media sharing",
        "Group chats",
      ],
      repoLink: "https://github.com/codewitharunofficial/chatrr",
      appLink: "https://play.google.com/store/apps/details?id=com.chatrr",
    },
    {
      name: "One-Stop - Video Streaming App",
      logo: "/logos/One-Stop.png",
      description:
        "One-Stop is a video streaming app that allows users to watch and manage their favorite videos.",
      features: [
        "HD streaming",
        "Offline downloads",
        "Subscription model",
        "Multi-device support",
      ],
      repoLink: "https://github.com/codewitharunofficial/onestop",
      appLink: "https://play.google.com/store/apps/details?id=com.onestop",
    },
  ],
  webApps: [
    {
      name: "Chattr-Web",
      logo: "/logos/Chattr.png",
      description:
        "Chattr-Web is the web version of Chatrr, providing real-time messaging and calling features.",
      features: [
        "WebRTC-based calls",
        "Secure messaging",
        "Responsive UI",
        "Group chats",
      ],
      repoLink: "https://github.com/codewitharunofficial/chattr-web",
      appLink: "https://chattr-web.vercel.app",
    },
    {
      name: "InsecView",
      logo: "/logos/insecview.webp",
      description:
        "InsecView is a security surveillance platform that allows users to monitor live CCTV feeds remotely.",
      features: [
        "Live video feed",
        "Motion detection alerts",
        "Cloud storage",
        "Multi-camera support",
      ],
      repoLink: "https://github.com/codewitharunofficial/insecview",
      appLink: "https://insecview.com",
    },
    {
      name: "Shopease",
      logo: "/logos/shopease.png",
      description:
        "Shopease is an e-commerce platform that offers a seamless shopping experience with smart recommendations.",
      features: [
        "AI-powered recommendations",
        "One-click checkout",
        "Multiple payment options",
        "User reviews",
      ],
      repoLink: "https://github.com/codewitharunofficial/shopease",
      appLink: "https://shopease.com",
    },
  ],
};

const Projects = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/Background.webp)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="container mx-auto py-16 px-6"
    >
      <h2 className="text-3xl font-bold text-center">My Projects</h2>

      {/* Mobile Apps Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">📱 Mobile Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.mobileApps.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="h-16 mb-4 rounded"
              />
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="text-gray-300 text-sm text-center">
                {project.description}
              </p>
              <ul className="text-sm mt-2 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-400">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex mt-4 gap-3">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> App
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Web Apps Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">💻 Web Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.webApps.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="h-16 mb-4"
              />
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="text-gray-300 text-sm text-center">
                {project.description}
              </p>
              <ul className="text-sm mt-2 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-400">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex mt-4 gap-3">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 flex items-center gap-1"
                >
                  <FaGithub size={20} /> Code
                </a>
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
