import React from "react";
import ImageSlideshow from "./ImageSlideshow";
// Tilføj flere billeder her hvis du har dem
//const allImages = [
//  "vrplayground/Inside view 2.png",
//  "vrplayground/Panoramic view of house.png",
//  "vrplayground/Inside view.png",
//  "vrplayground/Panoramic view of house 2.png"
//];

const vrMedia = [
    { type: 'image', src: '/pictures/vrplayground/Inside view 2.png' },
    { type: 'video', src: '/videos/vrplayvideos/2025-07-17 16-58-06.mkv'},
    { type: 'image', src: '/pictures/vrplayground/Panoramic view of house.png' },
    { type: 'image', src: '/pictures/vrplayground/Inside view.png' },
    { type: 'image', src: '/pictures/vrplayground/Panoramic view of house 2.png' }
];

//function getImagesForFolder(folderName) {
//  // Returnerer alle billeder der starter med folderName
//  return allImages
//    .filter(img => img.startsWith(folderName + "/"))
//    .map(img => `/pictures/${img}`);
//}

//const vrImages = getImagesForFolder("vrplayground");

const projects = [
  {
    title: "Portfolio Website",
    description: "Min personlige portefølje bygget med React.",
    github: "https://github.com/din-bruger/portfolio",
    media: vrMedia, // Array af billedstier
    video: null
  },
  {
    title: "Todo App",
    description: "En simpel todo-applikation med React og hooks.",
    github: "https://github.com/din-bruger/todo-app",
  },
  {
    title: "API Integration",
    description: "Projekt med integration til eksterne REST API'er.",
    github: "https://github.com/din-bruger/api-integration",
  }
];

function Projects() {
    return (
        <section className="projects">
            <h2>Mine Projekter</h2>
            <div className="projects__grid">
                {projects.map((proj, idx) => (
                    <div className="project__card" key={idx}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        {/* Sender media-arrayet til slideshow-komponenten */}
                        {proj.media && proj.media.length > 0 && (
                            <ImageSlideshow media={proj.media} />
                        )}
                        <a href={proj.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Projects;

