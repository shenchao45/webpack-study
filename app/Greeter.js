// Greeter.js
import React from 'react'
import config from './config'
import styles from './Greeter.css';//导入

export default class Greeter extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}