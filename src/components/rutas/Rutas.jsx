import { useState, useEffect } from 'react';
import {calles} from '../../dummy/data'
import CopyButtom from '../copyButtom/CopyButtom';

const Rutas = () => {
  const [katherine, setCalles] = useState(calles);
  const [wordFromUrl, setWordFromUrl] = useState('');

  useEffect(() => {
    const url = window.location.href;
    const urlParts = new URL(url).pathname.split('/');
    const word = urlParts[1];
    setWordFromUrl(word);
  }, []);

  const handleChange = (calle, value) => {
    setCalles((prevCalles) => {
      return { ...prevCalles, [calle]: parseInt(value) || 0 };
    });
  };

  const sumarCalles = () => {
    const total = Object.values(katherine).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  return (
    <section className='divide-y divide-gray-100 m-12 '>
      <div className='flex justify-center'>
        <div className='flex justify-between gap-x-6 py-5'>
        <h3>Usuario: {wordFromUrl} </h3>
        </div>
      </div>
      {Object.keys(katherine).map((calle) => (
        <div key={calle} className='flex justify-between gap-x-6 py-5'>
          <label htmlFor={calle}>{calle}:</label>
          <input
            type="number"
            value={katherine[calle]}
            onChange={(e) => handleChange(calle, e.target.value)}
            placeholder='0'
          />
        </div>
      ))}
      <div className='flex justify-center'>
        <h2>Total: {sumarCalles()}</h2>
      </div>
      <CopyButtom />
    </section>
  );
};

export default Rutas;




