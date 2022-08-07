import Moto from '../../assets/images/FotoGitHub.jpg';
import Sidebar from '../../Components/Sidebar/index';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className="descricao">
                Ola! Sou
                <span><b> Mauro</b>. Fullstack Web Developer.</span>
                <div>
                    <a href="mailto:mauromarchesan88@gmail.com" target="_blank" rel="noreferrer">
                        <button type='button' className='contactBtn'>
                            Contact
                        </button>
                    </a>
                </div>
            </div>
            <div className='tripWithDad'>
                <img src={Moto} alt='tripWithDad' />
            </div>
        </div>
    )
}

export default Layout;