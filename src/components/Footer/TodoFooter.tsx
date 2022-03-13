import React from 'react';
import './TodoFooter.css';
import { Link } from 'react-router-dom';

type INotComplete = {
  numberOfIncompleteTasks: number;
};

function TodoFooter({ numberOfIncompleteTasks }: INotComplete) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{' '}
        {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

export default TodoFooter;
