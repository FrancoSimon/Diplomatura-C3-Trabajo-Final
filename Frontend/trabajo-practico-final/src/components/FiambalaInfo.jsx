// components/FiambalaInfo.jsx - VERSIÓN ACTUALIZADA CON COLORES COMBINADOS
import React from "react";
import {
  MapPin,
  Users,
  Mountain,
  Sun,
  Calendar,
  Flag,
  Calendar1,
  Calendar1Icon,
} from "lucide-react";

const FiambalaInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-400 to-orange-150 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header con título principal - Colores actualizados */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
            <MapPin className="w-12 h-12 text-amber-700" />
            Fiambalá - Catamarca
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Puerta de entrada a la Cordillera de los Andes y tierra de
            tradiciones ancestrales
          </p>
        </div>

        {/* Grid de información principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Columna izquierda - Historia */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-bold text-amber-800">
                Historia y Fundación
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Fiambalá fue fundada el{" "}
                <span className="font-bold text-amber-700">
                  4 de diciembre de 1733
                </span>
                , hace más de 290 años de historia. Su nombre proviene del
                cacique indígena "Fiambalac" o "Huarpe Fiambalá".
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-800 text-xl mb-2">
                  Orígenes Prehispánicos
                </h3>
                <p>
                  Antes de la llegada de los españoles, la región estaba
                  habitada por los pueblos diaguitas y huarpes, expertos
                  agricultores que desarrollaron sistemas de riego en medio del
                  desierto.
                </p>
              </div>

              <p>
                Durante la colonia, se estableció como una importante parada en
                el Camino del Inca y luego en las rutas comerciales entre el
                Virreinato del Perú y el Río de la Plata.
              </p>
            </div>
          </div>

          {/* Columna derecha - Datos geográficos */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-bold text-amber-800">
                Geografía y Clima
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Sun className="w-6 h-6 text-amber-500 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800">Clima Único</h3>
                  <p>
                    Fiambalá es famosa por su{" "}
                    <span className="font-bold text-amber-700">
                      microclima especial
                    </span>
                    , con más de 300 días de sol al año y temperaturas ideales
                    para la vitivinicultura.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center border border-amber-200">
                  <p className="text-sm text-amber-600">Altura</p>
                  <p className="text-2xl font-bold text-amber-800">
                    1.500 msnm
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center border border-amber-200">
                  <p className="text-sm text-amber-600">Población</p>
                  <p className="text-2xl font-bold text-amber-800">
                    8.000 hab.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center border border-amber-200">
                  <p className="text-sm text-amber-600">Fundación</p>
                  <p className="text-2xl font-bold text-amber-800">1733</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl text-center border border-amber-200">
                  <p className="text-sm text-amber-600">Provincia</p>
                  <p className="text-2xl font-bold text-amber-800">Catamarca</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de turismo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-amber-200">
          <div className="flex items-center gap-3 mb-8">
            <Flag className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-amber-800">
              Turismo y Atractivos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-500 to-orange-400 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Termas de Fiambalá</h3>
              <p>
                Aguas termales con propiedades medicinales, ubicadas a 1.700
                metros sobre el nivel del mar.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Piletas naturales</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Temperaturas hasta 70°C</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Ruta del Adobe</h3>
              <p>
                Recorrido único por construcciones coloniales de adobe,
                declarado Monumento Histórico Nacional.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Iglesia de 1770</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Comisaría histórica</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-orange-500 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-3">Vinos de Altura</h3>
              <p>
                Famosa por sus bodegas que producen vinos excepcionales gracias
                al clima y suelo único.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Malbec de altura</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Torrontés catamarqueño</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección cultural */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Cultura y Tradición</h2>
            </div>

            <div className="space-y-4">
              <p>
                Fiambalá mantiene vivas sus tradiciones a través de festivales
                como la{" "}
                <span className="font-bold">
                  Fiesta Nacional del Sol y la Vendimia
                </span>
                y la celebración de la{" "}
                <span className="font-bold">Virgen del Rosario</span>, patrona
                del pueblo.
              </p>

              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Artesanías Locales</h3>
                <p>
                  Textiles, cerámica negra y trabajos en cuero que reflejan la
                  herencia diaguita.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
            <h2 className="text-3xl font-bold text-amber-800 mb-6">
              Ubicación Estratégica
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Situada en el{" "}
                <span className="font-bold text-amber-700">
                  oeste catamarqueño
                </span>
                , Fiambalá es la puerta de entrada a:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="font-medium text-amber-800">
                    Paso San Francisco (frontera con Chile)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="font-medium text-amber-800">
                    Cerro Negro (4.765 m)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="font-medium text-amber-800">
                    Dunas de Tatón (las más altas del mundo)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="font-medium text-amber-800">
                    Camino de los Seismiles
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer del componente */}
        <div className="mt-12 text-center text-amber-700">
          <p className="text-lg">
            Fiambalá: Donde el desierto se encuentra con los Andes, creando un
            paraíso único en el noroeste argentino.
          </p>
          <p className="mt-2 text-sm opacity-75">
            Información basada en fuentes históricas y turísticas de Catamarca
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiambalaInfo;
