import { MdCopyright } from 'react-icons/md'

export default function MiniFooter() {
  return (
    <div className=''>
         <div className='text-white flex justify-center items-center gap-[10px]'>
        <MdCopyright size={30} color="#fff" />
        <p className=''>Copyright 2025</p>
        <p className=''>|</p>
        <p className=''>Feito por Albertina Sauimbo</p>
      </div>
    </div>
  )
}
