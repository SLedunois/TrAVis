import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component@Button]', () => {
  it('should render without throwing and error', () => {
    const button = shallow(<Button value="Add a widget" />);
    expect(button.exists()).toBe(true);
  });

  it('should render with a `Add a widget` value', () => {
    const button = shallow(<Button value="Add a widget" />);
    expect(button.text().trim()).toBe('Add a widget');
  });

  it('should render a SVG icon with a text', () => {
    const button = shallow(<Button type="ADD" value="Add a widget" />);
    expect(button.html().indexOf('svg')).not.toBe(-1);
  });
});
