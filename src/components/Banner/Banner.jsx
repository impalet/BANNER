import { useEffect, useState } from "react";

export default function Banner() {
  const banners = [
    {
      imagen: "/banners/1.jpg",
      titulo: "TECNOLOGÍAS DE LA INFORMACIÓN",
      subtitulo: "JEAN SANCHEZ DEV."
    },
    {
      imagen: "/banners/2.jpg",
      titulo: "TECNOLOGÍAS DE LA INFORMACIÓN",
      subtitulo: "JEAN SANCHEZ DEV."
    },
    {
      imagen: "/banners/3.jpg",
      titulo: "TECNOLOGÍAS DE LA INFORMACIÓN",
      subtitulo: "JEAN SANCHEZ DEV."
    },
    {
      imagen: "/banners/4.jpg",
      titulo: "TECNOLOGÍAS DE LA INFORMACIÓN",
      subtitulo: "JEAN SANCHEZ DEV."
    }
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % banners.length);
    }, 3500);

    return () => clearInterval(intervalo);
  }, [banners.length]);

  const bannerActual = banners[indice];

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mt-6">
      
      {/* MARCO DEL BANNER */}
      <div className="
        relative w-full max-w-6xl
        rounded-xl overflow-hidden
        border border-white/20
        shadow-2xl bg-black
      ">
        
        {/* IMAGEN */}
        <div
          className="
            w-full
            h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px]
            bg-cover bg-center transition-all duration-700
          "
          style={{ backgroundImage: `url(${bannerActual.imagen})` }}
        >
          {/* OVERLAY */}
          <div className="
            w-full h-full
            bg-gradient-to-r from-black/80 via-black/50 to-black/20
            flex flex-col justify-center
            px-4 sm:px-8 md:px-14
          ">
            
            {/* TÍTULO */}
            <h1
              style={{ color: "#ffffff" }}
              className="
                text-lg sm:text-2xl md:text-4xl lg:text-5xl
                font-extrabold tracking-wide
                drop-shadow-lg
              "
            >
              {bannerActual.titulo}
            </h1>

            {/* SUBTÍTULO */}
            <p
              style={{ color: "#ffffff" }}
              className="
                mt-2 sm:mt-3
                text-xs sm:text-sm md:text-lg
                opacity-90
              "
            >
              {bannerActual.subtitulo}
            </p>
          </div>
        </div>

        {/* INDICADORES */}
        <div className="
          absolute bottom-3 sm:bottom-4
          left-1/2 -translate-x-1/2
          flex gap-2 sm:gap-3
        ">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndice(i)}
              className={`
                w-7 h-7 sm:w-8 sm:h-8
                rounded-full text-xs sm:text-sm
                transition-all duration-300
                ${
                  i === indice
                    ? "bg-white text-black font-bold scale-110"
                    : "bg-black/50 text-white hover:bg-black/70"
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
