import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components'
import LOGO from "../images/logo.svg"
import Logo1 from "../images/home-icon.svg"
import Logo2 from "../images/search-icon.svg"
import Logo3 from "../images/watchlist-icon.svg"
import Logo4 from "../images/original-icon.svg"
import Logo5 from "../images/movie-icon.svg"
import Logo6 from "../images/series-icon.svg"
import User from "../images/user-image.jpg"


function Header() {
    let [New, setNew] = useState(false);
    const HandelNavbar = () => {
        return New ? setNew(false) : null
    }
    const HandelClick = () => {
        New = setNew(!New);
    }
    return (
        <Nav onClick={HandelNavbar}>
            <Link className="link" to="/">
                <Logo src={LOGO} />
            </Link>
            <NavBar>
                <NavMenu className={
                    New ? "NavBar" : ""
                }>
                    <Link className="link" to="/">
                        <img src={Logo1} />
                        <span>HOME</span>
                    </Link>
                    <a className="link" >
                        <img src={Logo2} />
                        <span>SEARCH</span>
                    </a>
                    <a className="link" >
                        <img src={Logo3} />
                        <span>WATCHLIST</span>
                    </a>
                    <a className="link" >
                        <img src={Logo4} />
                        <span>ORIGINAL</span>
                    </a>
                    <Link className="link" to="/movies">
                        <img src={Logo5} />
                        <span>MOVIES</span>
                    </Link>
                    <a className="link" >
                        <img src={Logo6} />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <RightPart>
                    <Link to="/login">
                        <UserImg src={User} />
                    </Link>
                    <Icon>
                        <button onClick={HandelClick} >
                            {
                                New ? <FaTimes className='tim' /> : <FaBars className='bar' />
                            }
                        </button>
                    </Icon>
                </RightPart>
            </NavBar>
        </Nav >
    )
}
export default Header

const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    position: relative;
    z-index: 99;
`;
const Logo = styled.img`
    width:80px
`;
const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    @media (max-width: 900px) {
        flex: none;
        justify-content: flex-end;
    };
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    &.NavBar{
        transition: .5s ease-in-out;
        opacity: 1;
        transform: translateY(0);
    }
    @media (max-width: 900px) {
        flex-direction: column;
        position: absolute;
        background: #090b13;
        top: 100%;
        left: 0;
        width: 100%;
        transition: .5s ease-in-out;
        opacity: 0;
        z-index: -1;
        transform: translateY(-385px);
        margin-left: 0;
        align-items: flex-start;
        .link{
            padding: 10px 0 10px 36px !important;
            width: 100%;
            img{
                height:30px !important;
            }
            span{
                font-size: 18px !important;
            }
        }
    };
    .link {
        display: flex;
        align-items: center;
        padding:0 12px;
        background: #090b13;
        cursor:pointer;
        img{
            height:20px;
        }       
        span {
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;
            margin-left:5px;
            &:after {
                content:"";
                position: absolute;
                height: 2px;
                width:0;
                left: 0;
                top: 115%;
                background: #fff;
                transition: 0.2s;
                opacity: 0; 
            }
        } 
        &:hover {
            span:after {
                opacity: 1; 
                width:100%;
            }
        }
    }
`;
const RightPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:fit-content;
`;
const UserImg = styled.img`
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`;
const Icon = styled.div`
    button {
        all: unset;
        font-size: 30px;
        font-weight: 100;
        padding: 0 10px;
        text-align: center;
        .tim{
            transition: 1s;
            color:#6bffff;
        }
        .bar{
            transition: 1s;
        }
        @media (min-width: 901px) {
            display: none;
        };
    }
`;