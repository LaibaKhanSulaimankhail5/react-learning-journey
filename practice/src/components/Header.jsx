import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#333",
        color: "#fff",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "20px" }}>Laiba's App</h1>
      <nav>
        <Link
          to="/"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}
        >
          About
        </Link>
        <Link to="/users" style={{ color: "#fff", textDecoration: "none" }}>
          Users
        </Link>
      </nav>
    </header>
  );
}

export default Header;
