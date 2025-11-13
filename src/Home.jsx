import React from "react";
import {
  Box,
  Container,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeroHeading from "./HeroHeading";
import ScrollIndicator from "./ScrollIndicator";
import CTAButton from "./CTAButton";
import SkillBadges from "./SkillBadges";

/*
 * Home section of the portfolio. 
 * Displays the hero section with enhanced animations.
 */
export default function Home({ scrollToSection }) {  // Receives scrollToSection function as a prop
    return (
        <Box 
            as="section"  // Renders as HTML <section> element for semantic markup
            minH="100vh"  // Minimum height of 100% viewport height
            position="relative"  // Enables absolute positioning for child elements
            overflow="hidden"  // Hides any content that overflows the box
            display="flex"  // Activates flexbox layout
            alignItems="center"  // Centers content vertically
        >
            {/* Animated background gradient */}
            <Box
                position="absolute"  // Positions relative to nearest relative parent
                top="0"  // Aligns to top edge
                left="0"  // Aligns to left edge
                right="0"  // Stretches to right edge
                bottom="0"  // Stretches to bottom edge
                opacity="0.1"  
                bgGradient="radial(circle at 30% 50%, primary, transparent 70%)"  // Radial gradient from primary color
                pointerEvents="none"  // Ignores mouse events (allows clicking through)
            />

            {/* Hero section */}
            <Box
                bg="appBg"  // Background color from theme (dark blue)
                w="100%"  // Full width
                pt={{ base: 16, md: 24 }}  // Padding top: 64px mobile, 96px desktop
                pb={{ base: 20, md: 32 }}  // Padding bottom: 80px mobile, 128px desktop
                position="relative"  // Reference point for absolute children
            >
                <Container maxW="7xl" textAlign="center">  {/* Max width 1280px, centered text */}
                    <VStack gap={8} align="center">  {/* Vertical stack with 32px gap between elements */}
                        
                        {/* Main heading */}
                        <HeroHeading 
                            firstName="Nicolaj Bondrup" 
                            lastName="Bertelsen" 
                        />
                       
                        {/* Description */}
                        <Text
                            fontSize={{ base: "xl", md: "2xl" }}  // 20px on mobile, 24px on desktop
                            color="onPrimary"  // Light text color
                            maxW="2xl"  // Max width 672px (keeps text readable)
                            lineHeight="1.6"  // Good readability (160% of font size)
                            opacity={0.9}  // 90% opacity (slightly softer than heading)
                        >
                            I'm building beautiful and functional games and web applications that make a difference.
                        </Text>

                        {/* Scroll indicator */}
                        <ScrollIndicator text="Scroll down" />

                        {/* CTA Button */}
                        <CTAButton onClick={() => scrollToSection("projekter")}>
                            See My Work
                        </CTAButton>
                        
                        {/* Skill badges */}
                        <SkillBadges />
                        
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
}