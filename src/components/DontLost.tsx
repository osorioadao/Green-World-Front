import logo from '../../public/greenworld.svg'

function DontLost() {
  return (
    <div className=''>
      <div className=''>

        <img className='' src={logo} alt="logo" />

        <div className=''>

          <p className=''>Não se perca</p>
          <a className='placeholder:' href="/">Início</a>
          <a className='placeholder:' href="/blog">Blog</a>
          <a className='placeholder:' href="/empresas">Empresas</a>
          <a className='placeholder:' href="/contacts">Contactos</a>

        </div>

        <div className=''>

          <p className=''>Links Utéis</p>
          <div className=''>
            <a className='' href="">Contactos</a>
            <a className='' href="/termos">Política de Privacidade</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DontLost;