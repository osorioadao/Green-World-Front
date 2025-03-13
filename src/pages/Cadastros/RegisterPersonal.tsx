import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserTag, FaUniversity, FaIdCard, FaEyeSlash, FaEye } from "react-icons/fa";
import PrimaryButton from "../../components/PrimaryButton";
import Logo from "../../assets/Logo";

interface UserFormData {
  nome: string;
  email: string;
  senha: string;
  tipoUser_id: string;
  iban: string;
  nome_titular: string;
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
  <div className="relative">
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
    tipoUser_id: "",
    iban: "",
    nome_titular: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl">
        <div>
          <Logo className="w-20 h-20"/>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Cadastro de Cidadão</h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          <PrimaryButton name="Cidadão Comum" addClassName="w-full md:w-26 py-3 text-lg h-10 flex items-center justify-center" onClick={() => { navigate('/personal')}} />
           <PrimaryButton name="Empresa" addClassName="w-full md:w-26 py-3 text-lg opacity-70 h-10 flex items-center justify-center" onClick={() => { navigate('/enterprise')}} />
         </div>


        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} icon={<FaUser />} />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} icon={<FaEnvelope />} />

          {/* Campo de senha com ajuste de padding */}
          <div className="relative">
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

          <InputField label="Tipo de Usuário" type="text" name="tipoUser_id" value={formData.tipoUser_id} onChange={handleChange} icon={<FaUserTag />} />
          <InputField label="IBAN" type="text" name="iban" value={formData.iban} onChange={handleChange} icon={<FaUniversity />} />
          <InputField label="Nome do Titular" type="text" name="nome_titular" value={formData.nome_titular} onChange={handleChange} icon={<FaIdCard />} />

          <div className="flex items-center justify-center col-span-1 md:col-span-2">
          <Link to="/Login" className="text-[#068a5b] hover:underline transition duration-500">Já tem uma conta?</Link>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <PrimaryButton addClassName="" name="Cadastrar"/>
          </div>
        </form>
      </div>
    </div>
  );
}

