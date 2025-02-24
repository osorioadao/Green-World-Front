import React, { useState, useEffect } from 'react';
import Map from './Map';

const Dashboard: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserInfo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        () => {
          setLoading(false);
          alert('Não foi possível obter a localização.');
        }
      );
    } else {
      setLoading(false);
      alert('Geolocalização não suportada.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Dashboard de Geolocalização</h1>
        
        {loading ? (
          <p className="text-center text-lg text-gray-600">Carregando...</p>
        ) : userInfo ? (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-700"><strong>Latitude:</strong> {userInfo.lat}</p>
              <p className="text-lg text-gray-700"><strong>Longitude:</strong> {userInfo.lng}</p>
            </div>
            <Map />
          </>
        ) : (
          <p className="text-center text-lg text-red-500">Não foi possível encontrar a sua localização.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;


