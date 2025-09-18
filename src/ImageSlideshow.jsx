import React, { useState, useEffect, useRef } from 'react';

/**
 * A slideshow component that supports both images and videos,
 * with automatic playback and manual navigation.
 */
const ImageSlideshow = ({ media, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Pauses the auto-play when a video is active.
  const videoRef = useRef(null); // Direct reference to the currently active video element.

  // Handles the automatic slideshow timer.
  useEffect(() => {
    if (isPaused || media.length <= 1) {
      return; // Do nothing if paused or if there's only one item.
    }

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, interval);

    // Cleanup: clears the timer when the component unmounts or dependencies change.
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, media.length, interval]);

  // Event handlers to pause the slideshow when a video plays.
  const handleVideoPlay = () => setIsPaused(true);
  const handleVideoPauseOrEnd = () => setIsPaused(false);

  // Handles navigation, ensuring videos are paused when switching slides.
  const handleNavigation = (newIndex) => {
    if (media[currentIndex].type === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setIsPaused(false); // Always resume auto-play on manual navigation.
    setCurrentIndex(newIndex);
  };

  if (!media || media.length === 0) {
    return <div>No media to display.</div>;
  }

  return (
    <div className="image-slideshow">
      {/* The inner container moves to create the sliding effect. */}
      <div className="slideshow-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {media.map((item, index) => (
          <div className="slide" key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={`Slide ${index + 1}`} className="slide-media" />
            ) : (
              <video
                // Assign the ref only to the currently visible video.
                ref={index === currentIndex ? videoRef : null}
                src={item.src}
                controls
                className="slide-media"
                onPlay={handleVideoPlay}
                onPause={handleVideoPauseOrEnd}
                onEnded={handleVideoPauseOrEnd}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="slideshow-controls">
        <button
          onClick={() => {
            const newIndex = (currentIndex - 1 + media.length) % media.length;
            handleNavigation(newIndex);
          }}
        >
          Prev
        </button>
        <span>
          {currentIndex + 1} / {media.length}
        </span>
        <button
          onClick={() => {
            const newIndex = (currentIndex + 1) % media.length;
            handleNavigation(newIndex);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;