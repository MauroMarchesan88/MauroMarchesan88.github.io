import React from 'react';
import MyContext from './context/MyContext';

function Provider({ children }) {
    //   const [data, setData] = useState([]);

    //   useEffect(() => {
    //     const getData = async () => {
    //       const { results } = await fetch(endpoint).then((response) => response.json());
    //       setData(results);
    //     };
    //     getData();
    //   }, []);

    //   const objeto = { data };
    return (
        // <MyContext.Provider value={ objeto }>
        <MyContext.Provider>
            {children}
        </MyContext.Provider>
    );
}

// Provider.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default Provider;