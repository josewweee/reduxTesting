import '../setUpTest.js';

import { shallow } from 'enzyme';
import React from 'react';

describe('Form', () => {
  it('agregar finanza', () => {
    const agregarFinanza = jest.fn();
    const wrapper = shallow(<Form agregarFinanza={agregarFinanza} />);
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'This is the description' } });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: '150' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(agregarFinanza).toEqual([
      { desc: 'This is the description', cant: 150 },
    ]);
  });
});
