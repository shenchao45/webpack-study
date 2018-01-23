import React from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import {Row, Col, BackTop} from 'antd'
import CommonComments from './common_comments'

export default class MobileNewsDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            newsItem: ''
        }
    }

    componentWillMount() {
        let myFetch = {method: "GET"}
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetch).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        })
    }

    createMark() {
        return {__html: this.state.newsItem.pagecontent}
    }

    render() {
        return (
            <div id={"mobileDetailsContainer"}>
                <MobileHeader></MobileHeader>
                <div className={"ucmobileList"}>
                    <Row>
                        <Col span={24} className={"container"}>
                            <div className={"articleContainer"} dangerouslySetInnerHTML={this.createMark()}></div>
                            <hr/>
                            <CommonComments uniquekey={this.props.match.params.uniquekey}/>
                        </Col>
                    </Row>
                    <MobileFooter></MobileFooter>
                    <BackTop></BackTop>
                </div>
            </div>
        )
    }
}