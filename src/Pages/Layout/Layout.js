import { useNavigate } from 'react-router-dom';
import Moto from '../../assets/images/FotoGitHub.jpg';
import Tools from '../../Components/Tools/Tools';
import './index.scss';

const Layout = () => {
  const checkNavigate = useNavigate();
  
  function spaNavigate(data) {
    // Fallback for browsers that don't support this API:
    if (!document.createDocumentTransition) {
      checkNavigate(data);
      return;
    }
    
    // With a transition:
    const transition = document.createDocumentTransition();
    transition.start(() => checkNavigate(data));
  }

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
                <span onClick={()=> spaNavigate('/contact')} id='contactA'> Contact </span>
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