import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import DashboardPage from './DashboardPage';

describe('<DashboardPage />', () => {
  it('should have a header called \'Dashboard\'', () => {
    const wrapper = shallow(<DashboardPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'Dashboard';

    expect(actual).to.equal(expected);
  });

  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<DashboardPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).to.equal(expected);
  });

  it('should link to an unknown route path', () => {
    const wrapper = shallow(<DashboardPage />);
    const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });
});
