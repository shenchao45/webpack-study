import React from 'react'
import logo from '../../images/logo.png'
import {Row, Col, Menu, Icon, Tabs, message, Modal, Input, Form, Button, Checkbox} from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
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

    handleSubmit(e) {
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
        let {getFieldProps} = this.props.form
        const userShow = this.state.hasLogined ? <Link to={'/'} target={'_blank'}><Icon type={'inbox'}/></Link> :
            <Icon type={'setting'} onClick={()=>this.setModalVisible(true)}/>
        return (
            <div id={'mobileheader'}>
                <header>
                    <img src={logo} alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
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
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader)