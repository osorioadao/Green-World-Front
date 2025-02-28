import React, { useState } from "react";

const ReportForm: React.FC = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [litterType, setLitterType] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar dados para a API
    const formData = new FormData();
    formData.append("lat", location.lat.toString());
    formData.append("lng", location.lng.toString());
    formData.append("litterType", litterType);
    if (image) formData.append("image", image);

    // Chamada API para enviar os dados do amontoado
    const response = await fetch("/api/report-litter", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Relatório enviado com sucesso!");
    } else {
      alert("Erro ao enviar o relatório.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Tipo de Lixo</label>
        <input
          type="text"
          value={litterType}
          onChange={(e) => setLitterType(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Imagem (opcional)</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="border p-2 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar Relatório
      </button>
    </form>
  );
};

export default ReportForm;
