import React from "react";
import { Box, Heading } from "@chakra-ui/react";

/*
 * Hero heading component with gradient accent on last name
 */
export default function HeroHeading({ firstName, lastName }) {
    return (
        <Heading
            as="h1"  // Renders as <h1> tag (important for SEO)
            fontWeight="extrabold"  // Heaviest font weight available
            lineHeight="1.1"  // Line height 110% of font size (tighter lines)
            letterSpacing="-0.02em"  // Reduces space between letters slightly
            fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}  // Responsive: 48px ? 72px ? 96px
            color="onPrimary"  // Light text color from theme
            textAlign="center"  // Centers text horizontally
        >
            {firstName} {lastName}
            <br />
            <Box
                as="span"  // Inline element for gradient text effect
                bgGradient="linear(to-r, primary, accent)"  // Linear gradient from green to yellow
                bgClip="text"  // Clips background to text shape
                display="inline-block"  // Required for bgClip to work properly
            >
                
            </Box>
        </Heading>
    );
}