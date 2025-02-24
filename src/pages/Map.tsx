import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError('Não foi possível obter a localização.');
        }
      );
    } else {
      setError('A geolocalização não é suportada neste navegador.');
    }
  }, []);

  return (
    <div className="mt-8">
      {error && <p className="text-red-500">{error}</p>}
      {location ? (
        <LoadScript googleMapsApiKey="">
          <div className="rounded-lg shadow-lg w-full">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={12}
            >
              <Marker position={location} />
              <InfoWindow position={location}>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">Você está aqui!</h3>
                  <p>Latitude: {location.lat}</p>
                  <p>Longitude: {location.lng}</p>
                </div>
              </InfoWindow>
            </GoogleMap>
          </div>
        </LoadScript>
      ) : (
        <p className="text-gray-500">Carregando mapa...</p>
      )}
    </div>
  );
};

export default Map;

