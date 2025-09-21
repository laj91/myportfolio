import React from "react";
import ImageSlideshow from "./ImageSlideshow";
// Tilføj flere billeder her hvis du har dem 
//const allImages = [
//  "vrplayground/Inside view 2.png",
//  "vrplayground/Panoramic view of house.png",
//  "vrplayground/Inside view.png",
//  "vrplayground/Panoramic view of house 2.png"
//];

const vrPlaygroundMedia = [
    { type: 'image', src: '/pictures/vrplayground/Inside view 2.png' },
    { type: 'image', src: '/pictures/vrplayground/Panoramic view of house.png' },
    { type: 'image', src: '/pictures/vrplayground/Inside view.png' },
    { type: 'image', src: '/pictures/vrplayground/Panoramic view of house 2.png' },
    { type: 'video', src: '/videos/vrplayvideos/2025-07-17 16-58-06.mkv' }
];


const vrRagdollShooterMedia = [
    { type: 'image', src: '/pictures/vrRagdollShooter/BehindCrane.png' },
    { type: 'image', src: '/pictures/vrRagdollShooter/BirdView.png' },
    { type: 'image', src: '/pictures/vrRagdollShooter/CanonView.png' },
    { type: 'image', src: '/pictures/vrRagdollShooter/DownView.png' },
    { type: 'image', src: '/pictures/vrRagdollShooter/InsideCrane.png' },
    { type: 'video', src: '/videos/vrplayvideos/2025-09-21 21-33-19.mkv' }
]

//function getImagesForFolder(folderName) {
//  // Returnerer alle billeder der starter med folderName
//  return allImages
//    .filter(img => img.startsWith(folderName + "/"))
//    .map(img => `/pictures/${img}`);
//}

//const vrImages = getImagesForFolder("vrplayground");

const projects = [
  {
    title: "VR Playground",
    description: "Served as a place for learning the ins and outs of vr",
    github: "https://github.com/din-bruger/portfolio",
    media: vrPlaygroundMedia, // Array af billedstier
    video: null
  },
  {
    title: "VR Ragdoll Shooter",
    description: "Just a silly idea i wanted to try out",
    github: "https://github.com/din-bruger/todo-app",
    media: vrRagdollShooterMedia
  },
  {
    title: "Mixed Reality with OpenAI",
    description: "Just a small experiment made with Metas new passthrough API",
    github: "https://github.com/din-bruger/api-integration",
  },
  {
    title: "Portfolio Website",
    description: "This very website you're looking at, built with React.",
    github: "https://github.com/din-bruger/api-integration"
  },
  {
    title: "MemeBot",
    description: "A blazor web app with a bot that generates comments on memes scraped from reddit.",
    github: ""
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

