//main.js
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ReactDOM from 'react-dom'
import Greeter from './Greeter'
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            Our React Router 4 Asdafdsappd
        </header>
        <main>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={Greeter} />
        </main>
    </div>
)
const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))