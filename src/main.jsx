import { StrictMode } from 'react' // Import StrictMode from React so we can use it to wrap the app
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./Theme.jsx"; // Import the custom theme


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChakraProvider value={system}> {/* Chakra UI provider */}
            <App />
        </ChakraProvider>
    </StrictMode>
);


