import React from 'react';

const Footer = () => {
  return (
    <section className="relative min-h-[52vh] flex flex-col justify-center items-center text-white text-center p-6 bg-transparent">
      {/* Dark Overlay halus agar teks tetap mudah dibaca */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

      <div className="relative z-10 max-w-md w-full space-y-10 flex flex-col items-center">
        
        {/* Title Header (TERIMA • KASIH) */}
        <div className="flex items-center justify-center gap-4 w-full px-2">
          <div className="h-[1px] bg-white/40 flex-1"></div>
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-light">
            TERIMA &bull; KASIH
          </h2>
          <div className="h-[1px] bg-white/40 flex-1"></div>
        </div>

        {/* Paragraf Ucapan */}
        <p className="text-xs md:text-sm text-gray-200 font-serif leading-relaxed px-4 font-light tracking-wide">
          Merupakan sebuah kehormatan dan kebahagiaan bagi Kami jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi Kami
        </p>

        {/* Branding Section */}
        <div className="space-y-1 pt-1">
          <p className="text-[11px] text-gray-300 italic font-serif">
            e-invitation
          </p>
          <h3 className="font-serif text-3xl font-light tracking-wide text-white">
            A S V N
          </h3>
          <p className="text-[9px] tracking-[0.2em] text-gray-200 font-bold uppercase pt-2">
            CREATED BY ASVNNDKA
          </p>
        </div>

        {/* Social / Contact Links */}
        <div className="flex justify-center items-center gap-6 pt-4 text-xs text-gray-200">
          <a 
            href="https://wa.me" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 hover:text-white transition opacity-90 hover:opacity-100"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 hover:text-white transition opacity-90 hover:opacity-100"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 hover:text-white transition opacity-90 hover:opacity-100"
          >
          </a>
        </div>

      </div>
    </section>
  );
};

export default Footer;