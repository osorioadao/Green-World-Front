import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import PrimaryButton from '../components/ui/PrimaryButton';
import TextArea from '../components/ui/TextArea';

export default function Contacts() {
  return (
    <div className='h-screen bg-gray-50 w-full flex flex-col justify-center items-center gap-3 '>
      <h2 className='text-title font-bold'>Contacte-nos</h2>
      <div className='flex justify-center items-center gap-4 '>
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
              <a href="terms" target='_blank' className='text-primary font-bold'>Central de Ajuda.</a>
            </div>
          </div>
          <form className='flex flex-col shadow-lg bg-white rounded-lg p-8 items-center w-[40vw] gap-2'>
            <div className='flex gap-3'>
              <input
                id=''
                value=''
                type="text"
                placeholder='Nome'
                autoComplete='on'
                className='w-full text-body p-2 outline-none border-[1px] rounded-[3px]'
                
              />
              <input
                type="email"
                placeholder='Email'
                value=''
                autoComplete=''
                className='w-full text-body p-2 outline-none border-[1px] rounded-[3px] resize'
              />
            </div>
            <div className='flex flex-col w-full gap-3'>
              <TextArea id={''} className="resize" placeholder={'Digite'} />
              <div className='flex justify-center items-center ' >
                <PrimaryButton name='Enviar' addClassName='md:w-80 w-[8rem]' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
