import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import LogoM from '../../assets/images/Mauro.png';
import LogoS from '../../assets/images/Method.png';
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='MLogo' />
            <img src={LogoM} alt='Logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mauro-marchesan/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/MauroMarchesan88'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar; 