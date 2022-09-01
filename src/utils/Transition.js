import { useNavigate } from 'react-router-dom';

export const useSpaNavigate = (data) => {
  const navigate = useNavigate();

  // Fallback for browsers that don't support this API:
  if (!document.createDocumentTransition) {
    navigate(data);
    return;
  }

  // With a transition:
  const transition = document.createDocumentTransition();
  transition.start(() => navigate(data));
}

// export const useTransitionNavigate = () => {
//   const navigate = useNavigate();

//   return (...args) => {
//     const transition = document.createDocumentTransition();
//     transition.start(() => navigate(...args))
//   }
// }
