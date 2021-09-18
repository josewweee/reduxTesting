import '../setUpTest.js';

import shallow from 'enzyme';
import React from 'react';

import { Dashboard } from './Dashboard';

describe('Test Dashboard', () => {
  it('Value in strong', () => {
    const wrapper = shallow(<Dashboard valor={5} />);

    const resultado = expectwrapper.find('strong').text().includes('5');
    expect(resultado).toEqual(true);
  });
});
