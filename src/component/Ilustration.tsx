import '../styles.css'; // Asegúrate de crear este archivo CSS

const WeddingRings = () => {
  return (
    <div className="wedding-rings-container">
      <div className="ring-circle">
        <div className="ring">
          {/* Puedes usar un SVG o CSS para crear cada anillo */}
        </div>
        <div className="ring">{/* Segundo anillo */}</div>
        <div className="hearts">{/* SVG o un elemento para el corazón */}</div>
      </div>
    </div>
  );
};

export default WeddingRings;
