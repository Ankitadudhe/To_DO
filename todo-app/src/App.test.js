import React from 'react';
import ReactDom from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it ('render without crashing',()=>{
  const div =document.createElement('div');
  ReactDom.render(<App/>,div);
  ReactDom.unmountComponentAtNode(div);
})