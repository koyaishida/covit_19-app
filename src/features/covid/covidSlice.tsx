import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios  from "axios";
import {RootState} from "../../app/store";
import data from "../../data.json"

type dailyData = typeof data 

const ApiURL = "https://api.covid19api.com/total/country/"

export type CovidState = {
  dailyData:dailyData
  selectedCountry: string
}

const initialState:CovidState = 
  {
    dailyData:[{
    "Country": "Japan",
    "CountryCode": "",
    "Province": "",
    "City": "",
    "CityCode": "",
    "Lat": "0",
    "Lon": "0",
    "Confirmed": 2,
    "Deaths": 0,
    "Recovered": 0,
    "Active": 2,
    "Date": "2020-01-22T00:00:00Z"
    }],
    selectedCountry:"japan"
  }


export const fetchData = createAsyncThunk(
  "get_data",
  async(selectedCountry:string) => {

    let dynamicUri = ApiURL
    if(selectedCountry){
      dynamicUri = `${ApiURL}${selectedCountry}`
    };
    const { data } =  await axios.get<dailyData>(dynamicUri)
    
    return {data:data, selectedCountry: selectedCountry}
  }
)

export const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {},
  extraReducers:  (builder) => {
    builder.addCase(fetchData.fulfilled, (state,action) => {
      return {
        ...state,
        dailyData: action.payload.data,
        selectedCountry: action.payload.selectedCountry
      };
    })
  }
});

export const selectData = (state:RootState) =>state.covid.dailyData
export const selectCountry = (state:RootState) =>state.covid.selectedCountry

export default covidSlice.reducer

