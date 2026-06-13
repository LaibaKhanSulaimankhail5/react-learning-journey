import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header siteName="Laiba's Portfolio" />

      <Card>
        <h3>About Me</h3>
        <p>
          I am already familiar with Frappe/ERPNext and I am currently learning
          React.
        </p>
      </Card>

      <Card>
        <ProfileCard
          name="Laiba"
          role="Frappe Developer | Learning React"
          skills={["Frappe", "ERPNext", "Python", "React (learning)"]}
        />
      </Card>
    </div>
  );
}

export default App;
