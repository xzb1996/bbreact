import React, { Component, Fragment } from 'react'
import { choiceness_api } from "@api/choiceness"
import  Advertising  from "./advertising/index"
import  Metro  from "./metro/index"
import  FilterBar  from "./filterbar/index"
import  Wraper  from "./wraper/index"

export default class ChoiceNess extends Component {
    render() {
        return (
            <Fragment >         
                <Advertising />            
                <Metro />     
                <FilterBar />
                <Wraper />               
            </Fragment>
        )
    }
    async componentDidMount() {
        let data = await choiceness_api();
        console.log(data);
    }
}
