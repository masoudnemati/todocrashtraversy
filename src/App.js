import React from "react";
import Todos from "./components/Todos";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "take out the pet",
        completed: true,
      },
      {
        id: 3,
        title: "take out the fruits",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
