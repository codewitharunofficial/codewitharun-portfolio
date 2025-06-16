"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "@/contants/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState<"mobileApps" | "webApps">(
    "mobileApps"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % projects[category].length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [category]);

  const handleCategoryChange = (newCategory: "mobileApps" | "webApps") => {
    setCategory(newCategory);
    setActiveIndex(0);
  };

  const openModal = (screenshot: string) => {
    setSelectedScreenshot(screenshot);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedScreenshot(null);
  };

  const project = projects[category][activeIndex];

  return (
    <section
      style={{ backgroundImage: "url(/Background.webp)" }}
      className="py-16 bg-gray-900 text-white text-center min-h-screen"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8">🚀 My Projects</h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            category === "mobileApps" ? "bg-blue-500" : "bg-gray-700"
          }`}
          onClick={() => handleCategoryChange("mobileApps")}
        >
          📱 Mobile Apps
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            category === "webApps" ? "bg-blue-500" : "bg-gray-700"
          }`}
          onClick={() => handleCategoryChange("webApps")}
        >
          💻 Web Apps
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          key={project.name}
          className="max-w-lg text-left px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <img
              src={project.logo}
              alt="App Logo"
              className="w-12 h-12 rounded-lg"
            />
            <h3 className="text-2xl font-semibold">{project.name}</h3>
          </div>
          <p className="mt-2 text-gray-300">{project.description}</p>
          <ul className="mt-2 list-disc pl-5 text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={project.repoLink}
              className="text-blue-400 hover:underline mr-4"
              target="_blank"
            >
              🔗 GitHub Repo
            </a>
            <a
              href={project.appLink}
              className="text-green-400 hover:underline"
              target="_blank"
            >
              🚀 View App
            </a>
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-[300px] md:w-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          {project.screenshots.map((screenshot, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center cursor-pointer"
              onClick={() => openModal(screenshot)}
            >
              <motion.img
                src={screenshot}
                alt="Project Screenshot"
                className="w-full h-[300px] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <AnimatePresence>
        {isModalOpen && selectedScreenshot && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg relative object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedScreenshot}
                alt="Expanded Screenshot"
                className="max-w-full max-h-svh rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded-lg"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
