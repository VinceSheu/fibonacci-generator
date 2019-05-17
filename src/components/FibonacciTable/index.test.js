import React from 'react';
import { shallow } from 'enzyme';

import FibonacciTable from './index';

describe('<FibonacciTable />', () => {
  it('should render FibonacciTable correctly', () => {
    const renderedComponent = shallow(<FibonacciTable fibonacciArray={[0,1,1,2,3,5]} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});