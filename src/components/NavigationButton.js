import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { showContent } from '../redux/actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
        showContent: status => dispatch(showContent(status))
    }
}

const NavButton = styled.div`
display: flex;
`

class Button extends React.Component {
    constructor() {
        super()

        this.state = {
            visibleContent: false,
            contentType: ''
        }
    }

    setContent = (e) => {
        e.preventDefault()
        const { options } = this.props
        const contentType = options.name.toLowerCase()
        this.props.showContent({ contentType })
        // this.setState(state => ( { contentType: options.category } ))
    }

    render () {
        const { options } = this.props
        return(
            <NavButton id={options.key}>
            {
                options.url.includes('#') ? (
                    <p
                    className='nav-button internal'
                    onClick={this.setContent}
                    >
                    {options.name}
                    </p>
                ) : (
                    <a
                    className="nav-button external"
                    rel="noopener noreferrer"
                    href={options.url}
                    target='_blank'
                    >
                    {options.name}
                    </a>
                )
            }
            </NavButton>
        )
    }
}

const NavigationButton = connect(null, mapDispatchToProps)(Button)

export default NavigationButton
