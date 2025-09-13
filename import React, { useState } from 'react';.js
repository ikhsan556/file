import React, { useState } from 'react';

const MaafinMasWebsite = () => {
  const [isForgiven, setIsForgiven] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 });

  const handleForgive = () => {
    setIsForgiven(true);
    
    // Buat efek hati berjatuhan
    const newHearts = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }
    setHearts(newHearts);
    
    // Hapus hati setelah beberapa detik
    setTimeout(() => {
      setHearts([]);
    }, 4000);
  };

  const moveNoButton = () => {
    // Pindahkan tombol "Tidak" ke posisi acak
    const newX = Math.random() * 80 + 10; // 10% - 90%
    const newY = Math.random() * 80 + 10; // 10% - 90%
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background dengan pola lucu */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-200 rounded-full"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-green-200 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-red-200 rounded-full"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-2">
            🌸 Permintaan Maaf 🌸
          </h1>
          <p className="text-lg text-purple-600">Dari hati yang paling tulus</p>
        </div>
        
        {/* Kartu Permintaan Maaf */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200 relative">
          {/* Stiker-stiker lucu */}
          <div className="absolute -top-3 -left-3 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
            ✨
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
            🌟
          </div>
          <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
            😊
          </div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-xl">
            ❤️
          </div>
          
          <div className="text-center">
            {/* Gambar karakter lucu */}
            <div className="mx-auto mb-6 w-40 h-40">
              <img 
                src="https://placehold.co/160x160/pink/white?text=😔" 
                alt="Karakter lucu dengan ekspresi sedih memegang bunga permintaan maaf"
                className="w-full h-full object-contain rounded-full border-4 border-pink-300"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-purple-700 mb-4 bg-pink-100 py-2 px-6 rounded-full inline-block">
              Maafin Mas Ya
            </h2>
            
            <p className="text-xl text-purple-800 font-semibold mb-2">Isan Almaak</p>
            
            <div className="my-6 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-2 border-dashed border-pink-300">
              <p className="text-gray-700 mb-3">
                Aku tahu aku belum bisa menjadi yang terbaik, tapi percayalah...
              </p>
              <p className="text-pink-600 font-medium">
                Hatiku selalu tulus untukmu! 💖
              </p>
            </div>
            
            {/* Tombol Interaksi */}
            {!isForgiven ? (
              <div className="relative mt-8 space-y-4">
                <button
                  onClick={handleForgive}
                  className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  Aku Maafkan Kamu 💝
                </button>
                
                <button
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  style={{
                    position: 'absolute',
                    left: `${noButtonPosition.x}%`,
                    top: `${noButtonPosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.3s ease'
                  }}
                  className="bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-full shadow hover:bg-gray-300 cursor-pointer whitespace-nowrap"
                >
                  Tidak
                </button>
              </div>
            ) : (
              <div className="mt-6 bg-green-100 border-2 border-green-300 rounded-xl p-4">
                <p className="text-green-800 font-bold text-lg">
                  Terima Kasih! Aku janji akan lebih baik lagi! 🌈
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Pesan Tambahan */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border-2 border-dashed border-purple-200">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">
              Untuk Isan Almaak Tercinta 💕
            </h3>
            
            <div className="space-y-2 text-gray-700">
              <p>Meski aku tak sempurna...</p>
              <p className="text-pink-600 font-medium">Cintaku padamu selalu nyata</p>
              <p>Terima kasih untuk segala kesabaranmu</p>
              <p className="text-purple-600 font-medium">Aku berjanji akan terus belajar</p>
            </div>
            
            <div className="mt-4 flex justify-center space-x-3">
              <img 
                src="https://placehold.co/60x60/lightblue/white?text=🌷" 
                alt="Bunga tulip sebagai simbol pertumbuhan cinta"
                className="w-12 h-12 object-contain"
              />
              <img 
                src="https://placehold.co/60x60/lightgreen/white?text=✨" 
                alt="Bintang bersinar simbol harapan indah"
                className="w-12 h-12 object-contain"
              />
              <img 
                src="https://placehold.co/60x60/gold/white?text=💖" 
                alt="Hati berwarna warni simbol cinta tulus"
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Efek Hati Berjatuhan */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl animate-bounce"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.id * 0.1}s`,
            zIndex: 5,
            color: `hsl(${Math.random() * 360}, 70%, 65%)`
          }}
        >
          ❤️
        </div>
      ))}
      
      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-purple-500 text-sm">
        <p>Dibuat dengan penuh cinta untuk Isan Almaak</p>
      </div>
    </div>
  );
};

export default MaafinMasWebsite;