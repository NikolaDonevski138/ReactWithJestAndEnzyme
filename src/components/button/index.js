import React from 'react'
import PropTypes from 'prop-types'

const SharedButton = (props) => {
    const { buttonText } = props

    const submitEvent = () => {
        if (props.emitEvent) {
            props.emitEvent
        }
    }

    return (
        <button data-test="buttonComponent" onClick={() => submitEvent()}>
            {buttonText}
        </button>
    )
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default SharedButton