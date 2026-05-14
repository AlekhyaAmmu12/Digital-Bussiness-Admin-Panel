import React from 'react'
import css from './Orders.module.css'
import { groupNumber,ordersData } from '../Data/data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'



const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
            <img src="./logo(1).png" alt="" />
            <span>
                Orders today
            </span>
        </div>
        <div className={`${css.stat}`}>
            <span>Amount</span>
            <span>{groupNumber(6877)}</span>

        </div>
        <div className={css.orders}>
            {
                ordersData.map((order,index)=>(
                    <div key={index} className={css.order}>
                        <div>
                        <span>{order.name}</span>

                        <span>{order.change}</span>
                    </div>
                    <div>
                        <span>{order.type}</span>
                        <span>{order.items}</span>
                    </div>
                    </div>
                 
                ))
            }
        </div>
        <div className={css.ordersCharts}>
            <span>
                Split by orders
            </span>
            <OrdersPieChart/>
        </div>
    </div>


  )
}

export default Orders
