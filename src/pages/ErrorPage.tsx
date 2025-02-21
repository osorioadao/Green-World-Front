import { useNavigate } from 'react-router-dom';
import image from '../assets/error.svg'

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleInicio = (): void => {
        navigate('/');
    };

    return (
        <div className='bg-slate-950'>
            <div className=''>
                <img className='' src={image} alt="Página não encontrada" />
            </div>

            <div className=''>
                <h3>Página não foi encontrada.</h3>
                <p>A página que está tentando acessar não existe.</p>
                <div className=''>
                    <button className='' onClick={handleInicio}>Voltar à página inicial</button>
                </div>
            </div>

        </div>
    );
};
