import React, { Component } from "react";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
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
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
