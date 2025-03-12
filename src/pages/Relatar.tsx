import UploadArea from "../components/upload-area/single";
import CustomSelector from "../components/custom/selector";
import Sidebar from "../components/Sidebar";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function Relatar() {
  const [selectedProvince, setSelectedProvince] = useState<string>();

  return (
    <div className="flex">
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center justify-center w-full p-5 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Relate um Amontoado de Lixo
          </h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            Preencha os campos abaixo para reportar um acúmulo de lixo.{" "}
            <b className="text-red-600">*</b> Campos obrigatórios.
          </p>

          <form className="space-y-5">
            {/* Tipo de Lixo */}
            <div>
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Lixo<b className="text-red-600">*</b>
              </label>
              <select
                id="categoria"
                name="categoria"
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              >
                <option value="1">Orgânico</option>
                <option value="2">Reciclável</option>
                <option value="3">Perigoso</option>
                <option value="4">Eletrônico</option>
                <option value="5">Outros</option>
              </select>
            </div>

            {/* Localidade */}
            <div>
              <label
                htmlFor="localidade"
                className="block text-sm font-medium text-gray-700"
              >
                Sua Localidade
              </label>
              {/* <CustomSelector
                onChange={(e) => {
                  setSelectedProvince(e);
                }}
                value={selectedProvince}
                items={[
                  {
                    label: "Luanda",
                    value: "1",
                  },
                  {
                    label: "Luanda",
                    value: "2",
                  },
                  {
                    label: "Luanda",
                    value: "3",
                  },
                  {
                    label: "Luanda",
                    value: "4",
                  },
                  {
                    label: "Luanda",
                    value: "5",
                  },
                  {
                    label: "Luanda",
                    value: "6",
                  },
                  {
                    label: "Luanda",
                    value: "7",
                  },
                  {
                    label: "Luanda",
                    value: "8",
                  },
                  {
                    label: "Luanda",
                    value: "9",
                  },
                  {
                    label: "Luanda",
                    value: "10",
                  },
                  {
                    label: "Luanda",
                    value: "11",
                  },
                ]}
              /> */}
              <select
                id="localidade"
                name="localidade"
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              >
                <option value="1">Luanda</option>
                <option value="2">Cazenga</option>
                <option value="3">Viana</option>
                <option value="4">Rangel</option>
                <option value="5">Hoji-Ya-Henda</option>
                <option value="6">Quiçama</option>
                <option value="7">Belas</option>
                <option value="8">Ícolo e Bengo</option>
                <option value="9">Camama</option>
                <option value="10">Mussulo</option>
                <option value="11">Calumbo</option>
                <option value="12">Samba</option>
                <option value="13">Maianga</option>
                <option value="14">Mutamba</option>
                <option value="15">Ngola Kiluanje</option>
              </select>
            </div>

            {/* Quantidade de Lixo */}
            <div>
              <label
                htmlFor="quantidade"
                className="block text-sm font-medium text-gray-700"
              >
                Quantidade de Lixo
              </label>
              <select
                id="quantidade"
                name="quantidade"
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              >
                <option value="1">Pequeno (Até 1 saco de lixo)</option>
                <option value="2">Médio (1 a 5 sacos de lixo)</option>
                <option value="3">Grande (Muitos sacos de lixo)</option>
              </select>
            </div>

            {/* Prioridade do acúmulo */}
            <div>
              <label
                htmlFor="quantidade"
                className="block text-sm font-medium text-gray-700"
              >
                Prioridade
              </label>
              <select
                id="quantidade"
                name="quantidade"
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              >
                <option value="1">Baixa</option>
                <option value="2">Elevada</option>
              </select>
            </div>

            {/* Descrição */}
            <div>
              <label
                htmlFor="descricao"
                className="block text-sm font-medium text-gray-700"
              >
                Descrição<b className="text-red-600">*</b>
              </label>
              <textarea
                id="descricao"
                name="descricao"
                rows={4}
                required
                placeholder="Ex: A situação nesta localidade está crítica e precisa de resolução imediata."
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              ></textarea>
            </div>

            {/* Upload de Foto */}
            <div>
              <label
                htmlFor="foto"
                className="block text-sm font-medium text-gray-700"
              >
                Carregar Foto
              </label>
              <UploadArea />
              {/* <input
                type="file"
                id="foto"
                name="foto"
                className="mt-1 block w-full p-2 border rounded-md bg-gray-50"
              /> */}
            </div>

            {/* Botão de Relatar */}
            <div className="flex justify-center">
              <PrimaryButton
                addClassName="w-[29rem] bg-green-700 hover:bg-green-800 text-white font-medium transition"
                name="Relatar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
