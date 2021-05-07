import React, { Component } from "react";
// import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
      { id: '2', name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
      { id: '3', name: "Dr. Babu", age: 29, expert: "Algorithm" },
    ],
    cars: [{ name: "Audi", year: 2021 }],
    showPersons : false,
  };

  switchNameHandler = () => {
    // console.log("clicked");
    // this.state.persons[0].name = 'Spy Mamun';
    this.setState({
      persons: [
        { name: "Mamun PhD", age: 25, expert: "Ethical Hacking" },
        { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
        { name: "Babu", age: 28, expert: "Data Structure" },
      ],
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mamun PhD", age: 25, expert: "Ethical Hacking" },
        { name: event.target.value, age: 27, expert: "Cybersecurity" },
        { name: "Babu", age: 28, expert: "Data Structure" },
      ],
    });
  };

  togglePersonHandler = () => {
    const doseShowed = this.state.showPersons;
    this.setState({showPersons: !doseShowed});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); this is might good but not totally
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };




  render() {
    const style = {
      display: 'block',
      margin: 'auto',
      padding:'13px 21px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      fontSize: '16px',
      fontWeight: '700',
      letterSpacing: '1px',
      TextDecoration: 'uppercase'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person , index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            expert={person.expert}
            key={person.id}
            />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            expert={this.state.persons[0].expert}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            expert={this.state.persons[1].expert}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            expert={this.state.persons[2].expert}
          >
            Hello I am props Children
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <strong>Hey there! I am the boss who compiles all.</strong>
        <button style={style} onClick={this.togglePersonHandler}>
          - Toggle Persons -
        </button>
        {persons}
      </div>
    );
  }
}

export default App;





// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
//       { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
//       { name: "Dr. Babu", age: 29, expert: "Algorithm" },
//     ],
//     showPersons: false,
//   });

  

//   const switchNameHandler = (newName) => {
//     // console.log("clicked");
//     // this.state.persons[0].name = 'Spy Mamun';
//     setPersonState({
//       persons: [
//         { name: newName, age: 25, expert: "Ethical Hacking" },
//         { name: "Dr. Mam", age: 27, expert: "Cybersecurity" },
//         { name: "Babu", age: 28, expert: "Data Structure" },
//       ],
//     });
//   };

  
//   // For two way binding
//   const nameChangeHandler = (event) => {
//     setPersonState({
//       persons: [
//         { name: "Dr. Mamun", age: 25, expert: "Ethical Hacking" },
//         { name: event.target.value, age: 27, expert: "Cybersecurity" },
//         { name: "Babu", age: 28, expert: "Data Structure" },
//       ],
//     });
//   };

//   const togglePersonHandler = () => {
//     const doseShow = personState.showPersons;
//     setPersonState({
//       showPersons: !doseShow,
//     });
//   };

//   // inline styleing into the react component. But inline is not good practice
//   const style = {
//     border: "1px solid black",
//     backgroundColor: "white",
//     borderRadius: "5px",
//     height: "40px",
//     width: "130px",
//     fontSize: "15px",
//     display: "block",
//     margin: "auto",
//   };

//   return (
//     <div className="App">
//       <strong>Hey there! I am the boss who compiles all.</strong>
//       {/* <button onClick={switchNameHandler.bind(this, "Engr. Mamun")}>
//         -Switch Name-
//       </button> */}

//       {/* But switchNameHandler('') is not convenient and efficient */}

//       <button 
//       style={style}
//       onClick={() => switchNameHandler('Mukhula Azam')}>
//         -Switch Name-
//       </button>

//       {/* Toggle button practice */}
//       {/* <button style={style} onClick={togglePersonHandler}>
//         -Switch Name-
//       </button> */}
 
//         <div>
//           <Person
//             name={personState.persons[0].name}
//             age={personState.persons[0].age}
//             expert={personState.persons[0].expert}
//           />
//           <Person
//             name={personState.persons[1].name}
//             age={personState.persons[1].age}
//             expert={personState.persons[1].expert}
//             changed={nameChangeHandler}
//           />
//           <Person
//             name={personState.persons[2].name}
//             age={personState.persons[2].age}
//             expert={personState.persons[2].expert}
//             click={switchNameHandler.bind(this, "Engr. M ~")}
//           >
//             Hello I am props Children
//           </Person>
//         </div>
//     </div>
//   );
// };

// export default App;