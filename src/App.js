import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <strong>Hey there! I am the boss who compiles all.</strong>
      <Person name="Dr. Mamun" age="25" expert="Ethical Hacking" />
      <Person name="Dr. Mam" age="27" expert="Cybersecurity" />
      <Person name="Dr. Babu" age="29" expert="Algorithm" />
    </div>
  );
}

export default App;
