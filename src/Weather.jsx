import React, { useEffect, useState } from 'react'
import css from "./Weather.css";
import "./App.css";
import Typewriter from "typewriter-effect";


const Weather = () => {

    const [search, setSearch] = useState("Sanawad");
    const [city, setcity] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const link = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d84e4f9ae4003490a05c0b33ce728290`
            const response = await fetch(link);
            const resjson = await response.json();
            setcity(resjson.main);
        }
        fetchApi();
    }, [search])

    let cityLink = `https://www.google.com/search?q=${search}city&oq=${search}city&aqs=chrome.0.69i59j46i10i512l2j0i10i512l7.3488j1j4&sourceid=chrome&ie=UTF-8`

    return (
        <>
            <div className="weather">
                <div className="weather_typewriter">
                    <h3>Search Weather of your City</h3>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            strings: [
                                "Indore..",
                                "Mumbai..",
                                "Moscow..",
                                "London..",
                                "Berlin..",
                                "Sanawad.."
                            ]
                        }}
                    />
                </div>
                <input type="search" placeholder='Type City' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                {!city ? (<p>error occured</p>) : (
                    <>
                        <div className="weather_info">
                            <h1 className="weather_info_cityName"><a href={cityLink}>{search}</a></h1>
                            <h2 className='weather_info_Temp'>{city.temp}</h2>
                            <div className="weather_info_minmax">
                                <p>Min <span>{city.temp_min} C*</span></p>
                                <p>Max <span>{city.temp_max} C*</span></p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Weather
