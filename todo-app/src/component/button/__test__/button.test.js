import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button'
import {render,cleanup} from '@testing-library/react'
import {
    toBeInTheDocument,
    toHaveClass,
  } from '@testing-library/jest-dom/matchers'
  import renderer from 'react-test-render'

afterEach(cleanup)


it ("renders without crashing",()=>{
    const div=document.createElement('div');
    ReactDom.render(<Button></Button>,div)
})
it("renders button correctly",()=>{
   const{getByTestId} =render(<Button label="clickme"></Button>)
expect (getByTestId('button')).toHaveTextContent('click me please');
})
it ("matches snapshot",()=>{
  const tree = render.create(<button label="save"></button>).toJSON();
expect(tree).toMatchSnapshot();
})