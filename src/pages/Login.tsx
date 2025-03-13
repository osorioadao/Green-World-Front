import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import background from "../assets/Authentication-rafiki.png";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  function Enter() {
    if (!email) {
      alert("Por favor, insira o email.");
    }
    if (!senha) {
      alert("Por favor, insira a senha");
    }

    alert(`Email: ${email} | Senha: ${senha}`);
    navigate("/dashboard");
  }

  return (
    <div className="flex-row items-center justify-center h-screen gap-6">
      <div className="flex items-center justify-center h-screen gap-6 flex-wrap px-4">
        <div className="hidden sm:flex items-center justify-center w-[60vh]">
          <img 
            src={background} 
            className={`w-[30rem] h-[30rem] transition-all duration-1000 ease-in-out ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            alt="loginImagem" 
          />
        </div>

        <form
          className="flex items-center flex-col justify-center w-full max-w-[30rem] min-w-[18rem] h-auto gap-6 p-6 bg-white shadow-md rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-semibold text-[#068a5b]">Login</h3>

          <div className="flex flex-col w-full gap-3">
            <label htmlFor="email" className="p-1">Seu e-mail</label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="on"
              addClassName="w-full border-2 focus:border-green-400 p-2 rounded-md"
            />

            <label htmlFor="senha" className="p-1">Sua senha</label>
            <div className="relative w-full">
              <Input
                id="senha"
                type={isShowPassword ? "text" : "password"}
                placeholder="Senha"
                autoComplete="on"
                addClassName="w-full border-2 focus:border-green-400 rounded-md"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <a className="text-[#068a5b] hover:underline transition duration-500" href="#">
              Esqueci minha senha
            </a>
          </div>

          <div className="w-full">
            <PrimaryButton addClassName="w-[18rem] py-3 text-sm font-medium disabled:pointer-events-none" name="Entrar" onClick={Enter} />
          </div>

          <div className="w-full">
            <PrimaryButton addClassName="w-[18rem] py-3 text-sm font-medium disabled:pointer-events-none" name="Cadastrar-se" onClick={() => {navigate("/personal")}} />
          </div>
        </form>
      </div>
    </div>
  );
}

