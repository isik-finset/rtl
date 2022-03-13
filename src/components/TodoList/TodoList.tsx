import React from 'react';
import TodoFooter from '../Footer/TodoFooter';
import './TodoList.css';
import { List, ListItem } from '@mui/material';

type ITodo = {
  todos: [
    {
      id: string;
      task: string;
      completed: boolean;
    }
  ];
  setTodos: (arg0: any) => void;
};

function TodoList({ todos, setTodos }: ITodo) {
  const updateTask = (id: string) => {
    let updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <List>
          {todos.map((todo, index) => (
            <ListItem
              className={`todo-item ${todo.completed && 'todo-item-active'}`}
              onClick={() => updateTask(todo.id)}
              key={todo.id}
            >
              {todo.task}
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
}

export default TodoList;
