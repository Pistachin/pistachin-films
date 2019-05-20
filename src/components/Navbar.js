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

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        flex-width: 50%;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px)  and (orientation: landscape) {
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
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
