import { useState } from 'react';

const bankAccounts = [
  {
    bankName: 'Mandiri',
    logo: '/assets/mandiri.png', 
    accountNumber: '1610015901593',
    accountHolder: 'LALU IWAN ZULKIPLI',
  },
  {
    bankName: 'BNI',
    logo: '/assets/bni.png', 
    accountNumber: '1833400084',
    accountHolder: 'NIA RAMADANI PUTRI',
  },
];

const Gift = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);;

  // Fungsi Salin Rekening
  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="text-white py-16 px-4 flex flex-col items-center bg-transparent">
      <div className="max-w-md w-full space-y-6 text-center">
        
        {/* Title Header */}
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[1px] bg-white/40 flex-1"></div>
          <h2 className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-light">
            WEDDING &bull; GIFT
          </h2>
          <div className="h-[1px] bg-white/40 flex-1"></div>
        </div>

        {/* Deskripsi */}
        <p className="text-xs md:text-sm text-gray-200 font-serif leading-relaxed px-2 font-light tracking-wide">
          Kehadiran Bapak/Ibu/Saudara/i merupakan sebuah do'a serta rasa syukur bagi kami, namun jika memberi adalah bentuk Do'a &amp; cinta kasih bagi Anda, Anda dapat memberi kado secara cashless dan kami akan senang hati menerimanya dan tentu semakin melengkapi kebahagiaan kami.
        </p>

        {/* Tombol Toggle Lihat / Sembunyikan Rekening */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setShowAccount(!showAccount)}
            className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black text-xs font-serif tracking-wider shadow-lg hover:bg-gray-200 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-md"
          >
            {showAccount ? (
              <>
                {/* Icon Eye Off / Sembunyikan */}
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a8.962 8.962 0 012.122-.19c4.477 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.692-4.692a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
                <span>Sembunyikan Rekening</span>
              </>
            ) : (
              <>
                {/* Icon Credit Card / Lihat */}
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Lihat Rekening</span>
              </>
            )}
          </button>
        </div>

        {/* Smooth Expand/Collapse Accordion Wrapper */}
        <div
          className={`grid transition-all duration-700 ease-in-out ${
            showAccount ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0 pt-0'
          }`}
        >
          <div className="overflow-hidden space-y-4">
            {bankAccounts.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/30 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-left shadow-2xl space-y-4 relative"
              >
                {/* Logo Bank dari Aset Gambar */}
                <div className="h-8 flex items-center">
                  <img 
                    src={item.logo} 
                    alt={`Logo ${item.bankName}`} 
                    className="h-full object-contain max-w-[120px]" 
                  />
                </div>

                {/* Detail Rekening */}
                <div className="flex justify-between items-end pt-1">
                  <div className="space-y-1">
                    <p className="text-[11px] text-gray-300 font-serif">No. Rekening</p>
                    <p className="font-serif text-2xl tracking-widest font-medium text-white">
                      {item.accountNumber}
                    </p>
                    <p className="text-xs text-gray-300 font-serif italic">
                      {item.accountHolder}
                    </p>
                  </div>

                  {/* Tombol Copy dengan Feedback Animasi */}
                  <button
                    onClick={() => handleCopy(item.accountNumber, idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-serif transition-all duration-300 backdrop-blur-md cursor-pointer ${
                      copiedIndex === idx
                        ? 'bg-white text-black border-white scale-105'
                        : 'bg-black/60 text-white border-white/20 hover:bg-white hover:text-black'
                    }`}
                  >
                    {copiedIndex === idx ? (
                      <>
                        {/* Checkmark Icon */}
                        <svg className="w-4 h-4 text-emerald-600 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        {/* Copy Icon */}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gift;