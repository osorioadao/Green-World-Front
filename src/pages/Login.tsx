import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import background from '../assets/Authentication-rafiki.png';

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Enter() {
    if (!email) {
      return alert("Por favor, insira o email.")
    }
    if (!senha) {
      return alert("Por favor, insira a senha")
    }

    alert(`Email: ${email} | Senha: ${senha}`)
    navigate('/dashboard')
  }

  const navigate = useNavigate();

  const navigateToTypeRegister = () => {
    navigate("/TypeRegister");
  };

  return (
    <div className=''>

      <div>
        <img src={background} className='' alt="" />
      </div>

      <form className='' onSubmit={(e) => e.preventDefault()}>

        <div className=''>

        </div>

        <div className=''>
          <h3>Green World Login</h3>
        </div>

        <div className=''>
          <label htmlFor="email">Seu e-mail</label>
          <input
            type="email"
            autoComplete="on"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Sua senha</label>
          <input
            type={isShowPassword ? "text" : "password"}
            required
            autoComplete='on'
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button
            type="button"
            className=''
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

          <div className=''>
            <a href="#">Esqueci minha senha</a>
          </div>

        </div>

        <div className=''>
          <button
            className=''
            type="button"
            onClick={Enter}
          >
            Entrar
          </button>
        </div>

        <div className=''>

          <p>Ainda não tem uma conta?</p>

          <div className=''>
            <button
              className=''
              type="button"
              onClick={navigateToTypeRegister}
            >
              Cadastrar-se
            </button>
          </div>

        </div>

      </form>

    </div>
  );
};

