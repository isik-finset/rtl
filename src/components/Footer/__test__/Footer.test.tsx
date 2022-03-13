import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter as Router } from 'react-router-dom';

type INum = {
  inputNum: number;
};

const MockFooter = ({ inputNum }: INum) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={inputNum} />
    </Router>
  );
};

describe('TodoFooter', () => {
  it('should check if the rendered number is same as passed prop', () => {
    render(<MockFooter inputNum={2} />);
    const parElement = screen.getByText(/2 tasks left/i);
    expect(parElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockFooter inputNum={1} />);
    const parElement = screen.getByText(/1 task left/i);
    expect(parElement).toBeInTheDocument();
  });
});

// it('should check if the chosen element is visible to the user', () => {
//   render(<MockFooter inputNum={1} />);
//   const parElement = screen.getByText(/1 task left/i);
//   expect(parElement).toBeVisible();
// });

// it('should render "p" tag', () => {
//   render(<MockFooter inputNum={1} />);
//   const parElement = screen.getByText(/1 task left/i);
//   expect(parElement).toContainHTML('p');
// });
