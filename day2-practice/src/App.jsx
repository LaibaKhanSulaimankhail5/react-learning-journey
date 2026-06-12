import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard
        name="Laiba"
        role="Frappe Developer | Learning React"
        skills={["Frappe", "ERPNext", "Python", "React (learning)"]}
      />
    </div>
  );
}

export default App;
