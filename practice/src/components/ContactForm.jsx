import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "") {
      alert("Please fill in both fields.");
      return;
    }
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Form</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          style={{ marginLeft: "10px", padding: "5px" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ padding: "8px 20px", cursor: "pointer" }}
      >
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
