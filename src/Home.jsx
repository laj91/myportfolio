import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

/*
 * Home section of the portfolio. 
 * Displays the hero section with enhanced animations.
 */

export default function Home({ scrollToSection }) {  // Added scrollToSection as a prop
    return (
        <Box 
            as="section" 
            minH="100vh" 
            position="relative" 
            overflow="hidden"
            display="flex"
            alignItems="center"
        >
            {/* Animated background gradient */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.1"
                bgGradient="radial(circle at 30% 50%, primary, transparent 70%)"
                pointerEvents="none"
            />

            {/* Hero section */}
            <Box
                bg="appBg"
                w="100%"
                pt={{ base: 16, md: 24 }}
                pb={{ base: 20, md: 32 }} 
                position="relative"
            >
                <Container maxW="7xl" textAlign="center">
                    <VStack gap={8} align="center"> 
                        {/* Main heading with gradient accent */}
                        <Heading
                            as="h1"
                            fontWeight="extrabold"
                            lineHeight="1.1"
                            letterSpacing="-0.02em"
                            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}
                            color="onPrimary"
                            textAlign="center"
                        >
                            Nicolaj Bondrup
                            <br />
                            <Box 
                                as="span" 
                                bgGradient="linear(to-r, primary, accent)"
                                bgClip="text"
                                display="inline-block"
                            >
                                Bertelsen
                            </Box>
                        </Heading>

                        {/* Animated subtitle */}
                        <Box
                            bg="primary"
                            color="appBg"
                            px={6}
                            py={3}
                            borderRadius="full"
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="bold"
                            boxShadow="0 0 20px rgba(78, 204, 163, 0.4)"
                            transition="all 0.3s ease"
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "0 0 30px rgba(78, 204, 163, 0.6)"
                            }}
                        >
                            C# | Unity Game Engine | VR | Web Apps
                        </Box>

                        {/* Description */}
                        <Text
                            fontSize={{ base: "xl", md: "2xl" }}
                            color="onPrimary"
                            maxW="2xl"
                            lineHeight="1.6"
                            opacity={0.9}
                        >
                            Jeg bygger robuste, skalerbare systemer med fokus på kvalitet og performance
                        </Text>

                        {/* CTA Button with enhanced styling */}
                        <Button 
                            size="lg"
                            bg="primary"
                            color="appBg"
                            fontSize="lg"
                            fontWeight="bold"
                            px={8}
                            py={6}
                            mt={8}  
                            borderRadius="md"
                            boxShadow="0 4px 20px rgba(78, 204, 163, 0.3)"
                            transition="all 0.3s ease"
                            _hover={{ 
                                bg: "accent",
                                transform: "translateY(-4px) scale(1.05)",
                                boxShadow: "0 8px 30px rgba(255, 215, 0, 0.4)"
                            }}
                            _active={{
                                transform: "translateY(-2px) scale(1.02)"
                            }}
                            onClick={() => scrollToSection("projekter")}  // Using scrollToSection prop
                        >
                            SE MINE PROJEKTER ?
                        </Button>

                        {/* Add scroll indicator - moved further down */}
                        <Box
                            position="absolute"
                            bottom="40px"  
                            left="50%"
                            transform="translateX(-50%)"
                            animation="bounce 2s infinite"
                        >
                            <Text
                                fontSize="xs"
                                color="primary"
                                fontWeight="semibold"
                                mb={3}  
                            >
                                Scroll ned
                            </Text>
                            <Box
                                w="2px"
                                h="30px"
                                bg="primary"
                                mx="auto"
                                opacity={0.6}
                            />
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
}