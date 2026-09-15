import { useState } from 'react';

const Wishes = () => {
  const [wishes, setWishes] = useState([
    { name: 'Tes', message: 'Tes' },
    { name: 'Test', message: 'Selamat' },
    { name: 'Glen', message: 'Selamat ya 😄❤️' }
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    setWishes([{ name, message }, ...wishes]);
    setName('');
    setMessage('');
  };

  return (
    <section className="bg-neutral-950 text-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-md w-full space-y-8">
        
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] bg-white/30 flex-1"></div>
          <h2 className="font-serif text-xl tracking-widest uppercase">WISHES</h2>
          <div className="h-[1px] bg-white/30 flex-1"></div>
        </div>

        <p className="text-center text-xs text-gray-300 font-serif leading-relaxed">
          Tuliskan harapan dan doa terbaik Bapak/Ibu/Saudara/i <span className="font-bold">Tamu Undangan</span> untuk kedua mempelai melalui kolom berikut:
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 bg-white text-black text-xs rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Ucapkan sesuatu...."
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2.5 bg-white text-black text-xs rounded-md focus:outline-none resize-none"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 border border-white/60 text-xs tracking-widest rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              KIRIM
            </button>
          </div>
        </form>

        {/* Messages List */}
        <div className="space-y-4 pt-4 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-800">
          {wishes.map((item, index) => (
            <div key={index} className="space-y-1 text-left border-b border-white/5 pb-2">
              <p className="font-semibold text-xs">{item.name}</p>
              <p className="text-xs text-gray-400 font-light">{item.message}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Wishes;