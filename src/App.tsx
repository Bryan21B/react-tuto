import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import { useState } from "react";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}
interface AppProps {
  tasks?: Task[];
}

const FILTER_MAP = {
  All: () => true,
  Active: (task: Task) => !task.completed,
  Completed: (task: Task) => task.completed,
};

export type FilterType = (typeof FILTER_NAMES)[number]; // "All" | "Active" | "Completed"

export const FILTER_NAMES = ["All", "Active", "Completed"] as const;

function App(props: AppProps) {
  const [filter, setFilter] = useState<FilterType>("All");

  const [tasks, setTasks] = useState(props.tasks);
  const addTask = (name: string) => {
    const newTask = { id: `todo-${nanoid(4)}`, name, completed: false };
    setTasks([...(tasks || []), newTask]);
  };

  const toggleTaskCompleted = (id: string) => {
    const updatedTasks = tasks?.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks?.filter((task) => id !== task.id);
    setTasks(updatedTasks);
  };

  const editTask = (id: string, newName: string) => {
    const editedTaskList = tasks?.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  const taskList = tasks
    ?.filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        name={task.name}
        id={task.id}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList?.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList?.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
