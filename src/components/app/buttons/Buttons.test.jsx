import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Buttons from './Buttons';

describe('Buttons component', () => {
  afterEach(() => cleanup());
  it('renders buttons', () => {
    const { asFragment } = render(<Buttons
      onChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
