import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextinput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    let enteredText = todoTextinput.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextinput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
