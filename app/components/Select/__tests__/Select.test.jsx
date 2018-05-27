import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../Select';

Enzyme.configure({ adapter: new Adapter() });

describe('[Component@Select]', () => {
  it('should render without throwing and error', () => {
    const select = shallow(<Select />);
    expect(select.exists()).toBe(true);
  });
});
