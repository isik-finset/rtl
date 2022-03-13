import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into the title prop', () => {
  render(<Header title="cars" />);
  const headingElement = screen.getByText(/cars/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into the title props', () => {
//   render(<Header title="cars" />);
//   const headingElement = screen.getAllByRole('heading');
//   expect(headingElement).toHaveLength(2);
// });

// it('should render same text passed into the title props with specific name', () => {
//   render(<Header title="cars" />);
//   const headingElement = screen.getByRole('heading', { name: /cats/i });
//   expect(headingElement).toBeInTheDocument();
// });

// it('should find the component by its title', () => {
//   render(<Header title="cars" />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should find the component by its testid', () => {
//   render(<Header title="cars" />);
//   const headingElement = screen.getByTestId('delta');
//   expect(headingElement).toBeInTheDocument();
// });

// FINDBY

// it("should test", async () => {
//    render(<Header title="role based" />);
//    const headerEl = await screen.findByText("role based");
//    expect(headerEl).toBeInTheDocument();
// })
