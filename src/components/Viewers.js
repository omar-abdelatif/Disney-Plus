import React from 'react'
import styled from 'styled-components'
import Img1 from "../images/viewers-marvel.png"
import Img2 from "../images/viewers-pixar.png"
import Img3 from "../images/viewers-disney.png"
import Img4 from "../images/viewers-starwars.png"
import Img5 from "../images/viewers-national.png"
import V1 from "../videos/1564674844-disney.mp4"
import V2 from "../videos/1564676714-pixar.mp4"
import V3 from "../videos/1564676115-marvel.mp4"
import V4 from "../videos/1608229455-star-wars.mp4"
import V5 from "../videos/1564676296-national-geographic.mp4"


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={Img1} alt="" />
                <video src={V1} autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src={Img2} alt="" />
                <video src={V2} autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src={Img3} alt="" />
                <video src={V3} autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src={Img4} alt="" />
                <video src={V4} autoPlay muted loop></video>
            </Wrap>
            <Wrap>
                <img src={Img5} alt="" />
                <video src={V5} autoPlay muted loop></video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5 , minmax(0 , 1fr));
    grid-gap: 25px;
    padding: 30px 0;
`;
const Wrap = styled.div`
    cursor:pointer;
    border-radius: 10px;
    border: 3px solid rgb(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px,
                rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    transition: 0.2s linear;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        visibility: hidden;
        opacity: 0;
        transition: 0.2s linear;        
    }

    &:hover{
        box-shadow: rgb(0 0 0  / 80%) 0px 40px 58px -16px,
        rgb(0 0 0  / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgb(249, 249, 249, 0.8);
        
        video{
            visibility: visible ;
            opacity: 1;
        }
    }
`;