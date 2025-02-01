import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/going.png'

function Blog() {

       const navigate = useNavigate()
       const Inicio = () => {
         navigate('/')
       }

  return (

    <div className="">
   
        <div className="">
          <img className="" src={image} alt="" />
        </div>

          <div className="">
      <h3>Página de Blog</h3>
           <div className="">
           <p>A página que está tentando aceder,encontra-se em estado de Desenvolvimento.</p>
           <p>Por favor tente acedê-la mais tarde.</p>
           </div>
           <div className="">
            <button onClick={Inicio}>Voltar á Página Inicial</button>
           </div>
          </div>
    </div>
  )
}

export default Blog