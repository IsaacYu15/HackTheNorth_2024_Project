import { useState, useEffect } from 'react';
import "./task.css";
import Navbar from '../navbar/Navbar.jsx';

const Task = () => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showTasks, setShowTasks] = useState(false); // New state for showing tasks

  // Fetch stored tasks from localStorage on component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todo"));
    if (stored) {
      setTask(stored);
    }
  }, []);

  // Update localStorage when tasks change
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("todo", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  // Add a new task
  const handleAddTask = () => {
    if (todo.trim() !== "") {
      const newTask = { id: Date.now(), task: todo };
      const updatedTasks = [...task, newTask];
      updateLocalStorage(updatedTasks);
      setTodo(""); // Clear input field
    }
  };

  // Start editing a task
  const startEdit = (id, taskText) => {
    setEditTaskId(id);
    setEditValue(taskText);
  };

  // Save edited task
  const saveEdit = (id) => {
    if (editValue.trim() !== "") {
      const updatedTasks = task.map((item) =>
        item.id === id ? { ...item, task: editValue } : item
      );
      updateLocalStorage(updatedTasks);
      setEditTaskId(null);
      setEditValue("");
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    updateLocalStorage(updatedTasks);
  };

  // Toggle the visibility of the task array
  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <section className="task_container">
      <h1>Task</h1>
      <Navbar />

      <div className="add-todo">
        <input
          type="text"
          className="input-todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="todo-btn" onClick={handleAddTask}>
          <i className="fa-regular fa-plus"></i>
        </button>
      </div>

      <div className="todo-list">
        <h2>Task List</h2>
        <ul>
          {task.map((item) => (
            <li key={item.id}>
              {editTaskId === item.id ? (
                <div className="edit-task">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => saveEdit(item.id)} // Save on blur
                  />
                  <button className="save-btn" onClick={() => saveEdit(item.id)}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="task-view">
                  <span>{item.task}</span>
                  <div className="actions">
                    <button className="edit-btn" onClick={() => startEdit(item.id, item.task)}>
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="delete-btn" onClick={() => deleteTask(item.id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Confirm button to show/hide task array */}
      <button className="confirm-btn" onClick={handleShowTasks}>
        Confirm
      </button>

      {/* Conditionally render the task array */}
      {showTasks && (
        <div className="task-array">
          <h3>All Tasks in Array</h3>
          <pre>{JSON.stringify(task.map(t => t.task), null, 2)}</pre>
        </div>
      )}
    </section>
  );
};

export default Task;
