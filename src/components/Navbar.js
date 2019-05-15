import React from 'react'
import styled from 'styled-components'
import navOptions from './../data/nav-data'
import NavigationButton from './NavigationButton'

const NavBar = styled.div`
  align-self: center;
  display: flex;
  flex-width: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

const Navbar = () => (
    <NavBar>
      {
        navOptions.map(opt => {
          return <NavigationButton key={opt.key} options={opt} />
        })
      }
    </NavBar>
)

export default Navbar
