import React, { useState } from "react";
import ImageSlideshow from "./ImageSlideshow";
import { FaGithub, FaTimes } from "react-icons/fa";

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
    HStack,
    Portal,
} from "@chakra-ui/react";

import { DialogRoot, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogBackdrop, DialogCloseTrigger } from "@chakra-ui/react";

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
        fullDescription: "Dette projekt var min første dybdegående udforskning af VR-udvikling. Jeg arbejdede med Unity og Meta Quest 2 for at lære grundlæggende VR-interaktioner, teleportation, hand tracking, og hvordan man skaber immersive miljøer. Projektet inkluderer forskellige scener og eksperimenter med fysik, UI i VR, og spatial audio.",
        github: "https://github.com/din-bruger/portfolio",
        media: vrPlaygroundMedia,
    },
    {
        title: "VR Ragdoll Shooter",
        description: "Just a silly idea I wanted to try out.",
        fullDescription: "Et sjovt eksperiment hvor jeg kombinerede ragdoll-fysik med VR shooting mechanics. Spilleren kan skyde ragdolls med forskellige våben og se dem flyve rundt på sjove måder. Projektet lærte mig meget om fysik-optimering i VR og hvordan man implementerer responsive controls.",
        github: "https://github.com/din-bruger/todo-app",
        media: vrRagdollShooterMedia,
    },
    {
        title: "Mixed Reality with OpenAI",
        description: "Small experiment using Meta's new passthrough API.",
        fullDescription: "Dette projekt kombinerer Mixed Reality med AI ved at bruge Meta's passthrough API sammen med OpenAI's GPT. Brugeren kan interagere med AI-assistenten i deres fysiske rum, hvor virtuelt indhold blandes med det virkelige miljø.",
        github: "https://github.com/din-bruger/api-integration",
    },
    {
        title: "Portfolio Website",
        description: "This website, built with React.",
        fullDescription: "Min personlige portfolio-hjemmeside bygget med React og Chakra UI. Sitet er designet til at være responsive, tilgængeligt, og visuelt tiltalende. Det inkluderer smooth scrolling, animationer, og en moderne designsprog med fokus på brugeroplevelse.",
        github: "https://github.com/din-bruger/api-integration",
    },
    {
        title: "MemeBot",
        description:
            "Blazor web app with a bot commenting on memes scraped from Reddit.",
        fullDescription: "En Blazor-baseret web-applikation der scraper memes fra Reddit og bruger machine learning til at generere sjove kommentarer. Projektet bruger .NET 8, Reddit API, og OpenAI til at skabe kontekstuelle og humoristiske kommentarer til memes.",
        github: "",
    },
];

