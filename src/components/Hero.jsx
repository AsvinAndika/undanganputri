import { useState, useEffect } from 'react';

// Fungsi Custom Smooth Scroll (Super Pelan & Smooth 1.8 Detik)
const smoothScrollTo = (targetEl, duration = 1800) => {
  if (!targetEl) return;
  const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * easeProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Hero = ({ onRollClick }) => {
  const [isRolled, setIsRolled] = useState(false);
  const [guestName] = useState(() => {
    if (typeof window === 'undefined') return 'Tamu Undangan';

    const params = new URLSearchParams(window.location.search);
    return params.get('to') || params.get('tamu') || params.get('dear') || 'Tamu Undangan';
  });

  // 2. Kunci Scroll Total (Desktop & Perangkat Touch/Mobile)
  useEffect(() => {
    const preventTouch = (e) => {
      e.preventDefault();
    };

    if (!isRolled) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
      document.body.style.height = '100%';

      window.addEventListener('touchmove', preventTouch, { passive: false });
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';

      window.removeEventListener('touchmove', preventTouch);
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      window.removeEventListener('touchmove', preventTouch);
    };
  }, [isRolled]);

  const handleScroll = () => {
    setIsRolled(true);

    if (onRollClick) {
      onRollClick();
    }

    setTimeout(() => {
      const doaSection = document.getElementById('doa');
      if (doaSection) {
        smoothScrollTo(doaSection, 1800);
      }
    }, 100);
  };

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-end items-center text-white text-center pb-8 sm:pb-12 px-6 overflow-hidden bg-transparent">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full space-y-2 sm:space-y-3 mb-2">
        {/* Subtitle */}
        <p className="tracking-[0.35em] text-[10px] sm:text-[11px] font-light uppercase text-gray-200">
          THE WEDDING OF
        </p>

        {/* Nama Mempelai */}
        <h1 className="text-2xl sm:text-3xl font-serif tracking-[0.15em] font-medium uppercase text-white drop-shadow-md">
          IWAN &bull; NIA
        </h1>

        {/* Tanggal */}
        <p className="text-[10px] sm:text-[11px] tracking-[0.25em] font-medium uppercase text-gray-200 pt-0.5 sm:pt-1">
          MINGGU, 4 OKTOBER 2026
        </p>

        {/* Penerima Undangan */}
        <div className="pt-1 sm:pt-2 text-center space-y-0.5">
          <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-light text-gray-300">
            DEAR,
          </p>
          <p className="font-serif italic text-base sm:text-lg text-gray-100 font-medium capitalize">
            {guestName}
          </p>
        </div>

        {/* Button Let's Roll */}
        <div
          className={`pt-2 sm:pt-3 transition-all duration-700 ease-out ${
            isRolled
              ? 'opacity-0 pointer-events-none translate-y-4 scale-95'
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          <button
            onClick={handleScroll}
            className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-white/70 bg-black/50 text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            LET'S ROLL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;