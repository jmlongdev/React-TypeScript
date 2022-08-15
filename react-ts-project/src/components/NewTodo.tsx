import React, { useRef } from "react";
import { prototype } from "stream";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextinput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextinput.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    props.onAddTodo(enteredText);
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
