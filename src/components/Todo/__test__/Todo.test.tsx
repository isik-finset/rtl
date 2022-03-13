import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

describe('Integration Test', () => {
  it('should render typed values in the list of tasks', () => {
    render(<MockTodo />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonEl = screen.getByRole('button', { name: 'Add' });
    userEvent.type(inputEl, 'gitple');
    userEvent.click(buttonEl);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toHaveTextContent('gitple');
  });

  it('should render all the inputted tasks down in the list', () => {
    render(<MockTodo />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonEl = screen.getByRole('button', { name: 'Add' });
    userEvent.type(inputEl, 'gitple');
    userEvent.click(buttonEl);
    userEvent.type(inputEl, 'finset');
    userEvent.click(buttonEl);
    userEvent.type(inputEl, 'betterday');
    userEvent.click(buttonEl);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});

describe('Integration Task-2', () => {
  it('should check if the task is not completed initially', () => {
    render(<MockTodo />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonEl = screen.getByRole('button', { name: 'Add' });
    userEvent.type(inputEl, 'gitple');
    userEvent.click(buttonEl);
    const listItem = screen.getByRole('listitem');
    expect(listItem).not.toHaveClass('todo-item-active');
  });

  it('should check if the task is completed when it is clicked', () => {
    render(<MockTodo />);
    const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonEl = screen.getByRole('button', { name: 'Add' });
    userEvent.type(inputEl, 'gitple');
    userEvent.click(buttonEl);
    const listItem = screen.getByRole('listitem');
    userEvent.click(listItem);
    expect(listItem).toHaveClass('todo-item-active');
  });
});
