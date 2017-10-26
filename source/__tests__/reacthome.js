import React from 'react'
import ReactDom from 'react-dom';

import ReactHome from '../ReactHome.js';
import HomeButtons from '../HomeButtons.js';

//import shallow and enzyme
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

//import ElfDebugEnzyme
import ElfDebugEnzyme from '../ElfDebugEnzyme.js';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

//import mock animationFrame
import requestAnimationFrame from '../temp-polyfills.js';

describe ('React Home Tests', () => {
  it('is true, true?', () => {
    expect(true).toBe(true);
  });

  it('renders h1 default value', () => {
    const wrapper = shallow(<ReactHome />);
    const h1 = <h1>An H1 element in a React Component</h1>
    elfDebugEnzyme.getLast(wrapper, 'h1', true);
    expect(wrapper.contains(h1)).toEqual(true);
  });
});
