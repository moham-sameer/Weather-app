import React,{useState} from 'react'
import './index.css'
 import axios from 'axios'

const App = () => {
     const [data,setData] = useState({}) 
       const [location,setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0ed5e7575845215c564b1f16016f6be5`
    const searchLocation = (e) =>{
          if(e.key === "Enter"){
               axios.get(url).then((response)=>{
                     setData(response.data)
               console.log(response.data)
           }).catch((error)=>{
            console.log(error)
           })
           setLocation("")
        }
    }
    // my Key = 0ed5e7575845215c564b1f16016f6be5
    return (
      <div className='app'>
    <div className='container'>
    <input type='text' onKeyPress={searchLocation} value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter Location" />
    <div className='top'>
      <div className='location'> {data.name} </div>
      <div className='temp'>{ data.main? <h1>{data.main.temp.toFixed()}°C</h1>:null}</div>
      <div className='description'> {data.weather?<p>{data.weather[0].main}</p>:null}</div>
    </div>
    {data.name !== undefined &&
      <div className='bottom'>

<div className='feels'>{data.main?<p className='bold'> {data.main.feels_like.toFixed()}°C </p>:null} <p>Feels Like</p></div>
<div className='humidity'>{data.main?<p className='bold'>{data.main.humidity}% </p>:null} <p>Humidity</p></div>
<div className='wind'>{data.wind? <p className='bold'>{data.wind.speed.toFixed()} MPH </p>:null} <p>Wind Speed</p></div>
</div>


    }
  
    </div>
    </div>
  )
}

export default App
