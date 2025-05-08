import { capitalize } from "radash";

interface TodoProps {
  name: string;
  completed?: boolean;
  id: string;
  toggleTaskCompleted: (id) => void;
  deleteTask: (id) => void;
}

function Todo({
  name,
  completed,
  id,
  toggleTaskCompleted,
  deleteTask,
}: TodoProps) {
  return (
    <>
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id={id.toString()}
            type="checkbox"
            defaultChecked={completed}
            onChange={() => toggleTaskCompleted(id)}
          />
          <label className="todo-label" htmlFor={id.toString()}>
            {capitalize(name)}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{capitalize(name)}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => deleteTask(id)}
          >
            Delete <span className="visually-hidden">{capitalize(name)}</span>
          </button>
        </div>
      </li>
    </>
  );
}

export default Todo;
