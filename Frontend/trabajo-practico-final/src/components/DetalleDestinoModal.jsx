import { useState } from "react";

const DetalleDestinoModal = ({
  isOpen,
  onClose,
  destino,
  onIniciarSesionClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-full max-w-3xl rounded-2xl shadow-2xl relative flex flex-col max-h-[90vh] border border-amber-500/30">
        {/* Encabezado */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {destino?.nombre || "Destino de Fiambalá"}
            </h2>
            <p className="text-amber-400 text-sm mt-1">
              Información detallada y beneficios exclusivos
            </p>
          </div>

          <button
            onClick={onClose}
            className="group bg-transparent p-2 rounded-lg hover:bg-gray-800 transition-colors relative cursor-pointer"
          >
            <i className="bi bi-x-lg text-gray-400 hover:text-white text-xl transition-colors"></i>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700">
              Cerrar
            </span>
          </button>
        </div>

        {/* Contenido */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Imagen del destino */}
          <div className="mb-6">
            <img
              src={
                destino?.imagen ||
                "https://via.placeholder.com/800x400/1f2937/6b7280?text=Destino+Fiambalá"
              }
              alt={destino?.nombre || "Destino"}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x400/1f2937/6b7280?text=Imagen+No+Disponible";
              }}
            />
          </div>

          {/* Información detallada */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <i className="bi bi-info-circle text-amber-500"></i>
                Descripción Completa
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {destino?.descripcion ||
                  "Este destino en Fiambalá ofrece una experiencia única en el corazón de los Andes. Con paisajes impresionantes, cultura local auténtica y actividades para todos los gustos."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="bi bi-geo-alt text-green-500"></i>
                  Ubicación
                </h4>
                <p className="text-gray-300">Fiambalá, Catamarca, Argentina</p>
                <p className="text-sm text-gray-400 mt-2">
                  Región andina con microclima especial
                </p>
              </div>

              <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <i className="bi bi-activity text-blue-500"></i>
                  Actividades
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Trekking y senderismo</li>
                  <li>• Avistamiento de flora y fauna</li>
                  <li>• Fotografía paisajística</li>
                  <li>• Turismo cultural</li>
                </ul>
              </div>
            </div>

            {/* Beneficios al iniciar sesión */}
            <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 p-6 rounded-xl border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <i className="bi bi-stars text-amber-400"></i>
                ¡Inicia sesión para desbloquear todos los beneficios!
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-lg mt-1"></i>
                  <div>
                    <h4 className="text-white font-medium">
                      Acceso completo a todos los destinos
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Más de 50 destinos turísticos detallados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-lg mt-1"></i>
                  <div>
                    <h4 className="text-white font-medium">
                      Guarda tus destinos favoritos
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Crea tu lista personalizada para futuros viajes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-lg mt-1"></i>
                  <div>
                    <h4 className="text-white font-medium">
                      Crea tus propias aventuras
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Combina destinos y planifica rutas personalizadas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-lg mt-1"></i>
                  <div>
                    <h4 className="text-white font-medium">
                      Recibe recomendaciones exclusivas
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Sugerencias basadas en tus preferencias
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-lg mt-1"></i>
                  <div>
                    <h4 className="text-white font-medium">
                      Acceso a ofertas especiales
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Descuentos en alojamientos y actividades
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Llamada a la acción - Iniciar Sesión */}
            <div className="text-center p-5 bg-gray-800/30 rounded-xl">
              <p className="text-gray-300 mb-4">
                Únete a nuestra comunidad de viajeros y descubre todo lo que
                Fiambalá tiene para ofrecerte.
              </p>

              <div className="space-y-3">
                <button
                  onClick={onIniciarSesionClick} // Esta función ahora navegará a /Login
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20 w-full max-w-xs flex items-center justify-center gap-3 mx-auto"
                >
                  <i className="bi bi-box-arrow-in-right"></i>
                  Iniciar Sesión para Continuar
                </button>

                <p className="text-gray-400 text-sm">
                  ¿No tienes cuenta?{" "}
                  <span className="text-amber-400">
                    Podrás registrarte en el siguiente paso
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pie del modal */}
        <div className="border-t border-gray-700 px-6 py-4 bg-gray-900/50">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <i className="bi bi-shield-check"></i>
            <span>Tu información está protegida • </span>
            <i className="bi bi-chat-dots ml-2"></i>
            <span>Soporte 24/7 disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleDestinoModal;
