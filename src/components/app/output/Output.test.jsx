import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Output from './Output';

describe('output component', () => {
  afterEach(() => cleanup());
  it('renders output', () => {
    const { asFragment } = render(<Output
      results="yo"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
