import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Head from '../Head';
import Button from '../../Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component@Head]', () => {
  it('should render without throwing and error', () => {
    const head = shallow(<Head><Button value="Add a widget" /></Head>);
    expect(head.exists()).toBe(true);
  });
});
