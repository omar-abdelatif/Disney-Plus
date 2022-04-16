import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import moviesfile from "../num1.json"
function Movies() {
    const movieList = moviesfile;
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                {movieList.map(movie => (
                    <Wrap key={movie.MovieName}>
                        <Link to={`/detail/${movie.MovieName}`}>
                            <img src={movie.CardImg} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container >
    )
}

export default Movies

const Container = styled.div`
`
const Content = styled.div`
    margin:auto;
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(200px , 1fr));
    grid-gap: 25px;

`
const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgb(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0  / 69%) 0px 26px 30px -10px,
                rgb(0 0 0  / 73%) 0px 16px 10px -10px;
    transition:0.3s;
    a{
        width:100%;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }

    &:hover{
        box-shadow: rgb(0 0 0  / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0  / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 3px solid rgb(249, 249, 249, 0.8);
        }
`
