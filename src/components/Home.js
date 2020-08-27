import React, { useState, useEffect } from 'react';
import Image from './Image';
import axios from 'axios';

export default function Home() {
  const [nasaData, setNasaData] = useState([]);
  const [apiData, setAPIData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=fAfnBgrJYOvlPj1JYQ9URhTDAeWix1maFeEpuW80')
      .then(res => {
        setAPIData(res.data);
      })
      .catch(err => {
        console.log(`There was an error of ${err}`);
      });
  }, []);

  console.log('This is from the apiData', apiData);

  return <Image apiData={apiData} />;
}
