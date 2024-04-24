import Card from './Card';

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