import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CardsGrid from '../components/CardsGrid';
import Image from "next/image";
import styles from "./page.module.css";
const Home = () => {
    // Define los datos de las tarjetas
    const cardsData = [
      {
        title: 'Card 1',
        image: '/card1.jpg',
        description: 'Descripción de la tarjeta 1',
      },
      {
        title: 'Card 2',
        image: '/card2.jpg',
        description: 'Descripción de la tarjeta 2',
      },
      // Puedes añadir más datos de tarjetas si lo necesitas
    ];
  
    // Retorna la estructura de la página de inicio
    return (
      <div>
        {/* Renderiza el Navbar con el título */}
        <Navbar title="Mi Aplicación Next.js" />
  
        {/* Renderiza el Hero con el título y la descripción */}
        <Hero title="Bienvenido a mi aplicación" description="Descripción del héroe" />
  
        {/* Renderiza la cuadrícula de tarjetas con los datos */}
        <CardsGrid cards={cardsData} />
  
        {/* Renderiza el Footer con el año de derechos de autor */}
        <Footer copyright="© 2024 Mi Empresa" />
      </div>
    );
  };
  
  // Exporta la función de la página de inicio
  export default Home;