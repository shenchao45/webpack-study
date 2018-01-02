//main.js
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ReactDOM from 'react-dom'
import PCIndex from './component/pc_index'
import MobileIndex from './component/mobile_index'
import '../css/pc.css'
import '../css/mobile.css'
import MediaQuery from 'react-responsive'
const App = () => (
    <BrowserRouter>
        <div>
            <MediaQuery query='(min-device-width: 1224px)'>
                <PCIndex />
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <MobileIndex />
            </MediaQuery>
        </div>
    </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))