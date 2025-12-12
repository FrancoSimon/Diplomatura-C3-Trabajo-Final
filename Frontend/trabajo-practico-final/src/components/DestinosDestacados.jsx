import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // AÑADE ESTE IMPORT
import axios from "axios";
import { toast } from "react-toastify";
import { useWatchlist } from "../context/WatchlistContext";
import DetalleDestinoModal from "./DetalleDestinoModal";

const DestinosDestacados = () => {
  const [turisticos, setTuristicos] = useState([]);
  const { addToWatchlist } = useWatchlist();
  const scrollContainerRef = useRef(null);
  const [modalInfoAbierto, setModalInfoAbierto] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const navigate = useNavigate(); // INSTANCIA DE NAVEGACIÓN

  // Función para cargar destinos
  const cargarTresDestinos = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVTUR_KEY}?page=1&limit=7`
      );
      setTuristicos(data);
    } catch (err) {
      console.error(err);
      toast.error("Error al cargar los destinos.");
    }
  };

  // Cargar destinos al iniciar
  useEffect(() => {
    cargarTresDestinos();
  }, []);

  // Funciones para desplazamiento horizontal
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".destino-card");
      if (card) {
        const cardWidth = card.offsetWidth + 24; // 24px para el gap
        container.scrollBy({
          left: -cardWidth * 3,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector(".destino-card");
      if (card) {
        const cardWidth = card.offsetWidth + 24; // 24px para el gap
        container.scrollBy({
          left: cardWidth * 3,
          behavior: "smooth",
        });
      }
    }
  };

  const abrirModalInfo = (destino) => {
    setDestinoSeleccionado(destino);
    setModalInfoAbierto(true);
  };

  const cerrarModalInfo = () => {
    setModalInfoAbierto(false);
  };

  // Función para manejar el clic en "Iniciar Sesión" - ACTUALIZADA
  const handleIniciarSesionClick = () => {
    cerrarModalInfo(); // Cierra el modal primero
    navigate("/Login"); // Navega a la ruta /Login
  };

  return (
    <div
      id="destinosdestacados"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-500 text-white flex flex-col items-center p-4 sm:p-6 pt-24 sm:pt-32"
    >
      {/* Títulos */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 text-center px-4">
        Destinos Destacados
      </h1>
      <h2 className="text-xl sm:text-2xl lg:text-3xl p-4 mb-6 text-center px-4 max-w-4xl">
        Explora los destinos imperdibles para tus próximas aventuras en
        Fiambalá.
      </h2>

      {/* Contenedor principal con flechas */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6">
        {/* Flecha izquierda */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hidden lg:flex items-center justify-center"
          aria-label="Desplazar izquierda"
        >
          <i className="bi bi-chevron-left text-2xl"></i>
        </button>

        {/* Flecha derecha */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hidden lg:flex items-center justify-center"
          aria-label="Desplazar derecha"
        >
          <i className="bi bi-chevron-right text-2xl"></i>
        </button>

        {/* Contenedor de tarjetas con scroll horizontal */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 sm:gap-6">
            {Array.isArray(turisticos) && turisticos.length > 0 ? (
              turisticos.map((turistico) => (
                <div
                  key={turistico.id}
                  className="destino-card w-[300px] sm:w-[350px] lg:w-[380px] flex-shrink-0 bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-200 border border-gray-700 hover:border-amber-500/30 snap-start"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex-1">
                    <img
                      src={turistico.imagen}
                      alt={turistico.nombre}
                      className="rounded-xl mb-4 w-full h-40 sm:h-48 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300/1f2937/6b7280?text=Imagen+No+Disponible";
                      }}
                    />
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 line-clamp-2">
                      {turistico.nombre}
                    </h2>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                      {turistico.descripcion}
                    </p>
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex justify-between mt-4 gap-2">
                    <button
                      onClick={() => addToWatchlist(turistico)}
                      className="group bg-transparent p-2 sm:p-3 rounded-xl border border-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-200 flex-1 flex items-center justify-center relative min-h-[44px]"
                    >
                      <i className="bi bi-heart-fill text-white group-hover:text-red-600 transition-colors text-sm sm:text-base"></i>
                      <span className="sr-only">Agregar Favorito</span>

                      <span className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none border border-gray-600 z-20">
                        Agregar Favorito
                      </span>
                    </button>
                    <button
                      onClick={() => abrirModalInfo(turistico)}
                      className="group bg-transparent p-2 sm:p-3 rounded-xl border border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200 flex-1 flex items-center justify-center relative min-h-[44px]"
                    >
                      <i className="bi bi-info-circle text-white group-hover:text-blue-200 transition-colors text-sm sm:text-base"></i>
                      <span className="sr-only">Más Información</span>

                      <span className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none border border-gray-600 z-20">
                        Más Información
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-[300px] sm:w-[350px] lg:w-[380px] flex-shrink-0 text-center py-12 sm:py-16 bg-gray-800 rounded-2xl">
                <i className="bi bi-geo-alt-fill text-6xl text-gray-500 mb-4"></i>
                <p className="text-xl text-gray-400 mb-2">
                  No hay destinos Destacados para mostrar
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Indicadores de scroll (opcional, para móvil) */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {Array.isArray(turisticos) &&
            turisticos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 300; // Ancho fijo de las tarjetas en móvil
                    scrollContainerRef.current.scrollTo({
                      left: (cardWidth + 16) * index, // 16px para el gap
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors"
                aria-label={`Ir a destino ${index + 1}`}
              />
            ))}
        </div>
      </div>

      {/* Footer del componente */}
      <div className="mt-12 text-center text-white">
        <p className="text-lg">
          Fiambalá: Donde el desierto se encuentra con los Andes, creando un
          paraíso único en el noroeste argentino.
        </p>
        <p className="mt-2 text-sm opacity-75">
          Información basada en fuentes históricas y turísticas de Catamarca
        </p>
      </div>

      {/* Modal de información */}
      <DetalleDestinoModal
        isOpen={modalInfoAbierto}
        onClose={cerrarModalInfo}
        destino={destinoSeleccionado}
        onIniciarSesionClick={handleIniciarSesionClick}
      />
    </div>
  );
};

export default DestinosDestacados;