// Projects component displaying a grid of project cards
function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);

    // Handlers for opening and closing the expanded project dialog
    const openProject = (proj) => {
        setExpandedProject(proj);
    };

    const closeProject = () => {
        setExpandedProject(null);
    };

    // TODO: Make the dialog larger and give back slideshow controls when a project is expanded
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
                gap={{ base: 6, md: 8, lg: 10 }}
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
                        overflow="hidden"
                        display="flex"
                        flexDirection="column"
                        _hover={{ 
                            boxShadow: "cardHover", 
                            transform: "translateY(-4px)",
                            borderColor: "primary"
                        }}
                        transition="all 0.3s ease"
                    >
                        <Card.Body 
                            flex="1"
                            p={6}
                        >
                            <VStack align="stretch" gap={4}>
                                <Card.Title 
                                    as="h3" 
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="primary"
                                    mb={2}
                                >
                                    {proj.title}
                                </Card.Title>
                                
                                <Card.Description 
                                    fontSize="md"
                                    color="onPrimary"
                                    lineHeight="1.6"
                                >
                                    {proj.description}
                                </Card.Description>
                                
                                {proj.media && proj.media.length > 0 && (
                                    <Box mt={4}>
                                        <ImageSlideshow media={proj.media} />
                                    </Box>
                                )}
                            </VStack>
                        </Card.Body>
                        
                        <Card.Footer 
                            p={6}
                            pt={0}
                            justifyContent="space-between"
                            flexWrap="wrap"
                            gap={3}
                        >
                            <Button
                                onClick={() => openProject(proj)}
                                size="md"
                                variant="outline"
                                borderColor="primary"
                                color="primary"
                                fontWeight="semibold"
                                px={6}
                                _hover={{ 
                                    bg: "primary",
                                    color: "appBg",
                                    transform: "scale(1.05)",
                                    boxShadow: "md"
                                }}
                                transition="all 0.2s ease"
                            >
                                See More
                            </Button>
                            
                            {proj.github && (
                                <Button
                                    as={Link}
                                    href={proj.github}
                                    isExternal
                                    size="md"
                                    bg="primary"
                                    color="appBg"
                                    fontWeight="semibold"
                                    px={6}
                                    _hover={{ 
                                        bg: "accent",
                                        transform: "scale(1.05)",
                                        boxShadow: "md"
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    <FaGithub style={{ marginRight: '0.5rem' }} />
                                    Go To GitHub
                                </Button>
                            )}
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>

            {/* Expanded Project Dialog */}
            {expandedProject && ( //If expandedProject is set to a project, show the dialog
                <DialogRoot 
                    open={true} 
                    onOpenChange={(details) => {
                        if (!details.open) closeProject();
                    }}
                >
                    <Portal>
                        <DialogBackdrop 
                            bg="blackAlpha.700"
                            backdropFilter="blur(4px)"
                        />
                        <DialogContent
                            bg="appBg"
                            borderWidth="2px"
                            borderColor="primary"
                            boxShadow="0 0 40px rgba(78, 204, 163, 0.4)"
                            maxW={{ base: "95%", md: "85%", lg: "75%" }}
                            maxH="85vh"
                            overflowY="auto"
                            position="fixed"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            zIndex={1400}
                        >
                            <DialogHeader
                                borderBottomWidth="1px"
                                borderBottomColor="primary"
                                pb={4}
                            >
                                <Heading 
                                    as="h2" 
                                    fontSize={{ base: "2xl", md: "3xl" }}
                                    color="primary"
                                >
                                    {expandedProject.title}
                                </Heading>
                            </DialogHeader>
                            
                            <DialogCloseTrigger 
                                color="primary"
                                _hover={{ bg: "primary", color: "appBg" }}
                                position="absolute"
                                top={4}
                                right={4}
                            />
                            
                            <DialogBody py={6}>
                                <VStack align="stretch" gap={6}>
                                    {expandedProject.media && expandedProject.media.length > 0 && (
                                        <Box>
                                            <ImageSlideshow media={expandedProject.media} />
                                        </Box>
                                    )}
                                    
                                    <Box>
                                        <Heading 
                                            as="h3" 
                                            fontSize="lg" 
                                            color="primary" 
                                            mb={3}
                                        >
                                            Om projektet
                                        </Heading>
                                        <Text 
                                            fontSize="md" 
                                            color="onPrimary"
                                            lineHeight="1.8"
                                        >
                                            {expandedProject.fullDescription || expandedProject.description}
                                        </Text>
                                    </Box>
                                </VStack>
                            </DialogBody>
                            
                            <DialogFooter
                                borderTopWidth="1px"
                                borderTopColor="primary"
                                pt={4}
                            >
                                <HStack gap={3} flexWrap="wrap">
                                    {expandedProject.github && (
                                        <Button
                                            as={Link}
                                            href={expandedProject.github}
                                            isExternal
                                            size="md"
                                            bg="primary"
                                            color="appBg"
                                            fontWeight="semibold"
                                            px={6}
                                            _hover={{ 
                                                bg: "accent",
                                                transform: "scale(1.05)",
                                                boxShadow: "md"
                                            }}
                                            transition="all 0.2s ease"
                                        >
                                            <FaGithub style={{ marginRight: '0.5rem' }} />
                                            Go To GitHub
                                        </Button>
                                    )}
                                    <Button
                                        onClick={closeProject} // Call closeProject on click and close the dialog
                                        size="md"
                                        variant="outline"
                                        borderColor="primary"
                                        color="primary"
                                        fontWeight="semibold"
                                        px={6}
                                        _hover={{ 
                                            bg: "primary",
                                            color: "appBg",
                                        }}
                                        transition="all 0.2s ease"
                                    >
                                        Close
                                    </Button>
                                </HStack>
                            </DialogFooter>
                        </DialogContent>
                    </Portal>
                </DialogRoot>
            )}
        </Container>
    );
}

export default Projects;