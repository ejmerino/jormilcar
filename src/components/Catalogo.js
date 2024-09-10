import React, { useState, useEffect } from 'react';
import cx2020Rojo1 from './imgs/autos/mazda/cx/cx2020-rojo-1.jpg';

const autosData = [
  {
    id: 1,
    foto: cx2020Rojo1,
    anio: 2020,
    marca: 'Mazda',
    modelo: 'CX-5',
    precio: 30000,
    kms: 15000,
  },
  {
    id: 2,
    foto: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2022/HR-V/Full-Width/Full-Width-Top/2022-Honda-HRV-Full-Width-Desktop-Hero-1400x600.jpg',
    anio: 2018,
    marca: 'Honda',
    modelo: 'Civic',
    precio: 18000,
    kms: 35000,
  },
  {
    id: 3,
    foto: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2021/highlander/04W4.png',
    anio: 2021,
    marca: 'Toyota',
    modelo: 'Highlander',
    precio: 35000,
    kms: 10000,
  },
  // Más autos
];

const Catalogo = () => {
  const [autos, setAutos] = useState(autosData);
  const [autosFiltrados, setAutosFiltrados] = useState(autosData);
  const [filtro, setFiltro] = useState({
    marca: '',
    modelo: '',
    anioDesde: '',
    anioHasta: '',
    precioMin: '',
    precioMax: '',
  });
  const [orden, setOrden] = useState('precio-asc');

  const aniosDisponibles = [...new Set(autos.map(auto => auto.anio))].sort((a, b) => a - b);
  const preciosDisponibles = autos.map(auto => auto.precio);
  const minPrecioDisponible = Math.min(...preciosDisponibles, Infinity);
  const maxPrecioDisponible = Math.max(...preciosDisponibles, -Infinity);
  const minAnioDisponible = Math.min(...aniosDisponibles);
  const maxAnioDisponible = Math.max(...aniosDisponibles);

  useEffect(() => {
    setFiltro(prevFiltro => ({
      ...prevFiltro,
      anioDesde: minAnioDisponible,
      anioHasta: maxAnioDisponible,
      precioMin: minPrecioDisponible,
      precioMax: maxPrecioDisponible,
    }));
  }, [minAnioDisponible, maxAnioDisponible, minPrecioDisponible, maxPrecioDisponible]);

  useEffect(() => {
    aplicarFiltros();
  }, [filtro, orden]);

  const aplicarFiltros = () => {
    let autosFiltrados = autos;

    if (filtro.marca) {
      autosFiltrados = autosFiltrados.filter(auto => auto.marca === filtro.marca);
    }
    if (filtro.modelo) {
      autosFiltrados = autosFiltrados.filter(auto => auto.modelo === filtro.modelo);
    }
    if (filtro.anioDesde) {
      autosFiltrados = autosFiltrados.filter(auto => auto.anio >= parseInt(filtro.anioDesde));
    }
    if (filtro.anioHasta) {
      autosFiltrados = autosFiltrados.filter(auto => auto.anio <= parseInt(filtro.anioHasta));
    }
    if (filtro.precioMin) {
      autosFiltrados = autosFiltrados.filter(auto => auto.precio >= parseFloat(filtro.precioMin));
    }
    if (filtro.precioMax) {
      autosFiltrados = autosFiltrados.filter(auto => auto.precio <= parseFloat(filtro.precioMax));
    }

    // Ordenar
    autosFiltrados.sort((a, b) => {
      if (orden === 'precio-asc') return a.precio - b.precio;
      if (orden === 'precio-desc') return b.precio - a.precio;
      if (orden === 'kms-asc') return a.kms - b.kms;
      if (orden === 'kms-desc') return b.kms - a.kms;
      return 0;
    });

    setAutosFiltrados(autosFiltrados);
  };

  const handleFiltroChange = (e) => {
    setFiltro({
      ...filtro,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnioDesdeChange = (e) => {
    setFiltro({
      ...filtro,
      anioDesde: e.target.value,
    });
  };

  const handleAnioHastaChange = (e) => {
    setFiltro({
      ...filtro,
      anioHasta: e.target.value,
    });
  };

  const handlePrecioMinChange = (e) => {
    setFiltro({
      ...filtro,
      precioMin: e.target.value,
    });
  };

  const handlePrecioMaxChange = (e) => {
    setFiltro({
      ...filtro,
      precioMax: e.target.value,
    });
  };

  const handleResetFilters = () => {
    setFiltro({
      marca: '',
      modelo: '',
      anioDesde: minAnioDisponible,
      anioHasta: maxAnioDisponible,
      precioMin: minPrecioDisponible,
      precioMax: maxPrecioDisponible,
    });
    setAutosFiltrados(autos);
  };

  const handleOrdenChange = (e) => {
    setOrden(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      {/* Filtros */}
      <div className="lg:w-80 w-full bg-gray-100 p-6 rounded-lg shadow-md flex-shrink-0">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Filtros</h3>
        <div className="space-y-4">
          {/* Marca */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Marca</label>
            <select
              name="marca"
              value={filtro.marca}
              onChange={handleFiltroChange}
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Seleccionar Marca</option>
              {[...new Set(autos.map(auto => auto.marca))].map(marca => (
                <option key={marca} value={marca}>{marca}</option>
              ))}
            </select>
          </div>

          {/* Modelo */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Modelo</label>
            <select
              name="modelo"
              value={filtro.modelo}
              onChange={handleFiltroChange}
              disabled={!filtro.marca}
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Seleccionar Modelo</option>
              {[...new Set(autos.filter(auto => auto.marca === filtro.marca).map(auto => auto.modelo))].map(modelo => (
                <option key={modelo} value={modelo}>{modelo}</option>
              ))}
            </select>
          </div>

          {/* Año desde - Año hasta */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Año</label>
            <div className="flex flex-col space-y-2">
              <input
                type="range"
                min={minAnioDisponible}
                max={maxAnioDisponible}
                value={filtro.anioDesde}
                onChange={handleAnioDesdeChange}
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500"
              />
              <input
                type="range"
                min={filtro.anioDesde}
                max={maxAnioDisponible}
                value={filtro.anioHasta}
                onChange={handleAnioHastaChange}
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Desde: {filtro.anioDesde}</span>
              <span>Hasta: {filtro.anioHasta}</span>
            </div>
          </div>

          {/* Precio mínimo - Precio máximo */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Precio</label>
            <div className="flex flex-col space-y-2">
              <input
                type="range"
                min={minPrecioDisponible}
                max={maxPrecioDisponible}
                value={filtro.precioMin}
                onChange={handlePrecioMinChange}
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500"
              />
              <input
                type="range"
                min={filtro.precioMin}
                max={maxPrecioDisponible}
                value={filtro.precioMax}
                onChange={handlePrecioMaxChange}
                className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer accent-blue-500"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Mín: ${filtro.precioMin}</span>
              <span>Máx: ${filtro.precioMax}</span>
            </div>
          </div>
          
          {/* Orden */}
          <div className="flex flex-col space-y-2">
            <label className="font-medium text-gray-600">Ordenar por</label>
            <select
              value={orden}
              onChange={handleOrdenChange}
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
              <option value="kms-asc">Kilometraje: Menor a Mayor</option>
              <option value="kms-desc">Kilometraje: Mayor a Menor</option>
            </select>
          </div>

          <button
            onClick={handleResetFilters}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Restablecer Filtros
          </button>
        </div>
      </div>

      {/* Autos */}
      <div className="flex-grow">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {autosFiltrados.map(auto => (
            <div
              key={auto.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-200"
            >
              <img src={auto.foto} alt={`${auto.marca} ${auto.modelo}`} className="w-full h-48 object-cover rounded-md" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">{auto.marca} {auto.modelo}</h3>
                <p className="text-sm text-gray-500">{auto.anio} • {auto.kms} km</p>
                <p className="mt-2 text-lg font-bold text-blue-500">${auto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
