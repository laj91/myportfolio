import React from "react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
    return (
        <Router>
            <Box as="header" borderBottomWidth="1px">
                <Container maxW="container.lg">
                    <Flex h={16} align="center" justify="space-between">
                        <Heading size="md">Nicolaj</Heading>
                        <HStack as="nav" spacing={4}>
                            <Link as={RouterLink} to="/">Forside</Link>
                            <Link as={RouterLink} to="/projekter">Projekter</Link>
                            <Link as={RouterLink} to="/kontakt">Kontakt</Link>
                        </HStack>
                    </Flex>
                </Container>
            </Box>
            <Container as="main" maxW="container.lg" py={8}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projekter" element={<Projects />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;