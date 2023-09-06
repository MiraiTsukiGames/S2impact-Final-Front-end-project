import React, {useEffect } from 'react';
import axios from 'axios';

function ClientAPI( { url }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(url);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [url])
  return (
    <div>
      
    </div>
  )
}

export default ClientAPI;
