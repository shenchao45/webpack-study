// Greeter.js
import React from 'react'
import config from './config'

export default class Greeter extends React.Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}