import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import PrimaryButton from '../components/PrimaryButton';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

export default function Contacts() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-7 '>
      <h2 className='text-title font-bold'>Contacte-nos</h2>
      <div className='flex justify-center items-center mt-[8ox] gap-10 '>
        <div className='flex flex-col justify-center items-center gap-3 '>
          <FiPhone color="primary" size={30} />
          <p>(+244) 934 156 335</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 '>
          <MdOutlineEmail color="primary" size={30} />
          <p>greenworld70@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-3 p-5 '>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h6 className='text-[20px] font-bold'>Entre em contacto conosco</h6>
            <p>
              Caso haja alguma dúvida, estamos aqui para esclarece-lo.
            </p>
            <div className='flex gap-2'>
              <span>Acesse também nossa </span>
              <a href="#" target='_blank' className='text-primary font-bold'>Central de Ajuda.</a>
            </div>
          </div>
          <form className='flex flex-col justify-center items-center w-[50vw] gap-6'>
            <div className='flex gap-4'>
              <Input
                id=''
                type="text"
                placeholder='Nome'
                autoComplete='on'
                addClassName='flex'
              />
              <Input
                id=''
                type="email"
                placeholder='Email'
                autoComplete='on'
                addClassName='flex'
              />
            </div>
            <div className='flex flex-col w-full gap-5'>
              <TextArea id={''} className="resize" placeholder={'Mensagem'} />
              <div className='flex justify-center items-center ' >
                <PrimaryButton name='Enviar' addClassName='w-[24rem]' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

