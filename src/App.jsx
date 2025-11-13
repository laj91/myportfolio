import React from "react";
import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box bg="appBg" minH="100vh"> 
            {/* Sticky navigation */}
            <Box
                as="header"
                position="sticky"
                top={0}
                zIndex={1000}
                bg="appBg"
                borderBottomWidth="2px"
                borderColor="primary"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"
                backdropFilter="blur(10px)"
                transition="all 0.3s ease"
            >
                <Container maxW="container.xl">
                    <Flex h={20} align="center" justify="space-between">
                        <Heading 
                            size="lg" 
                            color="onPrimary"
                            cursor="pointer"
                            onClick={() => scrollToSection("forside")}
                            transition="all 0.2s ease"
                            _hover={{ 
                                color: "primary",
                                transform: "scale(1.05)"
                            }}
                        >
                            <HStack spacing={2}>  {/* Use HStack for horizontal layout */}
                                <PiBracketsCurlyBold />
                                <Box as="span">
                                    Nicolaj<Box as="span" color="primary">.</Box>
                                </Box>
                            </HStack>
                        </Heading>

                        <HStack as="nav" spacing={8}>
                            <Link 
                                onClick={() => scrollToSection("forside")} 
                                cursor="pointer" 
                                color="onPrimary"
                                fontSize="md"
                                fontWeight="medium"
                                position="relative"
                                transition="all 0.2s ease"
                                _hover={{ 
                                    color: "primary",
                                    transform: "translateY(-2px)"
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: 0,
                                    width: "0%",
                                    height: "2px",
                                    bg: "primary",
                                    transition: "width 0.3s ease"
                                }}
                                sx={{
                                    "&:hover::after": {
                                        width: "100%"
                                    }
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                onClick={() => scrollToSection("projekter")} 
                                cursor="pointer" 
                                color="onPrimary"
                                fontSize="md"
                                fontWeight="medium"
                                position="relative"
                                transition="all 0.2s ease"
                                _hover={{ 
                                    color: "primary",
                                    transform: "translateY(-2px)"
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: 0,
                                    width: "0%",
                                    height: "2px",
                                    bg: "primary",
                                    transition: "width 0.3s ease"
                                }}
                                sx={{
                                    "&:hover::after": {
                                        width: "100%"
                                    }
                                }}
                            >
                                Projects
                            </Link>
                            <Link 
                                onClick={() => scrollToSection("kontakt")} 
                                cursor="pointer" 
                                color="onPrimary"
                                fontSize="md"
                                fontWeight="medium"
                                position="relative"
                                transition="all 0.2s ease"
                                _hover={{ 
                                    color: "primary",
                                    transform: "translateY(-2px)"
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-4px",
                                    left: 0,
                                    width: "0%",
                                    height: "2px",
                                    bg: "primary",
                                    transition: "width 0.3s ease"
                                }}
                                sx={{
                                    "&:hover::after": {
                                        width: "100%"
                                    }
                                }}
                            >
                                Contact
                            </Link>
                        </HStack>
                    </Flex>
                </Container>
            </Box>
            
            {/* Sektioner */}
            <Box id="forside" as="section" bg="appBg">  
                <Home scrollToSection={scrollToSection} />  {/* prop */}
            </Box>

            <Box id="projekter" as="section" bg="appBg"> 
                <Container as="main" maxW="container.lg" py={8}>
                    <Projects />
                </Container>
            </Box>

            <Box id="kontakt" as="section" bg="appBg">  
                <Container as="main" maxW="container.lg" py={8}>
                    <Contact />
                </Container>
            </Box>
        </Box>
    );
}

export default App;