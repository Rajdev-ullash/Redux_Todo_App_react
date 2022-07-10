import React from "react";
import { useSelector } from "react-redux/es/exports";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { TodoEditAlert } from "./TodoEditAlert";
const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped  table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, index) => {
                return (
                  <tr key={index.toString()}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => TodoEditAlert(item, index)}
                        className="btn btn-dark btn-sm"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => TodoDeleteAlert(index)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
