import { useNavigate } from 'react-router-dom';

export const useTransitionNavigate = () => {
  const navigate = useNavigate();

  // Fallback for browsers that don't support this API:
  if (!document.createDocumentTransition) {
    navigate('/contact');
    return;
  }

  return (...args) => {
        const transition = document.createDocumentTransition();
          transition.start(()=> navigate(...args))
      }
  }
