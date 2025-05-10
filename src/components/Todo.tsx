import { Button } from "./ui/button";
import { useState } from "react";

interface TodoProps {
  name: string;
  completed?: boolean;
  id: string;
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

function Todo({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
  editTask,
}: TodoProps) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  };

  const editingTemplate = (
    <form className="" onSubmit={handleSubmit}>
      <div className="">
        <label className="" htmlFor={id}>
          New name for {name}
        </label>
        <input
          id={id}
          className=""
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <Button type="button" className="" onClick={() => setEditing(false)}>
          Cancel
          <span className="sr-only">renaming {name}</span>
        </Button>
        <button type="submit" className="">
          Save
          <span className="sr-only">new name for {name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="">
      <div className="">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="">
        <Button type="button" className="" onClick={() => setEditing(true)}>
          Edit <span className="sr-only">{name}</span>
        </Button>
        <button type="button" className="" onClick={() => deleteTask(id)}>
          Delete <span className="sr-only">{name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
