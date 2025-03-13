import UploadArea from "../components/upload-area/single";
import { Button } from "@radix-ui/themes";
import CustomSelector from "../components/custom/selector";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import sidebarUp from "../components/client/sidebarUp";

export default function Relatar() {
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectQuantity, setSelectQuantity] = useState<string>()
  const [selectPriority, setSelectPriority] = useState<string>()
  const [selectTypeGarbage, setSelectGarbage] = useState<string>()

  return (
    <div className="flex">
      <Sidebar />
      
      {/* Conteúdo principal */}
      {sidebarUp()}
      <div className="flex flex-col items-center justify-center w-full p-24 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Relate um Amontoado de Lixo
          </h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            Preencha os campos abaixo para reportar um acúmulo de lixo.{" "}
            <b className="text-red-600">*</b> Campos obrigatórios.
          </p>

         {/* Formulário de relatos */}
          <form className="space-y-5 flex flex-col gap-5">
            
            {/* Tipo de Lixo */}
            <div>
              <label
                htmlFor="categoria"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Lixo<b className="text-red-600">*</b>
              </label>

              <CustomSelector 
              onChange={(e) => {
                setSelectGarbage(e);
              }}
               value={selectTypeGarbage}
               items={[
                {
                  label: "Orgânico",
                  value: "organico",
                },
                {
                  label: "Reciclável",
                  value: "reciclavel",
                },
                {
                  label: "Perigoso",
                  value: "perigoso",
                },
                {
                  label: "Electrónicos",
                  value: "electronico",
                },
                {
                  label: "Radioactivos",
                  value: "radioactivo",
                },
               ]}              
              />
            </div>

            {/* Localidade */}
            
            <div>
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

            {/* Prioridade do acúmulo */}
            <div>
              <label
                htmlFor="quantidade"
                className="block text-sm font-medium text-gray-700"
              >
                Prioridade
              </label>
              <CustomSelector 
               onChange={(e) => {
                setSelectPriority(e)
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
                Carregar Foto <b className="text-red-600">*</b>
              </label>
              <UploadArea />
            </div>

            {/* Botão de Relatar */}
            {/* <div className="flex justify-center">
              <PrimaryButton
                addClassName="w-[29rem] bg-green-700 hover:bg-green-800 text-white font-medium transition"
                name="Relatar"
              />
            </div> */}
           
           <Button variant="outline" color="orange" className="h-10 bg-red-600"> 
 	            Enviar
           </Button>

          </form>

        </div>
      </div>
    </div>
  );
}
