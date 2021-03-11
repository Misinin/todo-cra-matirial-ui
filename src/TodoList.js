import PT from "prop-types";

import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem({ todo, remove, toggle }) {
  return (
    <li
      className={`flex items-center space-x-3 ${
        todo.done ? "line-through" : "no-underline"
      }`}
    >
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onClick={() => toggle(todo.text)}
        checked={todo.done}
      />
      <span className="cursor-pointer" onClick={() => toggle(todo.text)}>
        {todo.text}
      </span>
      <IconButton
        aria-label="delete"
        onClick={() => {
          remove(todo.text);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

TodoItem.PT = {
  todos: PT.array.isRequired,
  toggle: PT.func.isRequired,
  remove: PT.func.isRequired,
};



const TodoList = ({ todos, remove, toggle }) => {
  return (
    <ul className="flex flex-col justify-center items-center list-none">
      {todos.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.text}
            todo={todoItem}
            remove={remove}
            toggle={toggle}
          />
        );
      })}
    </ul>
  );
};

TodoList.PT = {
  todos: PT.array.isRequired,
  toggle: PT.func.isRequired,
  remove: PT.func.isRequired,
}

export default TodoList;
