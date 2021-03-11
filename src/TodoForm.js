import PT from "prop-types";

import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TodoForm = ({ create }) => {
  const [text, setText] = useState("");

  return (
    <div className="py-8 flex justify-center items-center space-x-4">
      <TextField
        value={text}
        variant="outlined"
        size="small"
        onChange={(evt) => setText(evt.target.value)}
      />
      <Button
        variant="contained"
        disabled={!text}
        color="primary"
        onClick={() => {
          create({ text });
          setText("");
        }}
      >
        Add
      </Button>
    </div>
  );
};

TodoForm.PT = {
  create: PT.func.isRequired,
};

export default TodoForm;
