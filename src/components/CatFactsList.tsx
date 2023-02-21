import React, { useState, useEffect } from 'react';
import './CatFactsList.css';

const API_URL = 'https://catfact.ninja/facts';

const FactsList: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <h2>{data[0].fact}</h2>
      <ul>
        {data.map((item) => (
          <li>&#128571; {item.fact}</li>
        ))}
      </ul>
    </>
  );
};

export default FactsList;
