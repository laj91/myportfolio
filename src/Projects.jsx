import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import { FaGithub } from "react-icons/fa";

import {
    Container,
    SimpleGrid,
    Card,
    Button,
    Text,
    Heading,
    Link,
    Box,
    VStack,
} from "@chakra-ui/react";

/**
 * Projects section of the portfolio. Handles displaying project cards with media slideshows.
 */

// Define media for VR Playground project
const vrPlaygroundMedia = [
    { type: "image", src: "/pictures/vrplayground/Inside view 2.png" },
    { type: "image", src: "/pictures/vrplayground/Panoramic view of house.png" },
    { type: "image", src: "/pictures/vrplayground/Inside view.png" },
    { type: "image", src: "/pictures/vrplayground/Panoramic view of house 2.png" },
    { type: "video", src: "/videos/vrplayvideos/2025-07-17 16-58-06.mkv" },
];

// Define media for VR Ragdoll Shooter project
const vrRagdollShooterMedia = [
    { type: "image", src: "/pictures/vrRagdollShooter/BehindCrane.png" },
    { type: "image", src: "/pictures/vrRagdollShooter/BirdView.png" },
    { type: "image", src: "/pictures/vrRagdollShooter/CanonView.png" },
    { type: "image", src: "/pictures/vrRagdollShooter/DownView.png" },
    { type: "image", src: "/pictures/vrRagdollShooter/InsideCrane.png" },
    { type: "video", src: "/videos/vrplayvideos/2025-09-21 21-33-19.mkv" },
];

// Define the list of projects
const projects = [
    {
        title: "VR Playground",
        description: "Served as a place for learning the ins and outs of VR.",
        github: "https://github.com/din-bruger/portfolio",
        media: vrPlaygroundMedia,
    },
    {
        title: "VR Ragdoll Shooter",
        description: "Just a silly idea I wanted to try out.",
        github: "https://github.com/din-bruger/todo-app",
        media: vrRagdollShooterMedia,
    },
    {
        title: "Mixed Reality with OpenAI",
        description: "Small experiment using Meta's new passthrough API.",
        github: "https://github.com/din-bruger/api-integration",
    },
    {
        title: "Portfolio Website",
        description: "This website, built with React.",
        github: "https://github.com/din-bruger/api-integration",
    },
    {
        title: "MemeBot",
        description:
            "Blazor web app with a bot commenting on memes scraped from Reddit.",
        github: "",
    },
];

// Projects component displaying a grid of project cards
function Projects() {
    return (
        <Container id="projekter" maxW="6xl" py={{ base: 12, md: 16 }} bg="appBg">
            <Heading as="h1"
                fontWeight="extrabold"
                lineHeight="1.1"
                letterSpacing="-0.02em"
                fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                mb={6}
                textAlign="center"
                color="onPrimary"
                margin="1em"
            >
                My Projects
            </Heading>
            <SimpleGrid 
                columns={{ base: 1, md: 2, lg: 3 }} 
                gap={{ base: 6, md: 8, lg: 10 }}  // Increased spacing between cards
            >
                {projects.map((proj, idx) => (
                    <Card.Root
                        key={idx}
                        bg="appBg"
                        borderWidth="1px"
                        borderColor="primary"
                        color="onPrimary"
                        boxShadow="0 0 20px rgba(78, 204, 163, 0.3)"
                        borderRadius="md"
                        overflow="hidden"  // Better handling of content overflow
                        display="flex"
                        flexDirection="column"  // Make card a flexbox container
                        _hover={{ 
                            boxShadow: "cardHover", 
                            transform: "translateY(-4px)",  // More noticeable hover effect
                            borderColor: "primary"
                        }}
                        transition="all 0.3s ease"  // Smoother transition
                    >
                        <Card.Body 
                            flex="1"  // Allow body to grow and fill available space
                            p={6}  // Increased padding
                        >
                            <VStack align="stretch" gap={4}>  {/* Vertical stack with improved spacing */}
                                <Card.Title 
                                    as="h3" 
                                    fontSize="xl"  // Larger title font size
                                    fontWeight="bold"
                                    color="primary"
                                    mb={2}
                                >
                                    {proj.title}
                                </Card.Title>
                                
                                <Card.Description 
                                    fontSize="md"
                                    color="onPrimary"
                                    lineHeight="1.6"  // Improved line height for readability
                                >
                                    {proj.description}
                                </Card.Description>
                                
                                {proj.media && proj.media.length > 0 && (
                                    <Box mt={4}>  {/* More spacing above slideshow */}
                                        <ImageSlideshow media={proj.media} />
                                    </Box>
                                )}
                            </VStack>
                        </Card.Body>
                        
                        <Card.Footer 
                            p={6}  // Increased padding
                            pt={0}  // Remove top padding 
                            justifyContent="flex-start"  // Align button to the left
                        >
                            {proj.github && (
                                <Button
                                    as={Link}
                                    href={proj.github}
                                    isExternal
                                    size="md"  // Larger button size
                                    bg="primary"
                                    color="appBg"
                                    fontWeight="semibold"
                                    px={6}  // More horizontal padding
                                    leftIcon={<FaGithub />}
                                    _hover={{ 
                                        bg: "accent",  // Change to accent color on hover
                                        transform: "scale(1.05)",
                                        boxShadow: "md"
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    ´Go To GitHub ?
                                </Button>
                            )}
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default Projects;