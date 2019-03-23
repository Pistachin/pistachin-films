import React from 'react'
import pistaLogo from './../assets/pista-logo.png'

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img src={pistaLogo} className="pista-logo" alt="logo" />
      </div>
    )
  }
}

export default Logo
