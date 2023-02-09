import React from 'react'
import {Line} from  'react-chartjs-2';
import {Chart as ChartJs,LinearScale,CategoryScale,PointElement,LineElement,Tooltip,Legend} from 'chart.js';

ChartJs.register(
    LinearScale,CategoryScale,PointElement,LineElement,Tooltip,Legend
    )
const Readchart = () => {
    
    const data1={
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Aug','Dec'],

      datasets:[{
       label:'2020',
       data:[230,340,460,570,690,730,860,990,1020,1225,1678,1456],
       backgroundColor:'pink'
      },{
        label:'2021',
        data:[1330,1640,1560,1870,1290,1730,1960,1790,1600,1125,1678,1956],
        backgroundColor:'blue'
      }
      ]
    }
    
  return (
    <div>
      <Line data={data1} ></Line>
    </div>
  )
}

export default Readchart
