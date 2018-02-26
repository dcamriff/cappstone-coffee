import React from 'react'
import styled from 'styled-components'

import SplashImg from './img/splash.jpg'

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex: 1 0 auto;
`

export const SplashContainer = Container.extend`
background: url(${SplashImg}) center no-repeat;
background-size: cover;

@media (min-width: 1025px) {
    width: 75vw;
}
`

export const HomePageText = styled.div`
position: relative;
top: 20px;
`

export const LoginContainer = styled.div`
position: relative;
top: 200px;
`

// Credit: SplashImg Photo by Nathan Dumlao on Unsplash
