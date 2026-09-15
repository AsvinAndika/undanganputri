import React, { useState, useEffect } from 'react';

const EventDetails = ({ targetDate = '2026-09-28T08:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    // Panggil langsung saat komponen di-render agar angka awal tidak delay 1 detik
    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative min-h-screen w-full py-16 px-4 flex flex-col items-center justify-center bg-transparent">
      <div className="relative z-10 max-w-md w-full space-y-8 text-center text-white">
        
        {/* Header */}
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-medium uppercase text-white">
          Wedding &bull; Event
        </h2>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 text-center py-4">
          <div>
            <span className="font-serif text-3xl font-light tracking-wide">{timeLeft.days}</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-300 mt-1 font-light">Days</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-light tracking-wide">{timeLeft.hours}</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-300 mt-1 font-light">Hours</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-light tracking-wide">{timeLeft.minutes}</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-300 mt-1 font-light">Minutes</p>
          </div>
          <div>
            <span className="font-serif text-3xl font-light tracking-wide">{timeLeft.seconds}</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-300 mt-1 font-light">Seconds</p>
          </div>
        </div>

        {/* Card 1: Pawiwahan / Akad */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 flex flex-row gap-4 items-center text-left shadow-2xl">
          {/* Foto Kiri */}
          <div className="w-[42%] aspect-[3/4] overflow-hidden rounded-xl flex-shrink-0 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=80" 
              alt="Pawiwahan" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Details Kanan */}
          <div className="w-[58%] space-y-1.5 text-left flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">
              Akad Nikah
            </h3>
            <p className="text-xs text-gray-200 font-serif italic">
              Kamis, 28 September 2026
            </p>
            <p className="text-[11px] text-gray-300 font-light">
              09.30 WITA - Selesai
            </p>
            <p className="text-[10px] text-gray-400 font-light leading-tight">
              Mushola Kr.Bangket Kakol
            </p>
            <p className="text-[10px] text-gray-400 font-light leading-tight line-clamp-2">
              Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Location
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Resepsi */}
        <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-4 flex flex-row gap-4 items-center text-left shadow-2xl">
          {/* Foto Kiri */}
          <div className="w-[42%] aspect-[3/4] overflow-hidden rounded-xl flex-shrink-0 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80" 
              alt="Resepsi" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Details Kanan */}
          <div className="w-[58%] space-y-1.5 text-left flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">
              Nyongkolang
            </h3>
            <p className="text-xs text-gray-200 font-serif italic">
              Kamis, 28 September 2026
            </p>
            <p className="text-[11px] text-gray-300 font-light">
                16.00 WITA
            </p>
            <p className="text-[10px] text-gray-400 font-light leading-tight">
              Dari Kediaman Mempelai Pria Menuju Kediaman Mempelai Wanita
            </p>
            <p className="text-[10px] text-gray-400 font-light leading-tight line-clamp-2">
              Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Location
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventDetails;