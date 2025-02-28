import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import background from "../assets/Authentication-rafiki.png";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

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

  const navigateToTypeRegister = () => {
    navigate("/TypeRegister");
  };

  return (
    <div className="flex items-center justify-center h-screen gap-6 flex-wrap">
      <div className="hidden sm:flex items-center justify-center w-[30rem] h-[30rem]">
        <img
          src={background}
          className="w-[30rem] h-[30rem]"
          alt="loginImagem"
        />
      </div>

      <form
        className="flex items-center flex-col justify-center w-[30rem] h-[30rem] gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3 className="text-4xl font-semibold text-[#4d953e]">Green World Login</h3>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="p-1">Seu e-mail</label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="on"
            addClassName="items-center w-[22rem]"
            
          />

          <label htmlFor="senha" className="p-1">Sua senha</label>
          <div className="relative">
            <Input
              id="senha"
              type={isShowPassword ? "text" : "password"}
              placeholder="Senha"
              autoComplete="on"
              addClassName="items-center w-[22rem]"
              
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <PrimaryButton addClassName="w-[22rem]" name="Entrar" onClick={Enter} />

        <div className="flex items-center justify-between w-[22rem]">
          <a className="text-[#4d953e] hover:underline transition duration-500" href="#">
            Esqueci minha senha
          </a>
        </div>

          <div className="flex items-center gap-2.5">
          <p>Não tem uma conta?</p>
           
           <PrimaryButton addClassName="w-[12rem]" name="Cadastrar-se" onClick={navigateToTypeRegister} />
          </div>

      </form>
    </div>
  );
}


