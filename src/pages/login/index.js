import React, { Component } from 'react'
import { LoginWrapper } from "./styled"
export default class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <section className="login">
                    <div className="input">
                        <input className="name_input" placeholder="请输入手机号码/邮箱" type="text"/>
                        <i className="name_clear iconfont">&#xe501;</i>
                        <input className="pw_input" placeholder="请输入6-16位密码" type="password"/>
                        <i className="pw_clear iconfont">&#xe630;</i>
                    </div>
                    <div className="check">
                        <input type="text" placeholder="请输入4位验证码"/>
                        <span>3425</span>
                    </div>
                    <button className="login_btn">
                        立即登录
                    </button>

                    <div className="remeber">
                        <span className="btn_signUp">新人注册</span>
                        <span className="btn_phoneLogin">手机号快速登录</span>
                        <span className="btn_forgetPw">忘记密码</span>
                    </div>

                </section>
            </LoginWrapper>
        )
    }
}
