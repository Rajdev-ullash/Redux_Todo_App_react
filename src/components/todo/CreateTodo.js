import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddToDo } from "../../redux/state/todo/todoSlice";
const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <input
            ref={taskInput}
            type="text"
            className="form-control"
            placeholder="Add Todo"
          />
        </div>
        <div className="col-2">
          <button
            onClick={() => dispatch(AddToDo(taskInput.current.value))}
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
