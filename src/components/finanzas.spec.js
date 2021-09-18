import '../setUpTest.js';

import { shallow } from 'enzyme';
import React from 'react';

import { Finanzas } from './Finanzas';

describe('Finanzas', () => {
  it('eliminar finanzas', () => {
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(
      <Finanzas finanzas={[1, 'item']} eliminarFinanza={eliminarFinanza} />
    );
    wrapper.find('button').at(1).simulate('click');
    const firstItem = wrapper.text().includes(1);
    const secondItem = wrapper.text().includes('item');
    expect(firstItem).toEqual(true);
    expect(secondItem).toEqual(true);
    expect(eliminarFinanza.mock.calls).toEqual([[1]]);
  });
});
