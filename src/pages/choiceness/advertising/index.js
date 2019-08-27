import React, { Component } from 'react'
import { AdvertisingWrapper } from "./styled"

export default class Advertising extends Component {
    render() {
        return (
            <AdvertisingWrapper >
                {/* advertising */}
                <div className="ptAppbar">
                    <div className="adbar">
                        <img className="logo" src="//h0.hucdn.com/images/201813/606a68c53691e850_64x64.png" alt="" />
                        <span className="benfit_tips">爆款好货5元抢！</span>
                        <span className="go_d1">立即前往</span>
                    </div>
                </div>
            </AdvertisingWrapper>
        )
    }
}
