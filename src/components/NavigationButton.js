import React from 'react'
import styled from 'styled-components'

const NavButton = styled.div`
  display: flex;
`

class NavigationButton extends React.Component {
  render () {
    const values = this.props.options
    const button = values.url.includes('#') ?
      <p className='nav-button internal'>{values.name}</p> :
      <a className="nav-button external" rel="noopener noreferrer" href={values.url} target='_blank'>{values.name}</a>
    return(
      <NavButton id={values.key}>
        {button}
      </NavButton>
    )
  }
}

export default NavigationButton
