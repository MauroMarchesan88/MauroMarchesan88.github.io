import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link, NavLink } from 'react-router-dom';
import { useTransitionNavigate } from '../../utils/Transition';

import LogoM from '../../assets/images/Mauro.png';
import LogoS from '../../assets/images/Method.png';
import './index.scss';

const Sidebar = () => {
    const navigate = useTransitionNavigate();

    return (
      <div className='nav-bar'>
        <div className='logo'>
          <label onClick={() => navigate('/')}>
            <img src={LogoS} alt='MLogo' />
            <img src={LogoM} alt='Logo' />
          </label>
        </div>
        <nav>
          <ul>
              <li exact="true" activeclassname="active" onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
              </li>
              <li exact="true" activeclassname="active" className="about-link" onClick={() => navigate('/projects')}>
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
              </li>
              <li exact="true" activeclassname="active" className="contact-link" onClick={() => navigate('/contact')}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
              </li>
            </ul>
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
}

export default Sidebar; 