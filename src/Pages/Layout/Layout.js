import Moto from '../../assets/images/FotoGitHub.jpg';
import Tools from '../../Components/Tools/Tools';
import './index.scss';

const Layout = () => {
    return (
        <>
            <div className='layout-container'>
                <div className='layout-wrapper'>
                    <div className="descricao">
                        <p>Ola! Sou
                            <span><b> Mauro</b>. Fullstack Web Developer.</span>
                        </p>
                        <div>
                            <label htmlFor='contactA'>
                                <a href="mailto:mauromarchesan88@gmail.com" id='contactA' target="_blank" rel="noreferrer"> Contact </a>
                            </label>
                        </div>
                    </div>
                    <div className='tripWithDad'>
                        <img src={Moto} alt='tripWithDad' />
                    </div>
                </div>
            </div>
            <div className='tools-container'>
                <Tools />
            </div>
        </>
    )
}

export default Layout;