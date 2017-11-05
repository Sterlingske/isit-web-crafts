import React from 'react';
import ReactDom from 'react-dom';

import MakeHtml from '../MakeHtml.js';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton.js';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns.js';

import RaisedButton from 'material-ui/RaisedButton';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

import ElfDebugEnzyme from '../ElfDebugEnzyme.js';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'MakeHtml');

import requestAnimationFrame from '../temp-polyfills.js';

describe ('MakeHtml Tests', () => {
  it('is true actually true?', () => {
    expect(true).toBe(true);
  });
  it('MakeHtml.js loads', () => {
    const div = document.createElement('div');
    ReactDom.render(<MakeHtml/>, div);
  })
  it('MakeHtml contains dropdowns and buttons', () => {
    const wrapper = shallow(<MakeHtml/>);
    const stuff = <div><MakeHtmlHomeButton/><MakeHtmlDropDowns/></div>
    elfDebugEnzyme.getLast(wrapper, 'div', true);
    expect(wrapper.contains(stuff)).toEqual(true);
  })
  /*it('MakeHtmlHomeButton contains a home button', () =>{
    const wrapper = shallow(<MakeHtmlHomeButton/>);
    const stuff = <RaisedButton></RaisedButton>
    elfDebugEnzyme.getLast(wrapper, 'RaisedButton', true);
    expect(wrapper.contains(stuff)).toEqual(true);
  })*/
  it('MakeHtmlHomeButton , button goes home', () =>{
    const wrapper = shallow(<MakeHtmlHomeButton/>);
    $.subscribe('goHome', (event, target) => {
      console.log(JSON.stringify(event, null, 4));
      console.log(target);
      expect(event.type).toBe('goHome');
      expect(target.message).toBe('The User wants to go home.');
    });
    wrapper.find('#homeButon').simulate('click');
  })

});
