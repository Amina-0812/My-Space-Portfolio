import React from "react";
import ProjectCard from "../sub/ProjectCard"; //importing ProjectCard component used for displaying individual project details


const Projects = () => {
  return (
    //here's the main container for the Projects section with vertical padding and center alignment
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Some Of My School&apos;s Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/cardhtml.png"
          title="Future Technologies Webpage"
          description="This project presents an engaging webpage dedicated to showcasing various future technologies. Created using HTML, CSS, and a touch of JavaScript, the site offers a visual and interactive exploration of cutting-edge technological concepts and innovations that could shape the future. With a clean design and intuitive navigation, users can learn about potential advancements in various fields through well-organized sections and multimedia content."
        />
        <ProjectCard
          src="/cardrouter.png"
          title="Movie List Application"
         description="This dynamic web application, built with React and React Router, serves as a platform for movie enthusiasts to explore and share cool movies. Users can browse a curated list of movies, complete with descriptions and trailers, providing a rich multimedia experience. The app features interactive capabilities where users can submit their own movie recommendations along with descriptions and trailer links, enhancing the communal knowledge base. The responsive design ensures a seamless experience across various devices, making it accessible and user-friendly."
        />
        <ProjectCard
          src="/cardredux.png"
          title="Redux-Powered To-Do List"
          description="Designed to boost productivity, this To-Do List application leverages Redux for state management, ensuring a smooth and responsive user experience. Users can add tasks with descriptions, and then view, complete, or delete each item as needed. The app includes functionality to edit the details of existing tasks, providing flexibility in task management. Built with a focus on functionality and ease of use, the interface allows for clear visualization of tasks, which can be marked as completed with a simple click or touch. This project exemplifies practical application of Redux in managing complex state interactions within a JavaScript application."
        />
      </div>
    </div>
  );
};

export default Projects;