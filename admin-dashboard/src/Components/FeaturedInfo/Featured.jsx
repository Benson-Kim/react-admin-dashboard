import { ArrowDownward, ArrowUpward, } from '@mui/icons-material'
import React from 'react'
import './featured.css'

function Featured() {
    return (
        <div className='featured'>
            <div className="featured-item">
                <span className="featured-title">Revenue</span>
                <div className="featured-container">
                    <span className="featured-money">$25252</span>
                    <span className="featured-money-rate"> -11.4%
                        <ArrowDownward className='featured-icon negative' />
                    </span>
                </div>
                <div className="featured-sub">Compared to last month</div>
            </div>
            <div className="featured-item">
                <span className="featured-title">Sales</span>
                <div className="featured-container">
                    <span className="featured-money">$25252</span>
                    <span className="featured-money-rate"> -1.4%
                        <ArrowDownward className='featured-icon negative' />
                    </span>
                </div>
                <div className="featured-sub">Compared to last month</div>
            </div>
            <div className="featured-item">
                <span className="featured-title">Cost</span>
                <div className="featured-container">
                    <span className="featured-money">$25252</span>
                    <span className="featured-money-rate"> -11.4%
                        <ArrowUpward className='featured-icon' />
                    </span>
                </div>
                <div className="featured-sub">Compared to last month</div>
            </div>
        </div>
    )
}

export default Featured