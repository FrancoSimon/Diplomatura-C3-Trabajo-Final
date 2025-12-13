// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [cargando, setCargando] = useState(true);

  // Cargar usuario si ya hay token
  useEffect(() => {
    const cargarUsuario = async () => {
      if (!token) {
        setCargando(false);
        return;
      }

      try {
        const { data } = await api.get("/auth/mi-perfil");
        setUsuario(data.usuario);
      } catch (error) {
        console.error("Token inválido");
        logout();
      }

      setCargando(false);
    };

    cargarUsuario();
  }, [token]);

  const login = async ({ email, password }) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUsuario(data.usuario);

      toast.success("Inicio de sesión exitoso");

      return true;
    } catch (error) {
      const msg = error.response?.data?.message || "Error al iniciar sesión";
      toast.error(msg);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, cargando, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
