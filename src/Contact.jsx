import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Contact section of the portfolio.
 */
export default function Contact() {
  return (
    <Box as="section" py={{ base: 16, md: 20 }} bg="appBg">
      <Container maxW="4xl">
        <VStack gap={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              mb={4}
              color="onPrimary"
            >
              Lad os komme i kontakt
            </Heading>
            <Text
              fontSize="lg"
              color="onPrimary"
              opacity={0.8}
            >
              Jeg er altid åben for nye muligheder og samarbejder
            </Text>
          </Box>

          {/* Contact Cards */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={6}
            mt={8}
          >
            {/* Email Card */}
            <Box
              as={Link}
              href="mailto:email@domain.com"
              bg="appBg"
              borderWidth="1px"
              borderColor="primary"
              borderRadius="md"
              p={6}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 0 20px rgba(78, 204, 163, 0.3)",
                textDecoration: "none",
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Box
                as={FaEnvelope}
                fontSize="3xl"
                color="primary"
              />
              <Text
                fontWeight="semibold"
                color="onPrimary"
                fontSize="lg"
              >
                Email
              </Text>
              <Text
                fontSize="sm"
                color="primary"
                wordBreak="break-word"
              >
                din.email@domain.com
              </Text>
            </Box>

            {/* GitHub Card */}
            <Box
              as={Link}
              href="https://github.com/user"
              isExternal
              bg="appBg"
              borderWidth="1px"
              borderColor="primary"
              borderRadius="md"
              p={6}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 0 20px rgba(78, 204, 163, 0.3)",
                textDecoration: "none",
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Box
                as={FaGithub}
                fontSize="3xl"
                color="primary"
              />
              <Text
                fontWeight="semibold"
                color="onPrimary"
                fontSize="lg"
              >
                GitHub
              </Text>
              <Text
                fontSize="sm"
                color="primary"
              >
                Se mine projekter
              </Text>
            </Box>

            {/* LinkedIn Card */}
            <Box
              as={Link}
              href="https://linkedin.com/in/mylinkedin"
              isExternal
              bg="appBg"
              borderWidth="1px"
              borderColor="primary"
              borderRadius="md"
              p={6}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 0 20px rgba(78, 204, 163, 0.3)",
                textDecoration: "none",
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
            >
              <Box
                as={FaLinkedin}
                fontSize="3xl"
                color="primary"
              />
              <Text
                fontWeight="semibold"
                color="onPrimary"
                fontSize="lg"
              >
                LinkedIn
              </Text>
              <Text
                fontSize="sm"
                color="primary"
              >
                Forbind med mig
              </Text>
            </Box>
          </SimpleGrid>

          {/* Alternative: Simple Links Section */}
          <Box
            textAlign="center"
            pt={8}
            borderTop="1px"
            borderColor="primary"
            opacity={0.6}
          >
            <Text fontSize="sm" color="onPrimary">
              Eller find mig på:{" "}
              <Link
                href="https://github.com/din-bruger"
                isExternal
                color="primary"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
              >
                GitHub
              </Link>
              {" • "}
              <Link
                href="https://linkedin.com/in/din-linkedin"
                isExternal
                color="primary"
                fontWeight="semibold"
                _hover={{ textDecoration: "underline" }}
              >
                LinkedIn
              </Link>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}