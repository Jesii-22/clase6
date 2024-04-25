import Card from './card';

const CardsGrid = ({ cards }) => {
  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsGrid;