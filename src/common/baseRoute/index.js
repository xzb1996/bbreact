import React, { Component } from 'react'
import Layout from "@layout"
import { Route } from "react-router-dom"
import auth from "@common/auth"

class BaseRoute extends Component {
    render() {
        // console.log(this,"baseroute");
        let { component, path, ...rest } = this.props;
        return (
            <Layout {...rest}>
                <Route path={path} component={component} />
            </Layout>
        )
    }
}

// auth是一个函数，在auth函数值对BaseRoute进行封装
export default auth(BaseRoute);