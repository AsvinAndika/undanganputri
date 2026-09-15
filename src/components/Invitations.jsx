import { useState, useEffect, useRef } from 'react';
import Hero from './Hero';
import Doa from './Doa';
import CoupleDetails from './CoupleDetails';
import EventDetails from './EventDetails';
import Gift from './Gift';
import Gallery from './Gallery';
// import Wishes from './Wishes';
import Footer from './Footer';

const globalBgImages = [
  "/assets/galeri/galeri2.jpeg",
  "/assets/galeri/galeri7.jpeg",
  "/assets/galeri/galeri9.jpeg",
  "/assets/galeri/galeri5.jpeg",
  "/assets/galeri/galeri6.jpeg",
  "/assets/galeri/galeri8.jpeg",
  "/assets/galeri/galeri3.jpeg",
  "/assets/galeri/galeri10.jpeg",
];

const MUSIC_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-romantic-acoustic-guitar-113578.mp3';

// Wrapper Animasi Scroll Reveal
const AnimatedSection = ({ children, animation = 'fade-up', delay = 0, duration = 1600 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getInitialStyle = () => {
    switch (animation) {
      case 'blur-in':
        return 'opacity-0 blur-lg scale-95 translate-y-6';
      case 'zoom-in':
        return 'opacity-0 scale-90 blur-md';
      case 'fade-left':
        return 'opacity-0 translate-x-16 blur-sm';
      case 'fade-right':
        return 'opacity-0 -translate-x-16 blur-sm';
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-16 scale-[0.97] blur-sm';
    }
  };

  const getVisibleStyle = () => 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0';

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`transition-all transform will-change-transform ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      }`}
    >
      {children}
    </div>
  );
};

const Invitation = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicBtn, setShowMusicBtn] = useState(() => {
    const hasRolled = sessionStorage.getItem('isRolled') === 'true';
    const scrolledFar = typeof window !== 'undefined' && window.scrollY > 50;
    return hasRolled || scrolledFar;
  });
  const audioRef = useRef(null);

  // Background Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % globalBgImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Dipanggil ketika LET'S ROLL diklik
  const handleRollClick = () => {
    setShowMusicBtn(true);
    sessionStorage.setItem('isRolled', 'true');
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  };

  // Toggle Play / Pause Manual
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="bg-black text-white font-sans max-w-md mx-auto shadow-2xl relative min-h-screen overflow-hidden">
      {/* Audio Element */}
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

      {/* Global Background Slideshow */}
      <div className="fixed inset-0 max-w-md mx-auto pointer-events-none z-0 overflow-hidden">
        {globalBgImages.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out ${
              index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transform transition-transform duration-[7000ms] ease-out`}
            style={{ backgroundImage: `url('${imgUrl}')` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-90"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10">
        <Hero onRollClick={handleRollClick} />

        <main className="space-y-6">
          <AnimatedSection animation="blur-in" duration={1800}>
            <Doa />
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" duration={1600}>
            <CoupleDetails />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" duration={1600}>
            <EventDetails targetDate="2026-09-28T09:00:00" />
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" duration={1600}>
            <Gift />
          </AnimatedSection>

          <AnimatedSection animation="fade-left" duration={1600}>
            <Gallery />
          </AnimatedSection>

          {/* <AnimatedSection animation="fade-right" duration={1600}>
            <Wishes />
          </AnimatedSection> */}
        </main>

        <AnimatedSection animation="blur-in" duration={1800}>
          <Footer />
        </AnimatedSection>
      </div>

      {/* Floating Music Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 ease-out ${
          showMusicBtn
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMusic}
          aria-label="Toggle Music"
          className="w-11 h-11 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {isPlaying ? (
            <svg
              className="w-5 h-5 animate-spin"
              style={{ animationDuration: '4s' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.27 4.27.27.27L21 20.73 19.73 22l-9-9L4.27 3zM14 7h4V3h-6v5.18l2 2V7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Invitation;