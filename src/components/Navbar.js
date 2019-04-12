import React from 'react'
import styled from 'styled-components'
import navOptions from './../data/nav-data'
import NavigationButton from './NavigationButton'

const NavBar = styled.div`
  align-self: center;
  display: flex;
  flex-width: 100%;
  align-items: center;
`

class Navbar extends React.Component {
    render () {
    return (
      <NavBar>
        {
          navOptions.map(opt => {
          return <NavigationButton key={opt.key} options={opt} />
          })
        }
      </NavBar>
    )
  }
}

export default Navbar
