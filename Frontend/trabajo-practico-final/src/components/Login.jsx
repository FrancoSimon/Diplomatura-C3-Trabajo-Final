// src/pages/Login.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const schema = Yup.object({
  email: Yup.string().email("Email inválido").required("Ingresá tu email"),
  password: Yup.string()
    .min(6, "Mínimo 6 caracteres")
    .required("Ingresá tu contraseña"),
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const ok = await login(data);
    if (ok) navigate("/DestinosTuristicos"); // redirige al home
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 to-gray-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm space-y-4 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        
        {/* Sección del formulario */}
        <div className="space-y-4 flex flex-col">
          <label className=" mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="bg-gray-700 text-white rounded-lg px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 
                    focus:bg-gray-800 placeholder-gray-400 "
            placeholder="Ingresa tu email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            {...register("password")}
            className="bg-gray-700 text-white rounded-lg px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-amber-500 
                    focus:bg-gray-800 placeholder-gray-400 "
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              className="mr-2 h-4 w-4 rounded text-amber-500 focus:ring-amber-500"
              type="checkbox"
            />
            <span className="text-sm">Recordarme</span>
          </label>
          <a
            href="#"
            className="text-amber-500 hover:text-amber-300 text-sm font-medium transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <Button type="submit" variant="primary" size="auto" className="w-full">
          Ingresar
        </Button>
        <div className="text-center pt-4">
          <p className=" text-sm">
            ¿No tienes una cuenta?{" "}
            <a
              href="#"
              className="text-amber-500 hover:text-amber-300 font-medium transition-colors"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
