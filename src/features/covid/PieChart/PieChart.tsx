import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {selectData } from "../covidSlice"
import {useSelector} from "react-redux"
import {makeStyles,Typography} from "@material-ui/core"


const useStyles = makeStyles({
  container : {
    display: "flex",
    flexDirection: "column",
    alignItems : "center",
    justifyContent: "center"

  }
})


const PieChart = () => {
  const dailyData = useSelector(selectData)
  const classes = useStyles()

  const totalConfirmed = dailyData.reduce(function(total,value){
    return total + value.Confirmed
  },0)
  const totalDeath = dailyData.reduce(function(total,value){
    return total + value.Deaths
  },0)
  const totalRecovered = dailyData.reduce(function(total,value){
    return total + value.Recovered
  },0)

  let motality = 100 * totalDeath / totalConfirmed

  const pieChart = dailyData[0] && (
    <Doughnut 
      data = {{
        labels: ["感染者数","死者数","回復者数"],
        datasets:[
          {
            data: [totalConfirmed,totalDeath,totalRecovered],
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "#008080",
              "rgba(255, 0, 0, 0.5)"
            ],
            hoverBackgroundColor: ["#36A2EB","#3cb371","#FF6384"],
            borderColor: ["transparent","transparent","transparent"]
          }
        ]
      }}  
      options= {{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15
          }
        }
      }}
    />
  )

  return (
  <div className={classes.container}>
      <Typography align="center" color="secondary" gutterBottom>
        致死率 {motality.toFixed(2)} [%]
      </Typography>
    {pieChart}
  </div>
  )
}

export default PieChart
