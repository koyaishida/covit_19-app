  import React from 'react'
  import {FormControl, NativeSelect, makeStyles} from "@material-ui/core"
  import {fetchData } from "../covidSlice"
  import {useDispatch} from "react-redux"
  
  const useStyles = makeStyles({
    container : {
      width: 300,
      padding: 30,
    }
  })


  const countries = [
    "japan",
    "china",
    "us",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
  ]

  const SwitchCountry = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
      <FormControl className={classes.container}>
        <NativeSelect 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>dispatch(fetchData(e.target.value))}
        >
          {countries.map((country,index)=>(
            <option value={country}>{country}</option>
          ))}
        </NativeSelect>
      </FormControl>
    )
  }
  
  export default SwitchCountry
  