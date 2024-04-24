const Hero = ({ title, description }) => {
    return (
      <section className="hero">
        <h2>{title}</h2>
        <p>{description}</p>
        {/* Otros elementos del Hero */}
      </section>
    );
  };
  
  export default Hero;