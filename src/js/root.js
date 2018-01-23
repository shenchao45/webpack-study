//main.js
import React from 'react'
import {BrowserRouter, Route, hashHistory, HashRouter, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ReactDOM from 'react-dom'
import PCIndex from './component/pc_index'
import MobileIndex from './component/mobile_index'
import '../css/pc.css'
import '../css/mobile.css'
import MediaQuery from 'react-responsive'
import PCNewsDetails from './component/pc_detail'
import MobileNewsDetails from "./component/mobile_news_detail";

const App = () => (
    <HashRouter history={hashHistory}>
        <div>
            <MediaQuery query='(min-device-width: 1224px)'>
                <Route exact path={"/"} component={PCIndex}></Route>
                <Route exact path={"/details/:uniquekey"} component={PCNewsDetails}></Route>
            </MediaQuery>
            <MediaQuery query='(max-device-width: 1224px)'>
                <Route exact path={"/"} component={MobileIndex}></Route>
                <Route exact path={"/details/:uniquekey"} component={MobileNewsDetails}></Route>
            </MediaQuery>
        </div>
    </HashRouter>

)
ReactDOM.render(<App/>, document.getElementById('root'))
