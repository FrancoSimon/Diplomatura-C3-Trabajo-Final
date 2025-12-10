import { Routes, Route } from "react-router-dom";

import { Header } from "../components/Header.jsx";
import DestinosTuristicos from "../components/DestinosTuristicos.jsx";
import WeatherCard from "../components/WeatherCard.jsx";
import SearchForm from "../components/SearchFrom.jsx";
import ContactoForm from "../components/ContactoFrom.jsx";
import Login from "../components/Login.jsx"
import FiambalaInfo from "../components/FiambalaInfo.jsx";

const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <FiambalaInfo />
            <DestinosTuristicos />
            <div
              id="clima"
              className="flex flex-col items-center justify-center bg-gray-300 p-4"
            > <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
              <h1 className="text-3xl font-bold p-3">Pronóstico del tiempo</h1>
              <SearchForm />
              <WeatherCard />
            </div>
            </div>
          </>
        }
      />

      <Route path="/Fiambalá" element={<FiambalaInfo />} />
      <Route path="/destinos" element={<DestinosTuristicos />} />

      <Route
        path="/clima"
        element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4 pt-22">
            <h1 className="text-3xl font-bold">Pronóstico del tiempo</h1>
            <SearchForm />
            <WeatherCard />
          </div>
        }
      />

      <Route path="/contacto" element={<ContactoForm />} />
      <Route path="/Login" element={<Login />} />

      <Route
        path="/favoritos"
        element={<h1 className="text-center p-10 text-3xl">Favoritos</h1>}
      />
    </Routes>
  );
};

export default RoutesApp;
