import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Todo from './Todo/Todo';
// import SimpleSlider from './SimpleSlick'
// import SlideView from './SlideView'
// import Button from './component/button/button'
// const AppWrapper = styled.div
// `display:flex ;
// justify-content:center;`;

function App() {
    return (
         < div className = "App" >
        <Todo /> { /* <SimpleSlider/> */ } { /* <AppWrapper> */ } { /* <SlideView/> */ } { /* </AppWrapper> */ } { /* <Button label="click me plz"></Button> */ } 
        </div>
    );
}

export default App;