import React, { Component } from "react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default TodoItem;
