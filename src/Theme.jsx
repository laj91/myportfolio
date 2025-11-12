import { createSystem, defaultConfig } from "@chakra-ui/react";

/**
 * Custom Chakra UI theme for a modern portfolio design.
 */
export const system = createSystem(defaultConfig, { // Extend the default Chakra UI theme and customize it
    theme: {
        tokens: {
            colors: {
                brand: {
                    bg: { value: "#1E1E2F" },     // primary app background
                    surface: { value: "#F5F5F7" }, // card/section background
                    primary: { value: "#4ECCA3" }, // buttons/links
                    text: { value: "#F5F5F7" }, // light text
                    accent: { value: "#FFD700" }, // yellow color for accent
                }
            },
            fonts: {
                body: { value: "'Segoe UI', Arial, sans-serif" },
                heading: { value: "'Segoe UI', Arial, sans-serif" }
            },
            radii: { // radius for corners
                md: { value: "8px" }, // Soft corners
                slideshow: { value: "8px" } // Specific for slideshow
            },
            shadows: { 
                card: { value: "0 2px 8px rgba(0,0,0,0.06)" }, // Soft shadows
                cardHover: { value: "0 4px 16px rgba(0,0,0,0.12)" } // Stronger shadows on hover
            },
            transitions: {
                default: { value: "all 0.2s ease" }, // standard transition
                slideshow: { value: "transform 0.5s ease-in-out" } // transition for slideshows
            }
        },
        semanticTokens: {
            colors: {
                appBg: { value: "{colors.brand.bg}" },  // app background
                surface: { value: "{colors.brand.surface}" }, // card/section background
                primary: { value: "{colors.brand.primary}" }, // buttons/links
                onPrimary: { value: "{colors.brand.text}" }, // text on buttons/links
                accent: { value: "{colors.brand.accent}" } // accent color
            }
        },
        // Global base styles (replace your body/header rules)
        styles: {
            global: {
                "html, body, #root": {
                    height: "100%",
                    bg: "appBg",  // Use semantic token name directly
                    color: "onPrimary"  // Or "white" / "brand.text"
                },
                "*": {
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale"
                }
            }
        }
    }
});