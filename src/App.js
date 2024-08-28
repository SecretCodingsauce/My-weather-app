
import { useEffect, useState } from 'react';
import './App.css';

import axios from "axios"
import WeatherMain from './Components/WeatherMain';





function App() {

  const [submitted,setSubmitted]=useState(false)
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [geoData,setGeoData]=useState(null)

  const [weather, setWeather] = useState(null)

  const submit=()=>{
    setSubmitted(true);
  }

  const apiKey = "86ae150a97cd0f5d3e00a08a7f65b721"
const geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`

  useEffect(() => {
    if(submitted){
    axios.get(geoApi)
      .then((response) => {
        setGeoData(response.data[0])
      return axios.get(`https://api.openweathermap.org/data/3.0/onecall?units=metric&lat=${response.data[0].lat}&lon=${response.data[0].lon}&exclude=hourly,minutely&appid=${apiKey}`);
      })
      .then((response) => {
        setWeather(response.data);
      
      })
      .catch((error) => {
        console.error('Axios error:', error);
      })
      setSubmitted(false)
  }}, [submitted,geoApi]);


  if(!weather){
  return (
    <div className="App">      
      <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Type City Name" 
            />
      <input 
                type="text" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                placeholder="Type Country Name" 
            />

            <button onClick={submit}>submit</button>
            
    </div>
   
  );
}
else{
  return(
    <div>
     <WeatherMain weather={weather} geoData={geoData}/>
    </div>
  )
}}

export default App;
