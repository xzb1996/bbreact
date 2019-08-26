import React, { Component } from 'react'
import { routeConfig } from "@router"
import { Switch, Redirect, Route } from "react-router-dom"
import BaseRoute from "@common/baseRoute";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/choiceness" exact />
        {
          routeConfig.map((item, index) => (
            <BaseRoute key={index} {...item} />
      ))
    }
      </Switch>
    )
  }
}

