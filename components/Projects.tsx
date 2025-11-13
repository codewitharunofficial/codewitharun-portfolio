"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projects } from "@/contants/projects";
import { CgClose } from "react-icons/cg";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [category, setCategory] = useState<"mobileApps" | "webApps">("mobileApps");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects[category].length);
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
      id="projects"
      className="relative flex flex-col items-center justify-center text-white min-h-screen py-15 px-4 backdrop-blur-sm bg-black/30 w-screen"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        🚀 My Projects
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {["mobileApps", "webApps"].map((type) => (
          <button
            key={type}
            onClick={() => handleCategoryChange(type as "mobileApps" | "webApps")}
            className={`px-5 py-2 rounded-lg text-base font-medium transition-colors ${category === type
                ? "bg-blue-500 text-white"
                : "bg-gray-800/70 hover:bg-gray-700"
              }`}
          >
            {type === "mobileApps" ? "📱 Mobile Apps" : "💻 Web Apps"}
          </button>
        ))}
      </div>

      {/* Project Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl mx-auto">
        {/* Project Info */}
        <motion.div
          key={project.name}
          className="max-w-lg text-left bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <img
              src={project.logo}
              alt="App Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <h3 className="text-2xl font-semibold">{project.name}</h3>
          </div>

          <p className="mt-3 text-gray-300 leading-relaxed">{project.description}</p>

          <ul className="mt-3 list-disc pl-5 text-gray-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <div className="mt-4">
            <a
              href={project.repoLink}
              target="_blank"
              className="text-blue-400 hover:underline mr-4"
            >
              🔗 GitHub Repo
            </a>
            <a
              href={project.appLink}
              target="_blank"
              className="text-green-400 hover:underline"
            >
              🚀 View App
            </a>
          </div>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-[90%] md:w-[400px] max-w-sm rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10"
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
                className="w-full h-[280px] md:h-[300px] object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedScreenshot && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white/10 backdrop-blur-xl rounded-xl p-3 shadow-lg w-[90%] md:w-[70%] h-[70%] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedScreenshot}
                alt="Expanded Screenshot"
                className={`object-contain transition-all duration-300 ${zoomed
                    ? "w-auto h-auto max-w-none scale-125"
                    : "w-full h-full max-w-full"
                  } cursor-pointer`}
                onDoubleClick={() => setZoomed(!zoomed)}
              />
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
              >
                <CgClose size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
