import { useState } from "react";

function WeatherMain({ weather, geoData }) {
        const [searchInput, setSearchInput]=useState("")
    function getUpcomingDates() {
        const dates = [];
        const today = new Date();
    
        for (let i = 0; i < 8; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(nextDate.toLocaleDateString());
        }
    
        return dates;
    }
    
    const upcomingDates = getUpcomingDates();
    const search=()=>{}

    return (
        <div className="weather-info ">
            <div className="flex justify-between items-center">
                <div className="p-3">
                <h2 className="text-3xl font-medium">My-Weather-App</h2>
                <p>made by Ayushman Sharma</p>
                </div>
                 <div className="p-3">
                <input  className="border-2  rounded rounded-e-none border-gray-400 border-r-0" type="text" 
                        placeholder="location"
                        value={searchInput}
                        onChange={(e)=>setSearchInput(e.target.value)}/>
                <button className="border-2 rounded rounded-s-none border-gray-400 pr-5 pl-5" onClick={()=>{search()}}>search</button>
                </div>
            </div>
            <div className="weather-info">
                <h2>{geoData.name},{geoData.state}</h2>
                <div className="weather-current">
                    <div className="flex justify-between">
                        <div>
                    <p>Temperature: <span className="text-2xl font-medium text-black">{weather.daily[0].temp.max}°C/</span><span className="text-m font-medium text-black">{weather.daily[0].temp.min}°C</span></p>
                    <p>Condition: {weather.daily[0].summary}</p>
                    <p>Feels Like: {weather.current.feels_like}°C</p>
                    </div>
                    <div className="flex justify-center items-center">
                        
                    <span className="text-4xl font-medium">{weather.current.temp}°C</span>
                    <img className="min-h-42"  alt="" src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}/>
                    
                    </div>
                    </div>
                </div>
                <div className="weather-details pt-0">
                    <p>Humidity: {weather.current.humidity}%</p>
                    <p>Wind Speed: {weather.current.wind_speed} knots</p>
                </div>
               
               
                <h2>Week Ahead</h2>
                <div className="weekly-container">

                    {weather.daily.map((day, key) => (
                         <div className="weekly-cards" key={key}>
                            <div className="flex justify-center "><img alt="" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/></div>
                            <span className="text-4xl font-medium ">{day.temp.max}°C/</span><span className="font-medium text-gray-600">{day.temp.min}°C</span>
                            <div className="pt-2">{upcomingDates[key]}</div> 
                            <div>{day.weather[0].description}</div>
                            </div>
                    ))}

                </div>
            </div>

        </div>
    )

}
export default WeatherMain