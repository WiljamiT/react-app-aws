import React from 'react';
import { render } from '@testing-library/react';
import { CountryProvider } from '../context/CountryState';

test('renders CountryProvider without crashing', () => {
  render(
    <CountryProvider>
      <div>Test component</div>
    </CountryProvider>
  );
});
