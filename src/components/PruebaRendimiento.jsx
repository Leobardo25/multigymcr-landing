import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import PropTypes from 'prop-types';

const PruebaRendimiento = memo(({ title = 'Prueba de Rendimiento' }) => {
  const [contador, setContador] = useState(0);

  const handleIncrement = useCallback(() => {
    setContador(prev => prev + 1);
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `Contador: ${contador}`;
    
    return () => {
      document.title = originalTitle;
    };
  }, [contador]);

  const render_nodo_0 = useMemo(() => (
    <h2 className="text-2xl font-serif text-[#A68966] mb-4">{title}</h2>
  ), [title]);

  const render_nodo_1 = useMemo(() => (
    <p className="text-[#D1D1D1] mb-6 font-sans">
      Valor actual del contador: <span className="font-bold text-white">{contador}</span>
    </p>
  ), [contador]);

  const render_nodo_2 = useMemo(() => (
    <button
      onClick={handleIncrement}
      className="px-6 py-2 bg-[#A68966] text-[#1A1A1B] font-bold rounded hover:bg-[#8f7454] transition-colors"
    >
      Incrementar
    </button>
  ), [handleIncrement]);

  return (
    <div className="p-6 border border-[#A68966]/20 rounded-xl bg-[#1A1A1B] text-white shadow-lg">
      {render_nodo_0}
      {render_nodo_1}
      {render_nodo_2}
    </div>
  );
});

PruebaRendimiento.propTypes = {
  title: PropTypes.string,
};

PruebaRendimiento.displayName = 'PruebaRendimiento';

export default PruebaRendimiento;