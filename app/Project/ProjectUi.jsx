"use clent";
import React from 'react'
import data from "../component/data.json";
// import community from "../Component/community.json";
import {motion} from "framer-motion";
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
    <div>
                {data.map((item) => (
                  <motion.div
            key={item.name}
            variants={items}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-white/30 dark:border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all"
          >
            </motion.div>

                ))
            }



    </div>
  )
}

export default ProjectUi