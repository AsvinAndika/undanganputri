
const CoupleDetails = () => {
  return (
    <section className="relative min-h-screen w-full py-16 px-4 flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Glass Card Container (Sesuai Desain Gambar Referensi) */}
      <div className="relative z-10 max-w-md w-full bg-black/35 backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-8 text-center text-white shadow-2xl">
        
        {/* --- GROOM SECTION --- */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="font-serif tracking-[0.25em] text-xs uppercase text-gray-300 font-light">
            THE GROOM
          </h3>
          {/* Photo Groom */}
          <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/galeri/mempelai1.jpeg" 
              alt="The Groom" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Name & Parents Info */}
          <div className="space-y-1.5 pt-2">
            <h2 className="font-serif text-2xl font-medium tracking-wide text-white">
              Lalu Iwan Zulkipli
            </h2>
            <p className="text-xs text-gray-300 font-serif italic font-light tracking-wide">
              Putra dari Bapak Lalu Zainudin Muin<br />& Alm. Ibu Sabakyah
            </p>
          </div>

          {/* Instagram Link Button */}
          <a 
            href="https://www.instagram.com/laluiwan34?stkn=MWx2eHBoaHJkczEwaA==" 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 backdrop-blur-md shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* --- DIVIDER (&) --- */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] bg-white/30 flex-1"></div>
          <span className="font-serif text-3xl font-light italic text-white">&</span>
          <div className="h-[1px] bg-white/30 flex-1"></div>
        </div>

        {/* --- BRIDE SECTION --- */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="font-serif tracking-[0.25em] text-xs uppercase text-gray-300 font-light">
            THE BRIDE
          </h3>

          {/* Photo Bride Card */}
          <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/assets/galeri/mempelai2.jpeg"  
              alt="The Bride" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Name & Parents Info */}
          <div className="space-y-1.5 pt-2">
            <h2 className="font-serif text-2xl font-medium tracking-wide text-white">
              Nia Ramadani Putri
            </h2>
            <p className="text-xs text-gray-300 font-serif italic font-light tracking-wide">
              Putri dari Bapak Ashadi Cahyadi<br />& Ibu Baiq Zohrah
            </p>
          </div>

          {/* Instagram Link Button */}
          <a 
            href="https://www.instagram.com/see.niaaaa_?stkn=MXRyYjlzOWl3aWhyZQ==" 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 backdrop-blur-md shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CoupleDetails;