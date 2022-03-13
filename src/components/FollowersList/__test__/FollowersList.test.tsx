import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  it('should check if the followers list is there', async () => {
    render(<MockFollowersList />);
    const listEl = await screen.findByTestId('follower-item-0');
    expect(listEl).toBeInTheDocument();
  });

  it('should render multiple follower items', async () => {
    render(<MockFollowersList />);
    const listEls = await screen.findAllByTestId(/follower-item/i);
    expect(listEls.length).toBe(5);
  });
});
