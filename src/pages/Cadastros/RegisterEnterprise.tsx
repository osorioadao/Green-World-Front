import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomSelector from "../../components/custom/selector";
import { FaUser, FaEnvelope, FaLock, FaAddressCard, FaEyeSlash, FaEye } from "react-icons/fa";
import { HiMiniIdentification } from "react-icons/hi2";
import Logo from "../../assets/Logo";
import PrimaryButton from "../../components/PrimaryButton";

interface UserFormData {
  nome: string;
  email: string;
  senha: string;
  tipo_empresa: string;
  endereco: string;
  nif: string;
}

const InputField = ({ label, type, name, value, onChange, icon, extraPaddingRight = false }: {
  label: string;
  type: string;
  name: keyof UserFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
  extraPaddingRight?: boolean; 
}) => (
  <div className="relative w-full">
    <label htmlFor={name} className="block text-gray-600 font-semibold mb-2">{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className={`w-full p-3 ${extraPaddingRight ? "pr-10" : "pr-3"} pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent`}
      />
    </div>
  </div>
);

export default function UserForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    nome: "",
    email: "",
    senha: "",
    nif: "",
    tipo_empresa: "",
    endereco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const [selectEnterprise, setSelectEnterprise] = useState<string>();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl">
        <div className="text-center mb-6 flex items-center justify-center gap-4">
        <Logo className="w-20 h-20"/>
          <h2 className="text-3xl font-bold text-gray-800">Cadastro de Empresa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          <PrimaryButton name="Empresa" addClassName="w-full md:w-26 py-3 text-lg h-10 flex items-center justify-center" onClick={() => navigate('/enterprise')} />
          <PrimaryButton name="Cidadão Comum" addClassName="w-full md:w-26 py-3 text-lg h-10 flex opacity-70 items-center justify-center" onClick={() => navigate('/personal')} />
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <InputField label="Nome da Empresa" type="text" name="nome" value={formData.nome} onChange={handleChange} icon={<FaUser />} />
          <InputField label="Email da Empresa" type="email" name="email" value={formData.email} onChange={handleChange} icon={<FaEnvelope />} />
          
          <div className="relative w-full">
            <InputField 
              label="Senha" 
              type={isShowPassword ? "text" : "password"} 
              name="senha" 
              value={formData.senha} 
              onChange={handleChange} 
              icon={<FaLock />} 
              extraPaddingRight 
            />
            <button
              type="button"
              className="absolute inset-y-7 top-14 right-3 flex items-center text-gray-600 hover:text-gray-800"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <InputField label="NIF" type="text" name="nif" value={formData.nif} onChange={handleChange} icon={<HiMiniIdentification />} />
          
          <div className="flex gap-3 items-center">
              <div className="">
              <InputField label="Endereço" type="text" name="endereco" value={formData.endereco} onChange={handleChange} icon={<FaAddressCard />} />
              </div>
            <div className="">
              <label htmlFor="tipoEmpresa" className="text-sm font-medium text-gray-700 mb-1 block">Tipo de Empresa</label>
              <CustomSelector
                className="mb-1 block w-full md:w-[14rem] h-12"
                onChange={(e) => setSelectEnterprise(e)}
                value={selectEnterprise}
                items={[
                  { label: "Aterros sanitários", value: "1" },
                  { label: "Catadores", value: "2" },
                  { label: "Reciclagem", value: "3" }
                ]}
              />
            </div>
          </div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2">
            <Link to="/Login" className="text-[#068a5b] hover:underline transition duration-500">Já tem uma conta?</Link>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <PrimaryButton addClassName="" name="Cadastrar" />
          </div>
        </form>
      </div>
    </div>
  );
}


