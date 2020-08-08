import React from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'
 
const Wrapper =styled.div`
 width:100%;
 padding:32px;
 `;
const Page=styled.div`width:100%`
export default class SlideView extends React.Component{
    render(){
        return(
<Wrapper>
    <Slider
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    infinite={false}
    dots={true}>
<Page>page one</Page>
<Page>page two</Page>
<Page>Page th</Page>
    </Slider>
</Wrapper>
        );
    }
}