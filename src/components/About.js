import React from 'react';
import bannerImg from './imgs/personas/fernandomolina.jpg'; // Aquí pones la imagen del banner
import logoImg from './imgs/logo/Logo-Blanco.png'; // Aquí pones el logo

const About = () => {
  return (
    <div className="bg-black text-white font-roboto min-h-screen p-8">
      {/* Sección de Banner e Historia */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mb-16">
        {/* Imagen del banner a la izquierda */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={bannerImg} alt="Fernando Molina" className="w-full h-auto rounded-lg shadow-lg border-4 " />
        </div>
        {/* Título y logo a la derecha */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:pl-8">
          <h2 className="text-4xl font-bold text-red-500 mb-4">La Historia de Jormilcar</h2>
          <h3 className="text-2xl font-semibold mb-4 text-white">De una <span className="text-red-500">Idea</span> a una <span className="text-red-500">Gran Empresa</span></h3>
          <img src={logoImg} alt="Logo Jormilcar"  className="w-48 h-auto mb-8 transform transition-transform duration-300 hover:scale-110" />
          <p className="text-lg text-gray-300 text-left">
            Hace más de <strong>25 años</strong>, en el sur de Quito, nació una pequeña idea sin grandes pretensiones. Lo que comenzó como un simple hobby, una pasión por los autos, rápidamente se convirtió en una oportunidad de negocio para nuestro fundador. La compra y venta de autos, al principio solo como un pasatiempo, pronto tomó un giro inesperado.
            <br /><br />
            Con cada vehículo vendido, crecía no solo la experiencia y conocimiento, sino también la confianza de nuestros clientes. Este entusiasmo por los autos y la dedicación al servicio al cliente hicieron que la pequeña idea se expandiera. No pasó mucho tiempo antes de que se hiciera evidente que este hobby tenía el potencial de convertirse en algo mucho más grande.
            <br /><br />
            Hoy, <strong>Jormilcar</strong> es una empresa consolidada con más de <strong>dos sucursales</strong> en el Valle de Los Chillos y un impresionante stock de más de <strong>150 autos</strong> de todas las gamas. Nuestra trayectoria de más de <strong>25 años</strong> en el mercado nos ha enseñado que el éxito se construye día a día, con trabajo duro, transparencia y profesionalismo.
            <br /><br />
            Nos enorgullece ver hasta dónde hemos llegado y estamos emocionados por lo que el futuro nos depara. Nuestro objetivo sigue siendo claro: <strong>convertirnos en el concesionario de autos seminuevos más grande del país</strong> en la compra, venta, comisión e importación de vehículos de todas las gamas. Seguimos comprometidos con la innovación y el servicio al cliente, estableciendo nuevos estándares en la industria automotriz.
            <br /><br />
            ¡<span className="text-white-500">Vamos por más!</span>
          </p>
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Misión */}
        <div className="w-full md:w-1/2 p-4 border-t-4 border-red-500">
          <h3 className="text-2xl font-semibold mb-4 text-white">Nuestra <span className="text-red-500">Misión</span></h3>
          <p className="text-lg text-gray-300">
            En <strong>Jormilcar</strong>, con más de <strong>25 años de trayectoria</strong> en el mercado, nos especializamos en la compra, venta, comisión e importación de autos de gama alta. Nuestra empresa, que nació al sur de Quito y ahora cuenta con más de <strong>dos sucursales</strong> en el Valle de Los Chillos, se enorgullece de ofrecer un stock de más de <strong>150 autos</strong> de todas las gamas.
            <br /><br />
            Nuestro compromiso es brindar un <strong>servicio personalizado</strong> y de excelencia, asegurando la satisfacción y confianza de nuestros clientes a través de la calidad, transparencia y profesionalismo en cada transacción.
          </p>
        </div>
        {/* Visión */}
        <div className="w-full md:w-1/2 p-4 border-t-4 border-red-500">
          <h3 className="text-2xl font-semibold mb-4 text-white">Nuestra <span className="text-red-500">Visión</span></h3>
          <p className="text-lg text-gray-300">
            Ser reconocidos como el <strong>concesionario de autos seminuevos más grande</strong> del país en la compra, venta, comisión e importación de vehículos.
            <br /><br />
            Aspiramos a expandir nuestra presencia y liderazgo en el mercado, distinguiéndonos por nuestra innovación, servicio al cliente y excelencia en cada uno de nuestros procesos.
            <br /><br />
            Nuestro objetivo es establecer <strong>estándares elevados</strong> en la industria automotriz, convirtiéndonos en el referente principal para los amantes de los autos de lujo y seminuevos en Ecuador.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
