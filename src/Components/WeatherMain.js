function WeatherMain({weather,geoData}) {

    return (
        <div>
           <div className="weather-info">
                    <h2>{geoData.name},{geoData.state}</h2>
                    <div className="weather-current">
                        <p>Temperature: {weather.current.temp}°C</p>
                        <p>Condition: {weather.daily[0].summary}</p>
                    </div>
                    <div className="weather-details">
                        <p>Humidity: {weather.current.humidity}%</p>
                        <p>Wind Speed: {weather.current.wind_speed} knots</p>
                    </div>
                    <h2>Week Ahead</h2>
                <div className="weekly-container">
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            <div className="weekly-cards">lol</div>   
            </div>     
                </div>

        </div>
    )
    
}
export default WeatherMain