import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { showContent } from '../redux/actions/index'

const mapDispatchToProps = dispatch => {
    return {
        showContent: status => dispatch(showContent(status))
    }
}

const mapStateToProps = state => {
    return {
        visibleContent: state.visibleContent,
        contentType: state.contentType
    }
}

const NavButton = styled.div`
display: flex;
`

class Button extends React.Component {
    constructor() {
        super()

    }

    setContent = (e) => {
        if (e.target.classList.value.includes('internal')) {
            e.preventDefault()
        }
        const { options } = this.props
        let customContent = {
            visibleContent: !this.props.visibleContent,
            contentType: options.name.toLowerCase()
        }
        this.switchContent(customContent)
    }

    switchContent = (status) => {
        if (status.contentType !== this.props.contentType && this.props.contentType.length > 1) {
            status.visibleContent = true
        }
        this.props.showContent(status)
    }

    render () {
        const { options } = this.props
        return(
            <NavButton id={options.key} onClick={this.setContent}>
            {
                options.url.includes('#') ? (
                    <p
                    className='nav-button internal'
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
                    {
                        options.name
                    }
                    </a>
                )
            }
            </NavButton>
        )
    }
}

const NavigationButton = connect(mapStateToProps, mapDispatchToProps)(Button)

export default NavigationButton
