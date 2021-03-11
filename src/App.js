import { useState } from "react";

import Footer from "./Footer";
import "./index.css";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const FILTER_ALL = 0;
const FILTER_DONE = 1;
const FILTER_ACTIVE = 2;

const INITIAL_TODOS = [
  { done: true, text: "First" },
  { done: false, text: "Second" },
  { done: true, text: "Third" },
  { done: false, text: "Fourth" },
];

function App() {
  const [filter, setFilter] = useState(FILTER_ALL);
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case FILTER_DONE:
        return todo.done;

      case FILTER_ACTIVE:
        return !todo.done;

      default:
        return true;
    }
  });

  function create({ text }) {
    const todo = { text, done: false };
    setTodos([...todos, todo]);
  }

  function remove(text) {
    setTodos(todos.filter((todo) => todo.text !== text));
  }

  function toggle(text) {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        done: todo.text === text ? !todo.done : todo.done,
      }))
    );
  }

  return (
    <div className="h-full grid grid-rows-6">
      <section>
        <TodoForm create={create} />
      </section>
      <section className="row-start-3">
        <TodoList todos={filteredTodos} remove={remove} toggle={toggle} />
      </section>
      <Footer filter={filter} setFilter={setFilter} className="row-start-6" />
    </div>
  );
}

export default App;
