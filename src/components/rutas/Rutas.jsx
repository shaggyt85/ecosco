import { useState } from 'react';
import data from '../../dummy/data'
import CopyButtom from '../copyButtom/CopyButtom';

const Rutas = () => {
  const [calles, setCalles] = useState(data);

  const handleChange = (calle, value) => {
    setCalles((prevCalles) => {
      return { ...prevCalles, [calle]: value === '' ? '' : parseInt(value) || 0 };
    });
  };

  const sumarCalles = () => {
    const total = Object.values(calles).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  return (
    <section className='divide-y divide-gray-100 m-12 '>
      <div className='flex justify-center'>
        <div className='flex justify-between gap-x-6 py-5'>
        <label>Usuario:</label>
        <input type="text" placeholder='Agrega el nombre' />
        </div>
      </div>
      {Object.keys(calles).map((calle) => (
        <div key={calle} className='flex justify-between gap-x-6 py-5'>
          <label htmlFor={calle}>{calle}:</label>
          <input
            type="number"
            value={calles[calle]}
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




