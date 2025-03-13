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
  const [loading, setLoading] = useState(false); // Controle de loading para o botão de entrar
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const isEmailValid = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);

  const Enter = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (!isEmailValid(email)) {
      alert("Email inválido.");
      return;
    }

    try {
      setLoading(true); // Ativa o estado de carregamento
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

            // Se a autenticação for bem-sucedida, redireciona para o dashboard

      const data = await response.json();
       if(data && data.token){
        navigate("/dashboard")
       }  
       else{
        alert("Falha na autenticação,por favor tente novamente.")
       }

    } catch (error: any) {
      console.error("Erro no login:",error)
      alert("Erro no login: " + error.message);
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

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
        onClick={(e) => e.preventDefault()}
          className="flex items-center flex-col justify-center w-full max-w-[30rem] min-w-[18rem] h-auto gap-6 p-6 bg-white shadow-md rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-[#068a5b]">Login</h3>

          <div className="flex flex-col w-full gap-3">
            <label htmlFor="email" className="p-1">Seu e-mail</label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="on"
              value={email}
              onChange={handleEmailChange}
              addClassName="w-full border-2 focus:border-green-400 p-2 rounded-md"
            />

            <label htmlFor="senha" className="p-1">Sua senha</label>
            <div className="relative w-full">
              <Input
                id="senha"
                type={isShowPassword ? "text" : "password"}
                placeholder="Senha"
                autoComplete="on"
                value={senha}
                onChange={handleSenhaChange}
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
            <PrimaryButton
              addClassName={`w-[18rem] py-3 text-sm font-medium ${loading ? 'opacity-60 cursor-not-allowed' : ''}`} // Estilo para desabilitar o botão
              name={loading ? "Carregando..." : "Entrar"}
              onClick={Enter}
              disabled={loading} // Desabilita o botão "Entrar" durante o carregamento
            />
          </div>

          <div className="w-full">
            <PrimaryButton
              addClassName="w-[18rem] py-3 text-sm font-medium"
              name="Cadastrar-se"
              onClick={(e) => {
                e.preventDefault()
             navigate('/personal')}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

