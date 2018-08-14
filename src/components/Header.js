import React, { Component } from 'react'
import { Link } from 'react-static'

import styled from 'styled-components'
import LogoImg from './GratisBelajar.jpg'

const Wrapper = styled.div`
  width: 100%;
  color: #222;
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
  align-items: center;

  nav {
    flex: 1;
  }

  nav a {
    margin-right: 5px;
    padding: 10px 15px;
    border-radius: 2px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`
const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <div>
            <Logo src={LogoImg} alt="Logo GratisBelajar" />
          </div>
          <h2>GratisBelajar</h2>
          <nav>
            <Link exact to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <span>
            <button className="blue">Donate</button>
            <button>Login</button>
            <button>Create an account</button>
          </span>
        </Container>
      </Wrapper>
    )
  }
}
