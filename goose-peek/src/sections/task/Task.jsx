import React, { useState, useEffect } from 'react';

const Task = () => {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('todo'));
    if (stored) setTask(stored);
  }, []);

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('todo', JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  const handleAddTask = () => {
    if (todo.trim() !== '') {
      const newTask = { id: Date.now(), task: todo };
      const updatedTasks = [...task, newTask];
      updateLocalStorage(updatedTasks);
      setTodo('');
    }
  };

  const startEdit = (id, taskText) => {
    setEditTaskId(id);
    setEditValue(taskText);
  };

  const saveEdit = (id) => {
    if (editValue.trim() !== '') {
      const updatedTasks = task.map((item) =>
        item.id === id ? { ...item, task: editValue } : item
      );
      updateLocalStorage(updatedTasks);
      setEditTaskId(null);
      setEditValue('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = task.filter((item) => item.id !== id);
    updateLocalStorage(updatedTasks);
  };

  return (
    <section className="rounded-md">
      <div className="flex gap-10">
        <input
          type="text"
          className="flex p-2 rounded-md border-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="p-2 rounded-md bg-tertiary cursor-pointer" onClick={handleAddTask}>+</button>
      </div>

      <div className="todo-list">
        <ul>
          {task.map((item) => (
            <li key={item.id} className="flex items-center gap-10 p-5">
              <input type="radio" name="task-select" />
              {editTaskId === item.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => saveEdit(item.id)}
                />
              ) : (
                <span className="text-secondary">{item.task}</span>
              )}
              <button onClick={() => startEdit(item.id, item.task)}>✏️</button>
              <button onClick={() => deleteTask(item.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Task;
