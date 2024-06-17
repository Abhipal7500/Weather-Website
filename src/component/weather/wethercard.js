import React, { useEffect } from 'react'

const  Wethercard = ({tempInfo}) => {
    const[weatherState, setWeatherState] = React.useState("");
    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset, sunrise, visibility
    } = tempInfo;
  useEffect(() => {
     if (weathermood){
        switch(weathermood){
            case "Clouds" :
                setWeatherState("wi-day-cloudy");
                break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                    case "Mist":
                        setWeatherState("wi-dust");
                        break;      
               default:
                setWeatherState("wi-day-sunny");
                break;

        }
        if(weathermood === 'Clouds')
        {
            var root = document.querySelector(':root');
            var rootStyles = getComputedStyle(root);
            var red = rootStyles.getPropertyValue('background-image');
            console.log('background:', red);
            root.style.setProperty('background-image', 'url("images2/hey.jpeg")')
        }
     }
  }, [weathermood]);
    let sec = sunset;
    let date = new Date (sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    let sec2 = sunrise;
    let date2 = new Date (sec2*1000);
    let timeStr2 = `${date2.getHours()}:${date2.getMinutes()}`
  return (
    <>
    <article className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
        <div className="temperature">
            <span>{temp}&deg;</span>
            
        </div>
       <div className="description">
        <div className="weatherCondition">{weathermood}</div>
        <div className="place">{name}, {country}</div>
       </div>
        </div>
        <div className="date">{ new Date().toLocaleString()}</div>
        <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr} <br />
                        Sunset
                    </p>
                </div>
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {timeStr2} <br />
                        Sunrise
                    </p>
                </div>
                
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {humidity} <br />
                        Humidity
                    </p>
                </div>
                </div>
                
                <div className="weather-extra-info">
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure}<br />
                        Pressure
                    </p>
                    
                </div>
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {visibility}<br />
                        Visibility
                    </p>
                    
                </div>
                <div className="two-sided-section">
                    <p>
                    <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className="extra-info-leftside">
                       {speed} <br />
                       windSpeed
                    </p>
                 </div>
                </div>
            
        </div>
    </article>
    </>
  )
}

export default  Wethercard