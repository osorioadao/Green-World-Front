import PrimaryButton from "../../components/PrimaryButton"
import TextArea from "../../components/TextArea"
import Input from "../../components/Input"

function Register() {



  return (
    <div className='h-screen'>
    
      <form action="h-screen" className=''>
         <div>
        <label htmlFor="nome">Nome <span>*</span></label>
        <input type="text" placeholder="Nome" />
        <label htmlFor="email">Email <span>*</span></label>
        <input type="email" placeholder="Email" />
        <label htmlFor="telefone">Telefone </label>
        <input type="phone" placeholder="Telefone" />
        <label htmlFor="senha">Senha <span>*</span></label>
        <input type="password" placeholder="Senha" />
        <label htmlFor="nomeTitular">Nome de Titular <span>*</span></label>
        <input type="text" placeholder="nomeTitular" />
        <label htmlFor="iban">Iban <span>*</span></label>
        <input type="text" placeholder="Iban" />
        <PrimaryButton
        name="Enivar"
        // onClick={to}
        addClassName="" />
         </div>
      </form>
    
    </div>
  )
}

export default Register