import React from 'react'
import pistaLogo from './../assets/pista-logo.png'
import styled from 'styled-components'


const LogoContainer = styled.div`
  align-self: center;
`

const PistaLogo = styled.img`
  width: 350px;
  height: 350px;

@media only screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
}

@media only screen and (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
    flex-basis: 50%;
    width: 250px;
    height: 250px;
}
`

class Logo extends React.Component {
  render () {
    return (
      <LogoContainer>
        <PistaLogo src={pistaLogo} className="pista-logo" alt="logo" />
      </LogoContainer>
    )
  }
}

export default Logo
