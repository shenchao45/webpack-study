import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImageBlock from './pc_news_image_block'
import {Row, Col,BackTop} from 'antd'
import CommonComments from './common_comments'

export default class PCNewsDetails extends React.Component {
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
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={13} className={"container"}>
                        <div className={"articleContainer"} dangerouslySetInnerHTML={this.createMark()}></div>
                        <CommonComments uniquekey={this.props.match.params.uniquekey}/>
                    </Col>
                    <Col span={7}>
                        <PCNewsImageBlock count={40} type={"top"} cardTitle={"相关新闻"} width={"100%"} imageWidth={"150px"}></PCNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop></BackTop>
            </div>
        )
    }
}