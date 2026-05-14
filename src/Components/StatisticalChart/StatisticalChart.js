import React from 'react'

import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react';


const StatisticalChart = () => {
  const option={
    color:['var(--orange)'],
    toolbox:{
      feature:{
        saveAsImage:{}
      }
    },
    tooltip:{
      trigger:"axis",
      axisPointer:{
        type:"cross"
      },
      backgroundColor:"rgb(0,0,0,0.59)",
      borderWidth:0,

    },
    grid:{
      left:"3%",
      right:"4%",
      bottom:"3%",
      containLabel:true,
      show:false,
    },
    xAxis:[
      {
      type:"category",
      boundaryGap:false,
      data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
      }
    ],
    yAxis:[
      {
        type:"value",
        splitLine:{
          show:false,
        }
      }
    ],
    series:[
      {
        type:"line",
        smooth:true,
        lineStyle:{
          color:new echarts.graphic.LinearGradient(0,0,0,1,[
            {
              offset:0,
              color:"rgb(255,191,0)"

            },
            {
              offset:1,
              color:"#F450d3",

            },

          ]),
          width:4,


          
        },
        areaStyle:{
          opacity:.5,
          color:new echarts.graphic.LinearGradient(0,0,0,0.8,[
            {
            offset:0,
            color:"#FE4C00",
            },
            {
              offset:1,
              color:"rgba(255,144,70,0.1)",
              },
          ]),
        },
        emphasis:{
          focus:"series",

        },
        labelLine: {
          show: false,
      },

        showSymbol:false,
        data:[2435,6565,2435,7675,3243],
        
      }
    ]
  }
  return (
    <ReactECharts
    option={option}/>

    
  )
}

export default StatisticalChart
