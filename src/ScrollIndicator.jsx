import React from "react";
import { Box, Text } from "@chakra-ui/react";

/*
 * Animated scroll indicator with bounce animation
 */
export default function ScrollIndicator({ text = "Scroll ned" }) {
    return (
        <Box
            mt={2}  // Margin top: 8px
            animation="bounce 2s infinite"  // Chakra's built-in bounce animation, 2 second loop
        >
            <Text
                fontSize="xs"  // Extra small font size (12px)
                color="primary"  // Green color from theme
                fontWeight="semibold"  // Medium-bold weight
                mb={3}  // Margin bottom: 12px (space between text and line)
            >
                {text}
            </Text>
            <Box
                w="2px"  // Width of 2 pixels (thin vertical line)
                h="30px"  // Height of 30px
                bg="primary"  // Green background color
                mx="auto"  // Centers horizontally (margin left/right auto)
                opacity={0.6}  // 60% opacity for subtle effect
            />
        </Box>
    );
}