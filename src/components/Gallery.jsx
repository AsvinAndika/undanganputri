import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const featuredPhoto = "/assets/galeri/galeri4.jpeg"; 

const gridPhotos = [
  "/assets/galeri/galeri2.jpeg",
  "/assets/galeri/galeri7.jpeg",
  "/assets/galeri/galeri9.jpeg",
  "/assets/galeri/galeri5.jpeg",
  "/assets/galeri/galeri6.jpeg",
  "/assets/galeri/galeri8.jpeg",
  "/assets/galeri/galeri3.jpeg",
  "/assets/galeri/galeri10.jpeg",
];

const allPhotos = [featuredPhoto, ...gridPhotos];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  // Kunci scroll halaman utama ketika lightbox terbuka
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // Navigasi Keyboard (ESC, Panah Kiri, Panah Kanan)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="text-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-md w-full space-y-6">
        
        {/* Title Header */}
        <div className="flex items-center gap-4 w-full">
          <h2 className="font-serif text-xl tracking-[0.2em] uppercase font-light">
            GALLERY
          </h2>
          <div className="h-[1px] bg-white/30 flex-1"></div>
        </div>

        {/* Featured Big Banner Photo */}
        <div 
          onClick={() => handleOpen(0)}
          className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 shadow-xl cursor-pointer group"
        >
          <img 
            src={featuredPhoto} 
            alt="Featured Gallery" 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300 flex items-center justify-center">
            <p className="text-[10px] tracking-[0.3em] font-serif uppercase text-white/80 drop-shadow-sm">
              IWAN &bull; NIA
            </p>
          </div>
        </div>

        {/* 4-Column Grid Photos */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {gridPhotos.map((url, idx) => {
            const photoIndex = idx + 1;
            return (
              <div 
                key={idx} 
                onClick={() => handleOpen(photoIndex)}
                className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 shadow-md group cursor-pointer"
              >
                <img 
                  src={url} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-out" 
                />
              </div>
            );
          })}
        </div>

      </div>

      {/* --- LIGHTBOX MODAL FULLSCREEN VIA PORTAL --- */}
      {selectedIndex !== null &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8">
            
            {/* Header Lightbox (Indikator & Tombol Close) */}
            <div className="w-full max-w-2xl flex justify-between items-center text-white/80 text-xs font-serif tracking-widest pt-2 px-2 z-10">
              <span>
                {selectedIndex + 1} / {allPhotos.length}
              </span>
              <button
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Area Utama Foto + Navigasi Kiri / Kanan */}
            <div className="relative w-full max-w-2xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={handlePrev}
                className="absolute left-2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                aria-label="Previous"
              >
                ‹
              </button>

              <img
                src={allPhotos[selectedIndex]}
                alt={`Gallery Detail ${selectedIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-100"
              />

              <button
                onClick={handleNext}
                className="absolute right-2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                aria-label="Next"
              >
                ›
              </button>
            </div>

          </div>,
          document.body
        )}
    </section>
  );
};

export default Gallery;