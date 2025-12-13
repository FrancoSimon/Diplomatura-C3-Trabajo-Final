// src/routes/RutaProtegida.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RutaProtegida = ({ children }) => {
  const { token, cargando } = useAuth();

  if (cargando) return <p>Cargando...</p>;

  return token ? children : <Navigate to="/login" />;
};

export default RutaProtegida;
