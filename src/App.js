// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState,setPersonState] = useState({
    persons: [
      { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
      { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
      { name: "Dr. Babu", age: 29, expert: "Algorithm" },
    ]
  });

  const switchNameHandler = () => {
    // console.log("clicked");
    // this.state.persons[0].name = 'Spy Mamun';
    setPersonState({
      persons: [
        { name: "Mamun PhD", age: 25, expert: "Ethical Hacking" },
        { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
        { name: "Babu", age: 28, expert: "Data Structure" },
      ],
    });
  };

  return (
    <div className="App">
      <strong>Hey there! I am the boss who compiles all.</strong>
      <button onClick={switchNameHandler}>-Switch Name-</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        expert={personState.persons[0].expert}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        expert={personState.persons[1].expert}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        expert={personState.persons[2].expert}
      >
        Hello I am props Children
      </Person>
    </div>
  ); 
}

export default App;



// class App extends Component {
//   state = {
//     persons: [
//       { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
//       { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
//       { name: "Dr. Babu", age: 29, expert: "Algorithm" },
//     ],
//     cars: [
//       {name: "Audi", year: 2021}
//     ]
//   };

//   switchNameHandler = () => {
//     // console.log("clicked");
//     // this.state.persons[0].name = 'Spy Mamun';
//     this.setState({
//       persons: [
//         { name: "Mamun PhD", age: 25, expert: "Ethical Hacking" },
//         { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
//         { name: "Babu", age: 28, expert: "Data Structure" },
//       ]
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <strong>Hey there! I am the boss who compiles all.</strong>
//         <button onClick={this.switchNameHandler}>-Switch Name-</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//           expert={this.state.persons[0].expert}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           expert={this.state.persons[1].expert}
//         />
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//           expert={this.state.persons[2].expert}
//         >
//           {" "}
//           Hello I am props Children
//         </Person>
//       </div>
//     );
//   }
// }

// export default App;

// // function App() {
// // return (
// //   <div className="App">
// //     <strong>Hey there! I am the boss who compiles all.</strong>
// //     <Person name="Dr. Mamun" age="25" expert="Ethical Hacking" />
// //     <Person name="Dr. Mam" age="27" expert="Cybersecurity" />
// //     <Person name="Dr. Babu" age="29" expert="Algorithm"> Hello baby i am children </Person>
// //   </div>
// // );
// // }

// // export default App;
