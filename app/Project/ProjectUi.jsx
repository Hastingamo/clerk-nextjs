"use client";
import React, { useState } from "react";
import data from "../component/data.json";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ProjectUi() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(data.map((item) => item.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 font-semibold text-xs tracking-wider uppercase">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Projects</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A selection of modern web applications, digital products, and platform designs built with focus on speed, user experience, and aesthetic design.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/30"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-300"
              >
                <div>
                  {/* Image / Graphic Container */}
                  <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {item.image ? (
                      <Image
                        src={item.image}
                        fill
                        alt={item.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 text-xl font-bold">
                          {item.name.charAt(0)}
                        </div>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-xs font-semibold text-blue-400">
                      {item.category}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800/80 text-xs font-medium text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* External Link CTA */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 group/btn gap-2"
                  >
                    <span>View Live Project</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectUi;
