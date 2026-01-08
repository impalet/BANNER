import { useEffect, useMemo, useState } from "react";

export default function Banner() {

  // 1️⃣ DATOS (slides reales)
  const slides = useMemo(() => [
    { imagen: "/banners/1.jpg", titulo: "TECNOLOGÍAS DE LA INFORMACIÓN", subtitulo: "JEAN SANCHEZ DEV." },
    { imagen: "/banners/2.jpg", titulo: "TECNOLOGÍAS DE LA INFORMACIÓN", subtitulo: "JEAN SANCHEZ DEV." },
    { imagen: "/banners/3.jpg", titulo: "TECNOLOGÍAS DE LA INFORMACIÓN", subtitulo: "JEAN SANCHEZ DEV." },
    { imagen: "/banners/4.jpg", titulo: "TECNOLOGÍAS DE LA INFORMACIÓN", subtitulo: "JEAN SANCHEZ DEV." },
  ], []);

  // 2️⃣ TRACK INFINITO (clon último + reales + clon primero)
  const track = useMemo(() => {
    const first = slides[0];
    const last = slides[slides.length - 1];
    return [last, ...slides, first];
  }, [slides]);

  // 3️⃣ ESTADOS
  const [indexTrack, setIndexTrack] = useState(1); // empezamos en el primer real
  const [animando, setAnimando] = useState(true);

  // 4️⃣ AUTOPLAY INFINITO
  useEffect(() => {
    const id = setInterval(() => {
      setIndexTrack(prev => prev + 1);
      setAnimando(true);
    }, 3500);

    return () => clearInterval(id);
  }, []);

  // 5️⃣ CORRECCIÓN INVISIBLE (LO QUE HACE EL INFINITO REAL)
  const onTransitionEnd = () => {
    // si caemos en el clon final → saltamos al primero real
    if (indexTrack === track.length - 1) {
      setAnimando(false);
      setIndexTrack(1);
    }

    // si caemos en el clon inicial → saltamos al último real
    if (indexTrack === 0) {
      setAnimando(false);
      setIndexTrack(slides.length);
    }
  };

  // 6️⃣ MOVIMIENTO DEL SLIDER
  const translate = `translateX(-${indexTrack * 100}%)`;

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 mt-6">
      {/* MARCO */}
      <div className="relative w-full max-w-6xl rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
        
        {/* VENTANA */}
        <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden">

          {/* TRACK (cinta que se mueve) */}
          <div
            onTransitionEnd={onTransitionEnd}
            className={`h-full flex ${animando ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: translate }}
          >
            {track.map((item, i) => (
              <div
                key={i}
                className="h-full w-full flex-shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imagen})` }}
              >
                {/* OVERLAY + TEXTO */}
                <div className="w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-black/20 flex flex-col justify-center px-4 sm:px-8 md:px-14">
                  <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                    {item.titulo}
                  </h1>
                  <p className="text-white/90 mt-2 sm:mt-3 text-xs sm:text-sm md:text-lg drop-shadow">
                    {item.subtitulo}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
