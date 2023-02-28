import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { AiOutlineGlobal, AiOutlineHome } from 'react-icons/ai';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  
});