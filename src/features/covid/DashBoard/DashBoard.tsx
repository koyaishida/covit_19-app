import React,{useEffect} from 'react'
import LineChart from "../LineChart/LineChart"
import PieChart from "../PieChart/PieChart"
import SwitchCountry from "../SwitchCountry/SwitchCountry"
import Cards from "../Cards/Cards"
import {useSelector,useDispatch} from "react-redux"
import {selectCountry,fetchData, } from "../covidSlice"
import {Grid} from "@material-ui/core"





const DashBoard = () => {
   
   const country = useSelector(selectCountry)
   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData(country))
  }, [dispatch])

  return (
   <>
    <SwitchCountry />
    <Cards />
    <Grid container>
      <Grid item xs={12} md={7}>
        <LineChart/>
      </Grid>
      <Grid item xs={12} md={5}>
        <PieChart />
      </Grid>
    </Grid>
   </>
  )
}

export default DashBoard
