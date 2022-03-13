import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from '../AddInput';

const MockAddInput = () => {
  return (
    <AddInput
      todos={[{ id: '', task: '', completed: false }]}
      setTodos={jest.fn()}
    />
  );
};

it('should render input element', () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  expect(inputElement).toBeInTheDocument();
});

it('should render the typed value', () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  userEvent.type(inputElement, 'three');
  expect(inputElement).toHaveValue('three');
});

it('should have an empty input element after clicking ADD button', () => {
  render(<MockAddInput />);
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  userEvent.type(inputElement, 'read RTL doc');
  expect(inputElement).toHaveValue('read RTL doc');
  const buttonElement = screen.getByRole('button', { name: 'Add' });
  userEvent.click(buttonElement);
  expect(inputElement).toHaveValue('');
});
