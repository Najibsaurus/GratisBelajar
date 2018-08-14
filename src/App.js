import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { Helmet } from 'react-helmet'

import Header from './components/Header'

injectGlobal`
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #081A3C;
    font-weight: normal;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4 {
    font-weight: normal;
    margin: 0;
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  code, .monospace {
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace;
  }
  button {
    font: inherit;
    cursor: pointer;
    padding: 10px 15px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
    background: #081A3C;

    &.blue {
      background: #82ADFF;
    }
  }
`
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
`
const AppStyles = styled.div``

const App = () => (
  <Router>
    <AppStyles>
      <Helmet>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <title>GratisBelajar</title>
      </Helmet>
      <Header />
      <Container>
        {/* content */}
        <Routes />
      </Container>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
