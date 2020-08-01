import React from 'react'
import {Line} from "react-chartjs-2"
import {useSelector} from "react-redux"
import {selectData} from "../covidSlice"





const LineChart:React.FC = () => {

  const dailyData = useSelector(selectData)

  const lineChart = dailyData[0] && (
    <Line 
    data = {{
      labels: dailyData.map((data)=>{
        return data.Date.split("T")[0]
      }),
      datasets: [
        {
          data: dailyData.map((data)=>data.Confirmed),
          label : "Infected",
          borderColor: "#3333ff",
          fill: true
        },
        {
          data: dailyData.map((data)=>data.Deaths),
          label : "Deaths",
          borderColor: "#ff3370",
          fill: true
        },
        {
          data: dailyData.map((data)=>data.Recovered),
          label : "Deaths",
          borderColor: "#ff3370",
          fill: true
        }
      ]
    }}
    />
  )
  
  return (
    <div>
      {lineChart}
    </div>
  )
}

export default LineChart
