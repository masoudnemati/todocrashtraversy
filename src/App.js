import React, { Component } from "react";
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "take out the trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "take out the pet",
        completed: false,
      },
      {
        id: uuidv4(),
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

  //Add to do
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
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
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
