import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextinput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextinput.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextinput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
