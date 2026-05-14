import React from 'react'
import css from './Statistics.module.css'
import {BsArrowUpShort} from 'react-icons/bs'
import { groupNumber } from '../Data/data'
import StatisticalChart from '../StatisticalChart/StatisticalChart'


const Statistics = () => {
  return (
   <div className={`${css.container} theme-container`}>
    <span className={css.title}>Overview pdf statistics</span>
    <div className={`${css.cards} grey-container`}>
        <div>
            <div className={css.arrowIcon}>
                <BsArrowUpShort/>
            </div>
            <div className={css.card}>
                <span>Top item this month</span>
                <span>Office comps</span>
            </div>
        </div>
        <div className={css.card}>
            <span>Items</span><span>$ {groupNumber(74.000003)}</span>
        </div>
        <div className={css.card}>
            <span>
                Profit
            </span>
            <span>
             profit
            </span>
            <span>${groupNumber(370000)}</span>
        </div>
        <div className={css.card}>
            <span>Daily Average</span>
            <span>$ {groupNumber(99698)}</span>
        </div>
    </div>
<div>
   <StatisticalChart/>
   </div>

   </div>
  )
}

export default Statistics
