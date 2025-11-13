import React from "react";
import { Box } from "@chakra-ui/react";
import { FaUnity } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { SiChakraui } from "react-icons/si";
import SkillBadge from "./SkillBadge";

/*
 * Container for all skill badges
 * Displays the tech stack in a flexible, wrapping layout
 */
export default function SkillBadges() {
    const skills = [
        { icon: TbBrandCSharp },
        { icon: DiVisualstudio, label: "Visual Studio" },
        { icon: FaUnity, label: "Unity" },
        { icon: SiBlender, label: "Blender" },
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: IoLogoJavascript, label: "JavaScript" },
        { icon: IoLogoReact, label: "React" },
        { icon: SiChakraui, label: "Chakra UI" }
        
    ];

    return (
        <Box
            display="flex"  // Flexbox layout for horizontal arrangement
            gap={3}  // 12px spacing between badge elements
            flexWrap="wrap"  // Wraps to next line if screen is too narrow
            justifyContent="center"  // Centers badges horizontally
            maxW="600px"  // Max width prevents badges from spreading too wide
            mt={4}  // Margin top: 16px (space above badges)
        >
            {skills.map((skill, index) => (
                <SkillBadge
                    key={index}
                    icon={skill.icon}
                    label={skill.label}
                />
            ))}
        </Box>
    );
}