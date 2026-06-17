import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        style={{ padding: "8px", marginBottom: "15px", width: "250px" }}
      />

      {filteredUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => navigate(`/users/${user.id}`)}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}

      <p>
        Showing {filteredUsers.length} of {users.length} users
      </p>
    </div>
  );
}

export default UsersList;
