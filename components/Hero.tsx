"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Profile from "@/public/background.png";
import { SiGithub } from "react-icons/si";
import { BiFile, BiMailSend } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden backdrop-blur-sm bg-black/30">

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Wave Emoji Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hey
          <motion.span
            className="text-4xl"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            👋
          </motion.span>
          , I&apos;m <span className="text-blue-400 font-serif">Ravi</span>
        </motion.h1>

        {/* Staggered Intro Text Animation */}
        <div className="mt-2">
          {[
            "A passionate Full-Stack Developer specializing in MERN (MongoDB, Express.js, React.js, Node.js) and React Native.",
            "I love building scalable, high-performance web and mobile applications with seamless user experiences. 🚀",
            "With expertise in JavaScript, TypeScript, Next.js, and backend development using Node.js & Express.js, I develop fully optimized and end-to-end solutions.",
            "My experience includes real-time chat apps, video streaming platforms, AI-powered applications, and scalable backend systems.",
            "Let’s collaborate, innovate, and build something amazing together!",
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.4 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Buttons with Fade-in Animation */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.a
            whileHover={{ scale: 0.9, rotate: -5 }}
            href="mailto:kumarrvee@gmail.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2 text-sm"
          >
            <BiMailSend size={24} />
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9, rotate: -5 }}
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-2 md:px-3 rounded-md flex items-center gap-2"
            download={true}
          >
            <BiFile size={24} />
            Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 0.9, rotate: -5 }}
            href="https://github.com/codewitharunofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2"
          >
            <SiGithub size={24} />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
