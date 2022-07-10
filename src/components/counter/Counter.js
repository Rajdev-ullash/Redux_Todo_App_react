import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
} from "../../redux/state/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const MyNumber = useRef();

  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h4 className="text-white">Counter App</h4>
      </div>
      <div className="card-body">
        <h1>{count}</h1>
        <div className="my-4">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn-danger mx-2"
          >
            Decrease
          </button>
        </div>
        <div className="my-4">
          <input type="number" ref={MyNumber} className="form-control w-50 " />
          <button
            onClick={() => {
              dispatch(setCustom(parseInt(MyNumber.current.value)));
            }}
            className="btn btn-danger w-50 my-2"
          >
            Set Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
