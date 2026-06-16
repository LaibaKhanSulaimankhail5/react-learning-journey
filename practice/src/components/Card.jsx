function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #999",
        padding: "15px",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
