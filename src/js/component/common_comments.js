import React from 'react'
import {notification,Form, Row, Card, Col, Input, Button} from 'antd'

const FormItem = Form.Item
const {TextArea} = Input

class CommonComments extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + "9809" + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
            this.componentDidMount();
        })

    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        });
    }

    addUserCollection() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+"9908"+"&uniquekey="+this.props.uniquekey,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                //收藏成功以后进行一下全局的提醒
                notification['success']({message:'ReactNews提醒',description:'收藏此文章成功'})
            });
    }

    render() {
        let {getFieldProps} = this.props.form;
        let {comments} = this.state
        const commentList = comments.length ? comments.map((comment, index) => (
            <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                <p>{comment.Comments}</p>
            </Card>
        )) : "没有加载到任何数据"
        return (
            <div className={"comment"}>
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label={'您的评论'}>
                                <TextArea placeholder={'随便写'} {...getFieldProps('remark', {initialValue: ''})}  />
                            </FormItem>
                            <Button type={'priary'} htmlType={"submit"}>提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type={"primary"} htmlType={"button"} onClick={this.addUserCollection.bind(this)}>收藏</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonComments = Form.create({})(CommonComments)
