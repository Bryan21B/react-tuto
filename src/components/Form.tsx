import { useState } from "react";

interface FormProps {
  addTask: (name: string) => void;
}

const Form = ({ addTask }: FormProps) => {
  const [name, setName] = useState("");
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name) {
      alert("You need to enter a task name");
      return;
    }
    addTask(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3 p-5 bg-amber-400">
      <h2 className="flex justify-center items-center">
        <label htmlFor="new-todo-input" className="text-2xl">
          What needs to be done?
        </label>
      </h2>
      <div className="flex justify-center items-center mt-3">
        <input
          type="text"
          id="new-todo-input"
          className="mr-4"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="text-xl">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
