import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import {sliderItems} from '../data.js'
import {mobile} from '../responsive'

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({height: "40vh", width: "100vw"})};
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=>props.bg};
    ${mobile({height: "40vh", width: "100vw"})};
`;

const Imgcontainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;  
    padding: 50px;
    ${mobile({padding:"0px 5px 0px 5px"})}; 
    // top right bottom left 
`;

const Title = styled.h1`
    font-size: 70px;
    ${mobile({fontSize: "20px"})};
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({fontSize: "12px"})};
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    background-color: transparent;
    ${mobile({fontSize: "12px", padding: "5px"})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const clickHandler = (direction)=> {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2) 
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>clickHandler("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                    <Imgcontainer>
                        <Image src={item.img}></Image>
                    </Imgcontainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>clickHandler("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider