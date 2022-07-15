import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import {sliderItems} from '../data'

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ccfbf1;
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
    transform: translateX(0vw)
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center
`;

const Imgcontainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
    padding: 60px;
`;

const InfoContainer = styled.div`
    flex: 1;  
    padding: 10px;  
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #ccfbf1;
    cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const clickHandler = (direction)=> {

  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>clickHandler("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg}>
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