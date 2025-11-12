import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, HStack, Text } from "@chakra-ui/react";

/**
 * A slideshow component that supports both images and videos,
 * with automatic playback and manual navigation.
 */
const ImageSlideshow = ({ media, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  // Handles the automatic slideshow timer
  useEffect(() => {
    if (isPaused || media.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, media.length, interval]);

  // Event handlers to pause the slideshow when a video plays
  const handleVideoPlay = () => setIsPaused(true);
  const handleVideoPauseOrEnd = () => setIsPaused(false);

  // Handles navigation, ensuring videos are paused when switching slides
  //const handleNavigation = (newIndex) => {
  //  if (media[currentIndex].type === 'video' && videoRef.current) {
  //    videoRef.current.pause();
  //  }
  //  setIsPaused(false);
  //  setCurrentIndex(newIndex);
  //};

  if (!media || media.length === 0) {
    return <Text>No media to display.</Text>;
  }

  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="slideshow"
      aspectRatio="16 / 9"
      maxH="260px"
      bg="appBg"
    >
      {/* Slides container */}
      <Box
        display="flex"
        h="100%"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
          >
        {/* Map media items to slides using the item type from media */}
        {media.map((item, index) => (
           <Box 
            key={index}
            flex="0 0 100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {item.type === 'image' ? (
              <Box // Box for image slide 
                as="img"
                src={item.src}
                alt={`Slide ${index + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
              />
            ) : (
              <Box // Box for video slide
                as="video"
                ref={index === currentIndex ? videoRef : null}
                src={item.src}
                controls
                playsInline
                w="100%"
                h="100%"
                objectFit="cover"
                display="block"
                onPlay={handleVideoPlay}
                onPause={handleVideoPauseOrEnd}
                onEnded={handleVideoPauseOrEnd}
              />
            )}
          </Box>
        ))}
      </Box>
      {/*Button section disabled as it is to cramped in new design*/ }
      {/* Slideshow Controls */}
      {/*<HStack*/}
      {/*  position="absolute"*/}
      {/*  bottom="10px"*/}
      {/*  left="50%"*/}
      {/*  transform="translateX(-50%)"*/}
      {/*  bg="blackAlpha.700"*/}
      {/*  color="onPrimary"*/}
      {/*  px={3}*/}
      {/*  py={2}*/}
      {/*  borderRadius="md"*/}
      {/*  zIndex={10}*/}
      {/*  gap={2}*/}
      {/*>*/}
        {/*<Button*/}
        {/*  size="sm"*/}
        {/*  onClick={() => handleNavigation((currentIndex - 1 + media.length) % media.length)} // Jump to previous slide if not paused*/}
        {/*  bg="primary"*/}
        {/*  color="appBg"*/}
        {/*  _hover={{ bg: "surface", color: "appBg" }}*/}
        {/*  transition="default"*/}
        {/*>*/}
        {/*  Prev*/}
        {/*</Button>*/}
        {/*<Text fontSize="sm">*/}
        {/*  {currentIndex + 1} / {media.length} */}{/* Show current slide number */}
        {/*</Text>*/}
        {/*<Button*/}
        {/*  size="sm"*/}
        {/*  onClick={() => handleNavigation((currentIndex + 1) % media.length)} // Jump to next slide if not paused*/}
        {/*  bg="primary"*/}
        {/*  color="appBg"*/}
        {/*  _hover={{ bg: "surface", color: "appBg" }}*/}
        {/*  transition="default"*/}
        {/*>*/}
        {/*  Next*/}
        {/*</Button>*/}
      {/*</HStack>*/}
    </Box>
  );
};

export default ImageSlideshow;