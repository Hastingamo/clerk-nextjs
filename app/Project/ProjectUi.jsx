"use client";
import React from 'react';
import data from "../component/data.json";
import { motion } from "framer-motion";

function ProjectUi() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 max-w-6xl mx-auto"
    >
      {data.map((item) => (
        <motion.div
          key={item.id || item.name}
          variants={items}
          whileHover={{ scale: 1.03, y: -5 }}
          className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
        >
          <div>
            <h1 className="text-xl font-bold text-white mb-3 capitalize">
              {item.name}
            </h1>
          </div>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-400 hover:text-blue-300 font-semibold text-sm inline-flex items-center gap-1"
            >
              Visit Project &rarr;
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectUi;
