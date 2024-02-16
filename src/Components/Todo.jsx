import React from "react";
import "./Todo.css";
import { Copyright, Delete, DoneAll, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  Add,
  element,
  Del,
  Complete,
  button,
  Update,
  InputValue,
  UpdateIndex,
} from "../Redux/ToDoSlice";

function Todo() {
  const Dispatch = useDispatch();
  const Button = useSelector((state) => state.Todo.Button);
  const Element = useSelector((state) => state.Todo.Element);
  const Todos = useSelector((state) => state.Todo.Todos);
  // const Index = useSelector((state)=>state.Todo.UpdatedIndux)
  const Input = useSelector((state) => state.Todo.InputValue);

  const handleChange = (e) => {
    Dispatch(
      element({
        ID: Date.now(),
        value: e.target.value,
      })
    );
    Dispatch(
      InputValue({
        value: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    if (Input !== "" && Button === "ADD") {
      Dispatch(
        Add({
          value: Element,
        })
      );
    } else if (Input !== "" && Button === "EDIT") {
      Dispatch(
        Update({
          value: Element.Content,
        })
      );
      Dispatch(
        button({
          value: "ADD",
        })
      );
    }
    Dispatch(
      InputValue({
        value: "",
      })
    );
  };

  const handleDelete = (index) => {
    Dispatch(Del({ value: index }));
  };

  const handleCheck = (index) => {
    Dispatch(
      Complete({
        value: index,
      })
    );
  };

  const handleUpdate = (index) => {
    Dispatch(
      button({
        value: "EDIT",
      })
    );
    Dispatch(
      UpdateIndex({
        value: index,
      })
    );
    Dispatch(
      InputValue({
        value: Todos[index].Content,
      })
    );
  };

  return (
    <div className="container">
      <div className="root mx-auto mt-5 rounded text-align-center">
        <header>
          <h2 className="text-white mt-1 h1">
            <u>Todo App</u>
          </h2>
          <form action="" className="mt-3">
            <input
              value={Input}
              type="text"
              className="px-2 rounded"
              placeholder="My tasks..."
              onChange={handleChange}
            />
            <br />
            <button
              className="rounded mt-2"
              type="button"
              onClick={handleSubmit}
            >
              {Button}
            </button>
          </form>
        </header>
        <hr className="text-white" />
        {Todos.map((element, index) => {
          return (
            <section className="mt-4 px-5" key={index}>
              <div className="Elements bg-white rounded">
                <div
                  className="TextArea rounded ps-2"
                  style={{
                    textDecoration: element.Complete ? "line-through" : "none",
                    opacity: element.Complete ? "0.3" : "1",
                  }}
                >
                  {element.Content}
                </div>
                <div className="Icons ms-auto me-1">
                  <DoneAll onClick={() => handleCheck(index)} />
                  <Edit onClick={() => handleUpdate(index)} />
                  <Delete onClick={() => handleDelete(index)} />
                </div>
              </div>
            </section>
          );
        })}

        <footer className="text-white">
          <hr />
          <p className="copyright">
            <Copyright /> All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
