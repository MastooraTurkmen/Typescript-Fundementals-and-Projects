import { useState } from "react";
import { Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Please add text");
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form task-form">
      <input
        type="text"
        className="form-input input"
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Text
      </button>
    </form>
  );
};

export default Form;
