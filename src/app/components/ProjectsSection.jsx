"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Staalix Website",
    description: "React.js project to show some information about staalix company and their products.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://staalix.nl/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AdobeSupplier ecommerce website",
    description: "MERN project ecommerece to but software products",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.adobesupplier.com/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MicrosoftSupplier Firebase website",
    description: "Ecommerec project built with React.js and Firebase for authentication and Firestore database",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.microsoftsupplier.com/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mukado landing page",
    description: "Reactjs Landing page to NFT monkeys collection",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mukado-edit-last.vercel.app/",
  },
  {
    id: 5,
    title: "Fayium University Hospital Reactjs Website",
    description: "Reactjs website to explore some information about Fayium University hospital and ability to book appointments",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://fayum-hospital-frontend-4lc7.vercel.app/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
