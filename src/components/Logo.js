import React from 'react'
import pistaLogo from './../assets/pista-logo.png'
import styled from 'styled-components'


const LogoContainer = styled.div`
  align-self: center;
`

const PistaLogo = styled.img`
  width: 350px;
  height: 350px;

@media (max-width: 420px) {
    width: 150px;
    height: 150px;
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
