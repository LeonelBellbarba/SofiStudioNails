import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Configuración del contenedor del mapa
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Coordenadas de la ubicación (puedes cambiar esto a la ubicación que quieras)
const center = {
  lat: -32.474680217643225, // Latitud de San Francisco
  lng: -61.57890655308648, // Longitud de San Francisco
};

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d353.7992905253457!2d-61.579071201651665!3d-32.47469591550209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca1dbe1287fb91%3A0xb73c76193c58f1a4!2sMaip%C3%BA%20933%2C%20S2520CCS%20Las%20Rosas%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1726105762845!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        
      >
        {/* Puedes agregar marcadores */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
