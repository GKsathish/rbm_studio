import React from 'react'
import {Bar} from  'react-chartjs-2';
import {Chart as ChartJs,LinearScale,CategoryScale,BarElement,Tooltip,Legend} from 'chart.js';

ChartJs.register(
    LinearScale,CategoryScale,BarElement,Tooltip,Legend
    )
const Delchart = () => {
    
    const data={
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Aug','Dec'],

      datasets:[{
       label:'2020',
       data:[230,340,560,670,890,230,560,890,120,125,678,456],
       backgroundColor:'pink'
      },{
        label:'2021',
        data:[330,640,560,870,290,730,960,790,600,125,678,956],
        backgroundColor:'blue'
      }
      ]
    }
    
  return (
    <div>
      <Bar data={data}></Bar>
    </div>
  )
}

export default Delchart
