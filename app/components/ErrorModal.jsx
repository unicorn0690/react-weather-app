import React, { Component } from 'react'

export default class ErrorModal extends Component {
    componentDidMount () {
        let modal = new Foundation.Reveal($('#error-modal'))
        modal.open()
    }

    render () {
        let {title, message} = this.props
        return (
            <div className="reveal" id="error-modal" data-reveal=''>
                <h4>{title}</h4>
                <p className="lead">{message}</p>

                <button className="button hollow text-center" data-close=''>Okay! Got it!</button>

                <button className="close-button" data-close aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

ErrorModal.defaultProps = {
    title: 'Error'
}
