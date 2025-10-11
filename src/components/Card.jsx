
const Card = ({ children }) => {
  return (
    <div className="card" style={{ width: "40rem" }}>
      {children}
    </div>
  );
};

export default Card;