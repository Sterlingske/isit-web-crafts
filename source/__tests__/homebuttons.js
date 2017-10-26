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

describe ('Home Buttons Tests', () => {
  it('is true, true?', () => {
    expect(true).toBe(true);
  })
});
