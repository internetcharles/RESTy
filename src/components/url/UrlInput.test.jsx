import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UrlInput from './UrlInput';

describe('UrlInput component', () => {
  afterEach(() => cleanup());

  it('renders input', () => {
    const { asFragment } = render(<UrlInput
      onChange={() => {}}
      onClick={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
