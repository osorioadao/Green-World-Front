import { useNavigate } from 'react-router-dom';
import styles from './Styles/ErrorPage.module.css';
import image from '../assets/error.svg'

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleInicio = (): void => {
        navigate('/');
    };

    return (
        <div className={styles.containerError}>
            <div className={styles.image}>
                <img className={styles.img} src={image} alt="Página não encontrada" />
            </div>

            <div className={styles.content}>
                <h3>Página não foi encontrada.</h3>
                <p>A página que está tentando acessar não existe.</p>
                <div className={styles.btn}>
                    <button className={styles.button} onClick={handleInicio}>Voltar à página inicial</button>
                </div>
            </div>

        </div>
    );
};
