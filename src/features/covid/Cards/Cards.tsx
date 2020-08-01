import React from 'react'
import {useSelector} from "react-redux"
import {selectData} from "../covidSlice"
import {Card,Typography ,CardContent ,Grid} from "@material-ui/core"

const Cards = () => {

  const dailyData = useSelector(selectData)

  const totalConfirmed = dailyData.reduce(function(total,value){
    return total + value.Confirmed
  },0)
  const totalDeath = dailyData.reduce(function(total,value){
    return total + value.Deaths
  },0)
  const totalRecovered = dailyData.reduce(function(total,value){
    return total + value.Recovered
  },0)

  return (　
  <Grid container spacing={4}>

    <Grid item　xs={12} sm={4} >
      <Card>
        <CardContent>
          <Typography  color="textSecondary">
            感染者数
          </Typography>
          <Typography  color="textSecondary">
              {totalConfirmed}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item　xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography  color="textSecondary">
            回復者数
          </Typography>
          <Typography  color="textSecondary">
              {totalRecovered}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid  item　xs={12} sm={4}>
      <Card>
        <CardContent>
          <Typography  color="textSecondary">
            死者数
          </Typography>
          <Typography  color="textSecondary">
              {totalDeath}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

  </Grid>
      
  )
}

export default Cards
