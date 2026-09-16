import { useState, useEffect, useRef, memo } from 'react';
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
  "/assets/galeri/galeri1.jpeg",
  "/assets/galeri/galeri9.jpeg",
  "/assets/galeri/galeri5.jpeg",
  "/assets/galeri/galeri6.jpeg",
  "/assets/galeri/galeri4.jpeg",
  "/assets/galeri/galeri3.jpeg",
  "/assets/galeri/galeri10.jpeg",
];

const MUSIC_URL = '/assets/musik.mp3';

const AnimatedSection = memo(({ children, animation = 'fade-up', delay = 0, duration = 1000 }) => {
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
      { threshold: 0.08 }
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getInitialStyle = () => {
    switch (animation) {
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'fade-left':
        return 'opacity-0 translate-x-8';
      case 'fade-right':
        return 'opacity-0 -translate-x-8';
      case 'blur-in':
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  const getVisibleStyle = () => 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${isVisible ? getVisibleStyle() : getInitialStyle()}`}
    >
      {children}
    </div>
  );
});

const Invitation = () => {
  const [bgIndices, setBgIndices] = useState({ current: 0, next: 1, activeLayer: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicBtn, setShowMusicBtn] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasRolled = sessionStorage.getItem('isRolled') === 'true';
    const scrolledFar = window.scrollY > 50;
    return hasRolled || scrolledFar;
  });

  const audioRef = useRef(null);

  /**
   * Optimasi 2: Double-Buffer Background Slideshow
   * Dibandingkan membuat 8 elemen `<div>` di DOM secara bersamaan,
   * teknik ini hanya merender 2 elemen `<div>` aktif untuk menghemat memori & rendering GPU.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndices((prev) => {
        const nextIndex = (prev.next + 1) % globalBgImages.length;
        return {
          current: prev.next,
          next: nextIndex,
          activeLayer: prev.activeLayer === 0 ? 1 : 0,
        };
      });
    }, 6000);

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
      {/* Audio Element (Optimasi 3: preload="none" agar hemat kuota/load awal) */}
      <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />

      {/* Optimized Dual-Layer Background Slideshow */}
      <div className="fixed inset-0 max-w-md mx-auto pointer-events-none z-0 overflow-hidden">
        {/* Layer A */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            bgIndices.activeLayer === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${globalBgImages[bgIndices.activeLayer === 0 ? bgIndices.current : bgIndices.next]}')`,
          }}
        />

        {/* Layer B */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            bgIndices.activeLayer === 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${globalBgImages[bgIndices.activeLayer === 1 ? bgIndices.current : bgIndices.next]}')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-brightness-90"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10">
        <Hero onRollClick={handleRollClick} />

        <main className="space-y-6">
          <AnimatedSection animation="fade-up" duration={1000}>
            <Doa />
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" duration={1000}>
            <CoupleDetails />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" duration={1000}>
            <EventDetails targetDate="2026-09-28T09:00:00" />
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" duration={1000}>
            <Gift />
          </AnimatedSection>

          <AnimatedSection animation="fade-left" duration={1000}>
            <Gallery />
          </AnimatedSection>

          {/* <AnimatedSection animation="fade-right" duration={1000}>
            <Wishes />
          </AnimatedSection> */}
        </main>

        <AnimatedSection animation="fade-up" duration={1000}>
          <Footer />
        </AnimatedSection>
      </div>

      {/* Floating Music Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          showMusicBtn
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMusic}
          aria-label="Toggle Music"
          className="w-11 h-11 rounded-full bg-black/60 border border-white/30 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
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