import React from 'react';
/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
 import {render, screen, fireEvent} from '@testing-library/react';
 import Home from '../pages/Home';
 import {BrowserRouter as Router} from 'react-router-dom';

 test('test title', () => {
    // Your tests come here...
    render(<Router><Home /></Router>);
    expect(screen.getByRole('heading')).toHaveTextContent('Real Time Routes Display');
  });

  test('simulates selection', () => {
    const { getByTestId, getAllByTestId } = render(<Router><Home /></Router>);
    //The value should be the key of the option
    fireEvent.change(getByTestId('route-select'), { target: { value: 2 } });
    let options = getAllByTestId('route-select-option');
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
  });

  test('test label', () => {
    render(<Router><Home /></Router>);
    expect(screen.getByTestId('route-label')).toHaveTextContent('Route:');
  });

  test('Verifies default option label', () => {
    const { getByTestId, getAllByTestId, getByText } = render(<Router><Home /></Router>);
    const routeNodes = getAllByTestId('route-select-option');
    expect(routeNodes.length).toBe(2);
    expect(getByText('Select route')).toBeTruthy();
  });