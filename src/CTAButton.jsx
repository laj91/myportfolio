import React from "react";
import { Button } from "@chakra-ui/react";

/*
 * Call-to-action button with enhanced hover effects
 */
export default function CTAButton({ onClick, children }) {
    return (
        <Button
            size="lg"  // Large Chakra UI button size preset
            bg="primary"  // Green background color
            color="appBg"  // Dark text color (good contrast)
            fontSize="lg"  // Large font size (18px)
            fontWeight="bold"  // Bold text weight
            px={8}  // Padding horizontal: 32px
            py={6}  // Padding vertical: 24px
            mt={2}  // Margin top: 8px
            borderRadius="md"  // Medium rounded corners (8px from theme)
            boxShadow="0 4px 20px rgba(78, 204, 163, 0.3)"  // Green glow shadow effect
            transition="all 0.3s ease"  // Smooth transition for all animatable properties
            _hover={{  // Pseudo-class for hover state
                bg: "accent",  // Changes to yellow on hover
                transform: "translateY(-4px) scale(1.05)",  // Lifts up and scales slightly
                boxShadow: "0 8px 30px rgba(255, 215, 0, 0.4)"  // Stronger yellow glow on hover
            }}
            _active={{  // Pseudo-class for active/clicked state
                transform: "translateY(-2px) scale(1.02)"  // Less pronounced effect when clicked
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}