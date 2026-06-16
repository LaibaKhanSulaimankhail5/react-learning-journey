function Header({ siteName }) {
  return (
    <header style={{ background: "#333", color: "#fff", padding: "15px 20px" }}>
      <h1 style={{ margin: 0 }}>{siteName}</h1>
      <nav>
        <a href="#" style={{ color: "#fff", marginRight: "15px" }}>
          Home
        </a>
        <a href="#" style={{ color: "#fff" }}>
          About
        </a>
      </nav>
    </header>
  );
}

export default Header;
