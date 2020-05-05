import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test('Renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1); // One element
});

test('Renders increment button', () => {});

test('Renders counter display', () => {});

test('Counter starts at 0', () => {});

test('Clicking button increments counter display', () => {});
