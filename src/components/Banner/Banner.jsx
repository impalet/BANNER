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
    }, 3000);

    return () => clearInterval(intervalo);
  }, [banners.length]);

  const bannerActual = banners[indice];

  return (
    <div className="relative w-full h-[360px] overflow-hidden">
      
      {/* Imagen de fondo */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${bannerActual.imagen})` }}
      >
        {/* Overlay oscuro */}
        <div className="w-full h-full bg-gradient-to-r from-black/80 to-black/30
                        flex flex-col justify-center px-8 md:px-20">
          
          {/* TÍTULO – BLANCO VISIBLE */}
            <h1
        style={{ color: "#ffffff", fontWeight: "800" }}
        className="text-2xl md:text-4xl tracking-wide"
        >
        {bannerActual.titulo}
        </h1>

        <p
        style={{ color: "#ffffff" }}
        className="mt-2 text-sm md:text-lg opacity-90"
        >
        {bannerActual.subtitulo}
        </p>

        </div>
      </div>

      {/* INDICADORES */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`px-3 py-1 text-sm rounded transition
              ${
                i === indice
                  ? "bg-white text-black font-bold"
                  : "bg-black/40 text-white hover:bg-black/60"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

