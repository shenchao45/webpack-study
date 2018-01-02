import React from 'react'
import logo from '../../images/logo.png'
import {Row, Col, Menu, Icon, Tabs, message, Modal, Input, Form, Button, Checkbox} from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }

    setModalVisible(value) {
        this.setState({
            modalVisible: value
        })
    }

    handleClick(e) {
        if (e.key == 'register') {
            this.setState({current: 'register'})
            this.setModalVisible(true)
        } else {
            this.setState({current: e.key})
        }
    }
    handleSubmit(e){
        //页面开始向API进行提交数据
        e.preventDefault()
        var myFetchOptions = {
            method: 'GET'
        }
        var formData = this.props.form.getFieldsValue()
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions).
        then(response=>response.json()).then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});

        });
        message.success("请求成功！");
        this.setModalVisible(false);
    }

    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key={'logout'} className={'register'}>
                <Button type={'primary'} htmlType={"button"}>{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target={'_blank'}>
                    <Button type={'dashed'} htmlType={'button'}>个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type={'dashed'} htmlType={'button'}>退出</Button>
            </Menu.Item> : <Menu.Item key={'register'} className={'register'}>
                <Icon type={'appstore'}/>注册/登录
            </Menu.Item>
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className={'logo'}>
                            <img src={logo} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)}
                              selectedKeys={[this.state.current]}>
                            <Menu.Item key={'top'}>
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key={'shehui'}>
                                <Icon type="setting"/>社会
                            </Menu.Item>
                            <Menu.Item key={'guonei'}>
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key={'guoji'}>
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key={'yule'}>
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key={'tiyu'}>
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key={'keji'}>
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key={'shishang'}>
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title={'用户中心'} wrapClassName="vertical-center-modal"
                               visible={this.state.modalVisible}
                               onOk={() => this.setModalVisible(false)}
                               onCancel={() => this.setModalVisible(false)} okText={'关闭'}>
                            <Tabs type={'card'}>
                                <TabPane tab={'注册'} key={"2"}>
                                    <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label={'账户'}>
                                            <Input placeholder={'请输入您的账号'} {...getFieldProps('r_userName')}/>
                                        </FormItem>
                                        <FormItem label={'密码'}>
                                            <Input type={'password'}
                                                   placeholder={'请输入您的密码'} {...getFieldProps('r_userPassword')}/>
                                        </FormItem>
                                        <FormItem label={'确认密码'}>
                                            <Input type={'password'}
                                                   placeholder={'请再次输入您的密码'} {...getFieldProps('r_confirmPassword')}/>
                                        </FormItem>
                                        <Button type={'primary'} htmlType={'submit'}>注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>


                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader)