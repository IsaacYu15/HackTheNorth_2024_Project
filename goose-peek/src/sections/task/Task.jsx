import React, { useState, useEffect } from 'react';
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";


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
  const style = { color: "white", fontSize: "1rem" }


  return (
    <section className="rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex-grow">
        <input
          type="text"
          className="flex p-2 rounded-md border-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a task..."
        />
        </div>
        <button className="px-2 rounded-md bg-tertiary cursor-pointer text-lg flex flex-grow-0 justify-end" onClick={handleAddTask}>+</button>
      </div>

      <div className="todo-list">
        <ul>
          {task.map((item) => (
            <li key={item.id} className="flex items-center my-5 justify-between">
              <div className="flex items-center">
              <input type="radio" name="task-select" className="mr-2" />
              {editTaskId === item.id ? (
                <input
                  type="text"
                  value={editValue} 
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => saveEdit(item.id)}
                />
              ) : (
                <span className="text-secondary font-body">{item.task}</span>
              )}
              </div>
              <div className="flex-grow float-right gap-1 flex justify-end">
                
              <button onClick={() => startEdit(item.id, item.task)}>
                <HiOutlinePencil style={style}/>
              </button>
              <button onClick={() => deleteTask(item.id)}><HiOutlineTrash style={style}/>
              </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Task;
