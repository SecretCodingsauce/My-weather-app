
import { useEffect, useState } from 'react';
import './App.css';

import axios from "axios"
import WeatherMain from './Components/WeatherMain';





function App() {


  const [searchInput,setSearchInput]=useState("")
 
  const [submitted,setSubmitted]=useState(false)
  const [city,setCity]=useState("");
  
  const [geoData,setGeoData]=useState(null);
  
  
 const search=(input)=>{
  setCity(input);
  setSubmitted(true);
 }


  const [weather, setWeather] = useState(null)

  const submit=()=>{
    setSubmitted(true);
  }

  const apiKey = "86ae150a97cd0f5d3e00a08a7f65b721"
const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`

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
    <div className=" flex-row justify-center items-center weather-info">    
    <h2>My-Weather-App</h2><a  href='https://ayushmansharma-profile.vercel.app/' target='_blank'>made by <span className='text-blue-800 underline'>Ayushman Sharma</span></a>  
     <div className='mt-14 flex-row h-4/5 w-full bg-slate-400 rounded'> 
     <div className='flex-row justify-center items-center p-40'>
     <h2 className='text-center mb-8 text-slate-100'>Search for weather</h2>
     <div className='flex justify-center items-center'>
     <input className='border-2 rounded w-1/3 h-10'
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Type City Name" 
            />
     

            <button className='border-2 ml-3 bg-white border-gray-400 h-10 ps-3 pe-3 rounded' onClick={submit}>check weather</button>
            </div>
            </div>
            </div>
    </div>
   
  );
}
else {
  return(
    <div className='weather-info'>
      <div className="flex justify-between items-center">
                <div className="p-3">
                <h2 className="text-3xl font-medium">My-Weather-App</h2>
                <a  href='https://ayushmansharma-profile.vercel.app/' target='_blank'>made by <span className='text-blue-800 underline'>Ayushman Sharma</span></a>
                </div>
                 <div className="p-3">
                <input  className="border-2  rounded rounded-e-none border-gray-400 border-r-0" type="text" 
                        placeholder="location"
                        value={searchInput}
                        onChange={(e)=>setSearchInput(e.target.value)}/>
                <button className="border-2 rounded rounded-s-none border-gray-400 pr-5 pl-5" onClick={()=>{search(searchInput)}}>search</button>
                </div>
            </div>
     <WeatherMain weather={weather} geoData={geoData}  />
    
    </div>
  )
}}

export default App;
