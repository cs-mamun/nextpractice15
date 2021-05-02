import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
      { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
      { name: "Dr. Babu", age: 29, expert: "Algorithm" },
    ],
  };
  render() {
    return (
      <div className="App">
        <strong>Hey there! I am the boss who compiles all.</strong>
        <button>-Switch Name-</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          expert={this.state.persons[0].expert}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          expert={this.state.persons[1].expert}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          expert={this.state.persons[2].expert}
        > Hello I am proprs Children</Person>
      </div>
    );
  }
}

export default App;

// function App() {
// return (
//   <div className="App">
//     <strong>Hey there! I am the boss who compiles all.</strong>
//     <Person name="Dr. Mamun" age="25" expert="Ethical Hacking" />
//     <Person name="Dr. Mam" age="27" expert="Cybersecurity" />
//     <Person name="Dr. Babu" age="29" expert="Algorithm"> Hello baby i am children </Person>
//   </div>
// );
// }

// export default App;
