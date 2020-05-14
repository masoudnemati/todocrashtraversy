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
        completed: false,
      },
      {
        id: 3,
        title: "take out the fruits",
        completed: false,
      },
    ],
  };

  //Delete to do
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}
export default App;
