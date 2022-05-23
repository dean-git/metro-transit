import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Router} from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('app rendering to homepage', async () => {
    render(<App />, {wrapper: MemoryRouter});
    expect(screen.getByText(/Real Time Routes Display/i)).toBeInTheDocument();
  });

  test('landing on direction page', () => {
    const history = createMemoryHistory();
    history.push('/direction');
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );
  
    expect(screen.getByText(/Direction:/i)).toBeInTheDocument();
  });
  
  test('landing on stops page', () => {
    const history = createMemoryHistory();
    history.push('/direction/stops');
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );
  
    expect(screen.getByText(/Stops/i)).toBeInTheDocument();
  });
