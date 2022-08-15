import { Link } from 'react-router-dom';
import Moto from '../../assets/images/FotoGitHub.jpg';
import Tools from '../../Components/Tools/Tools';
import './index.scss';

const Layout = () => {
    return (
        <>
            <div className='layout-container'>
                <div className='layout-wrapper'>
                    <div className="descricao">
                        <p>Hi! i'm
                            <span><b> Mauro</b>. Fullstack Web Developer.</span>
                        </p>
                        <div>
                            <label htmlFor='contactA'>
                                <Link to='/contact' id='contactA'> Contact </Link>
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