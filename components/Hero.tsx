import Image from "next/image";
import Profile from "@/public/Profile.jpg";
import { SiGithub } from "react-icons/si";
import { BiPhone, BiSolidDownload } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={Profile}
        alt="Profile Background"
        layout="fill"
        objectFit="cover" // Ensures proper fit without zooming
        objectPosition="left" // Adjust as needed (center, left, right)
        quality={100}
        priority
        className="-z-10"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey, I&apos;m <span className="text-blue-400">Ravi</span>
        </h1>
        <p className="text-lg md:text-xl mt-2">
          MERN Stack & React Native Developer | Passionate about building scalable web & mobile apps
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:kumarrvee@gmail.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2"
          >
            <BiPhone size={24} />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-2 md:px-3 rounded-md flex items-center gap-2"
          >
            <BiSolidDownload size={24} />
            Resume
          </a>
          <a
            href="https://github.com/codewitharunofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2"
          >
            <SiGithub size={24} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
