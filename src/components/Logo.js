import React from 'react'
import pistaLogo from './../assets/pista-logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  align-self: center;
`

class Logo extends React.Component {
  render () {
    return (
      <LogoContainer>
        <img src={pistaLogo} className="pista-logo" alt="logo" />
      </LogoContainer>
    )
  }
}

export default Logo
