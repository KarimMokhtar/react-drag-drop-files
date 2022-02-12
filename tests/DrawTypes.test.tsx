import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DrawTypes from '../src/DrawTypes';

const types = ['PNG', 'JPG'];
describe('drawing types of the required file', () => {
  test('Rendering nothing when there are no types provided', () => {
    const { container } = render(<DrawTypes />);
    expect(container.childElementCount).toEqual(0);
  });
  test('Rendering nothing when there are no types provided', () => {
    const { container } = render(<DrawTypes types={types} />);
    expect(container.childElementCount).not.toEqual(0);
    expect(screen.getByText(types.toString())).toBeInTheDocument();
  });
});
