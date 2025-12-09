import React from "react";
import loginImg from "../assets/login.JPG"; // Cambia a la imagen portrait
import Button from "./Button";

export default function Login() {
  return (
    <div className="flex flex-col bg-gray-800 lg:flex-row min-h-screen w-full overflow-hidden">
      {/* Sección de imagen - Ahora responsive para portrait */}
      <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
        <img
          className="w-full h-full object-cover object-center lg:object-[center_30%]"
          src={loginImg}
          alt="Fondo de login"
        />
        <div className="absolute inset-0 bg-black/30 lg:bg-black/20"></div>
      </div>

      {/* Sección del formulario */}
      <div className="lg:w-1/2 w-full bg-gray-800 flex items-center justify-center p-4 lg:p-8 overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          <form className="bg-gray-900 rounded-xl p-6 sm:p-8">
            <h2 className="text-3xl text-white font-bold text-center mb-8">
              INICIAR SESIÓN
            </h2>

            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-300 mb-2 text-sm font-medium">
                  Usuario
                </label>
                <input
                  className="bg-gray-700 text-white rounded-lg px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 
                    focus:bg-gray-800 placeholder-gray-400"
                  type="text"
                  placeholder="Ingresa tu usuario"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-300 mb-2 text-sm font-medium">
                  Contraseña
                </label>
                <input
                  className="bg-gray-700 text-white rounded-lg px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 
                    focus:bg-gray-800 placeholder-gray-400"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <label className="flex items-center text-gray-300 cursor-pointer">
                  <input
                    className="mr-2 h-4 w-4 rounded text-amber-500 focus:ring-amber-500"
                    type="checkbox"
                  />
                  <span className="text-sm">Recordarme</span>
                </label>
                <a
                  href="#"
                  className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
              >
                INGRESAR
              </Button>

              <div className="text-center pt-4">
                <p className="text-gray-400 text-sm">
                  ¿No tienes una cuenta?{" "}
                  <a
                    href="#"
                    className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    Regístrate aquí
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
