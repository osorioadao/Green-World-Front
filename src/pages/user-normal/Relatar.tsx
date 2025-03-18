import UploadArea from "../../components/upload-area/single";
import PrimaryButton from "../../components/ui/PrimaryButton";
import CustomSelector from "../../components/custom/selector";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

export default function Relatar() {
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectPriority, setSelectPriority] = useState<string>();
  const [selectTypeGarbage, setSelectGarbage] = useState<string>();

  return (
    <div className="flex gsp-2">
      <div className="" >
        <Sidebar />
      </div>

      {/* Conteúdo principal */}
      <div className="flex ml-auto">
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
              Relate um Amontoado de Lixo
            </h2>

            <p className="text-gray-600 text-sm text-center mb-6">
              Preencha os campos abaixo para reportar um acúmulo de lixo. Campos
              obrigatórios. <b className="text-red-600">*</b>
            </p>
          </div>
          <div></div>

          {/* Formulário de relatos */}
          <form className="flex flex-wrap  flex gap-5">
            {/* Localidade */}

            <div className="flex">
              <div className="flex">
                <label
                  htmlFor="localidade"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sua Localidade
                </label>
                <CustomSelector
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
                      label: "Camama",
                      value: "2",
                    },
                    {
                      label: "Rangel",
                      value: "3",
                    },
                    {
                      label: "Maianga",
                      value: "4",
                    },
                    {
                      label: "Mussulo",
                      value: "5",
                    },
                    {
                      label: "Belas",
                      value: "6",
                    },
                    {
                      label: "Viana",
                      value: "7",
                    },
                    {
                      label: "Cazenga",
                      value: "8",
                    },
                    {
                      label: "Hoji-Ya-Henda",
                      value: "9",
                    },
                    {
                      label: "Samba",
                      value: "10",
                    },
                    {
                      label: "Mutamba",
                      value: "11",
                    },
                    {
                      label: "Ngola Kiluange",
                      value: "11",
                    },
                  ]}
                />
              </div>
            </div>

            {/* Prioridade do acúmulo */}
            <div className="flex">
              <label
                htmlFor="prioridade"
                className="block text-sm font-medium text-gray-700"
              >
                Prioridade
              </label>
              <CustomSelector
                onChange={(e) => {
                  setSelectPriority(e);
                }}
                value={selectPriority}
                items={[
                  {
                    label: "Baixa",
                    value: "baixa",
                  },
                  {
                    label: "Elevada",
                    value: "elevada",
                  },
                ]}
              />
            </div>

            {/* Descrição */}
            <div className="flex">
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
            <div className="flex">
              <label
                htmlFor="foto"
                className="block text-sm font-medium text-gray-700"
              >
                Carregar Foto <b className="text-red-600">*</b>
              </label>
              <UploadArea />
            </div>

            <div className="flex">
              <PrimaryButton name="Enviar" addClassName="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
