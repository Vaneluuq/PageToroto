 import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


function FetchData({setData}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
      fetch('https://fieldops-api.toroto.mx/api/projects')
        .then(res => res.json())
        .then((result) => {
          setIsLoaded(true);
          setData(result.data);
        },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
         
       </div>
      );
    }
 }

export default FetchData



// useEffect(() => {
//     axios.get('https://fieldops-api.toroto.mx/api/projects')
//      .then(response => {
//         setData(response.data.data);
//       })
//        .catch(e => {
//         console.log(e);
//          })
// }, []);


