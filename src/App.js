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

  const switchNameHandler = (newName) => {
    // console.log("clicked");
    // this.state.persons[0].name = 'Spy Mamun';
    setPersonState({
      persons: [
        { name: newName, age: 25, expert: "Ethical Hacking" },
        { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
        { name: "Babu", age: 28, expert: "Data Structure" },
      ],
    });
  };
  // For two way binding 
  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
        { name: event.target.value, age: 27, expert: "Cybersecurity" },
        { name: "Babu", age: 28, expert: "Data Structure" },
      ],
    });
  }
  // inline styleing into the react component. But inline is not good practice
  const style = {
    border: '1px solid black',
    backgroundColor: 'white',
    borderRadius: '5px',
    height: '40px',
    width: '130px',
    fontSize: '15px',
    display: 'block',
    margin: 'auto',
  };

  return (
    <div className="App">
      <strong>Hey there! I am the boss who compiles all.</strong>
      {/* <button onClick={switchNameHandler.bind(this, "Engr. Mamun")}>
        -Switch Name-
      </button> */}
      {/* But switchNameHandler('') is not convenient and efficient */}
      <button 
      style={style}
      onClick={() => switchNameHandler('Mukhula Azam')}>
        -Switch Name-
      </button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        expert={personState.persons[0].expert}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        expert={personState.persons[1].expert}
        changed= {nameChangeHandler}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        expert={personState.persons[2].expert}
        click={switchNameHandler.bind(this, "Engr. M ~")}
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

