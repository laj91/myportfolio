import React from "react";
import { Box } from "@chakra-ui/react";

/*
 * Individual skill badge with icon and label
 * Displays technology/skill with hover effect
 */
export default function SkillBadge({ icon: Icon, label }) {
    return (
        <Box
            bg="primary"  // Green background
            color="appBg"  // Dark text color
            px={4}  // Padding horizontal: 16px
            py={2}  // Padding vertical: 8px
            borderRadius="full"  // Fully rounded corners (pill shape)
            display="flex"  // Flexbox for icon + text alignment
            alignItems="center"  // Vertically centers icon and text
            gap={2}  // 8px space between icon and text
            fontSize="md"  // Medium font size (16px)
            fontWeight="semibold"  // Medium-bold weight
            boxShadow="0 2px 10px rgba(78, 204, 163, 0.3)"  // Subtle green shadow
            transition="all 0.2s ease"  // Quick transition for hover effects
            _hover={{  // Hover state styling
                transform: "translateY(-2px)",  // Lifts badge up slightly
                boxShadow: "0 4px 15px rgba(78, 204, 163, 0.5)"  // Stronger shadow on hover
            }}
        >
            {Icon && <Icon />}  {/* Renders icon component if provided */}
            {label}
        </Box>
    );
}