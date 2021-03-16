import React, { Component } from "react";
import { getToDoList } from "../services/holderTodoItems";

class TodoList extends Component {
  state = { items: getToDoList() };
  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Done</th>
              <th scope="col">Title</th>
              <th scope="col">Details</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item._id}>
                <th scope="row">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </th>
                <td>{item.title}</td>
                <td>{item.details}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
