import React from 'react';
import TaskItem from './TaskItem';

function ToDoList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask} 
          editTask={editTask} 
        />
      ))}
    </ul>
  );
}

export default ToDoList;
