import { motion } from "framer-motion";
import { useEffect, useState } from 'react';


const Project_cards = () => {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    const fetchMyProjects = async () => {
      try {
        const response = await fetch('/api/getProjects');
        const data = await response.json();
        if (response.ok) {
          setMyProjects(data.data);
        } else {
          console.error('Failed to fetch projects');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyProjects();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4">
      {myProjects.map((project) => (
        <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "calc(100% - 100%)" }}
        className=' mt-[7%]'
       >
      <div className="text-4xl cursor-pointer bg-gradient-to-r from-purple-700 to-pink-600 text-black font-bold rounded-lg hover:scale-105 duration-300">
        <img src={project.projectImage} className="mx-auto overflow-hidden my-10 rounded-xl" />
        <div className="mx-10">
          {project.projectTitle}
        </div>
        <div className="font-thin mx-10 text-2xl">
          {project.projectDescription}
        </div>
      </div>
      </motion.div>
      ))}
    </div>
  );
};

export default Project_cards;

