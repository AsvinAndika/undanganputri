import { useState, useEffect } from 'react';

const photos = [
  "/assets/galeri/galeri1.jpeg",
  "/assets/galeri/galeri2.jpeg",
  "/assets/galeri/galeri4.jpeg",
  "/assets/galeri/galeri7.jpeg",
  "/assets/galeri/galeri9.jpeg",
  "/assets/galeri/galeri5.jpeg",
  "/assets/galeri/galeri6.jpeg",
  "/assets/galeri/galeri10.jpeg",
];

const Doa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplikasi foto untuk efek infinite looping carousel yang seamless
  const extendedPhotos = [...photos, ...photos.slice(0, 3)];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // Reset indeks ke awal secara transparan saat mencapai akhir duplikasi
  useEffect(() => {
    if (currentIndex === photos.length) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 800); // Disesuaikan dengan durasi animasi CSS (800ms)

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <section id="doa" className="bg-black text-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-md w-full space-y-6">
        
        {/* Title / Surah Header (Rata Kiri + Garis Memanjang ke Kanan) */}
        <div className="flex items-center gap-4 w-full">
          <h2 className="font-serif text-xl italic font-light tracking-wide whitespace-nowrap">
            QS. Ar-Rum : 21
          </h2>
          <div className="h-[1px] bg-white/40 flex-1"></div>
        </div>

        {/* Text Surah (Rata Kiri, Font Serif, Spasi Elegan) */}
        <p className="text-left text-xs md:text-sm font-serif leading-relaxed text-gray-200 font-light tracking-wide">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
        </p>

        {/* 3 Photos Grid Slider (Auto Smooth Scroll Satu per Satu ke Kiri) */}
        <div className="overflow-hidden w-full pt-4">
          <div
            className={`flex ${
              isTransitioning
                ? 'transition-transform duration-800 ease-in-out'
                : 'transition-none'
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {extendedPhotos.map((imgUrl, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 aspect-[3/4] overflow-hidden px-[0px]"
              >
                <img
                  src={imgUrl}
                  alt={`Couple ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Doa;