import { useEffect, useState } from "react";
import axios from 'axios';
function Search({ cityData, setCityData }) {
    const [city, setCity] = useState("");
    const [data, setData] = useState([]);
    // const [selectCity, setSelectCity] = useState(null);
    const [dropDownList, setDropDownList] = useState(false);
    const [slicedData, setSlicedData] = useState([]);
    const [showMore, SetShowMore] = useState(false);

    const findCityKey = import.meta.env.VITE_API_KEY;
    // console.log(findCityKey)
    const clickHandler = async () => {
        if (!city) return;
        try {
            // console.log(city)
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${findCityKey}`)
            if (response) {
                setData(response.data);
                setSlicedData(response.data.slice(0, 2));
                // console.log(data);
                // console.log(data[0].name);
                // console.log(data.length);
                setDropDownList(true);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    };
    const clickLiHandler = async (place) => {
        if (!data.length) return;
        setDropDownList(false);
        SetShowMore(false);
        // setSelectCity(place);
        const { lat, lon } = place;
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${findCityKey}`);
            if (response) {
                setCityData(response.data);
                // console.log(cityData);
                // console.log(cityData.city;   
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    function showMoreHandler() {
        SetShowMore(true);
    }
    return (
        <div className="border-3 rounded-xl border-[#f0f0f0] mx-28 bg-[#E6E6FA] h-14 p-3 text-[#2E3338] font-semibold flex ">
            <h1 className="text-blue-500 font-bold ml-28 mr-36 text-xl">SkyCast</h1>
            <input type="text" placeholder="Search City" className="border-2 border-[#e0cdcd] rounded ml-18 px-5 text-gray-700 shadow-sm 
            ring-slate-500 placeholder:text-gray-400 text-sm focus:ring-2 focus:ring-gray-200 w-72"
                onChange={(e) => setCity(e.target.value)}
            />
            {!showMore && dropDownList && slicedData.length > 0 &&
                <ul className="absolute border-2 border-slate-400 rounded  text-gray-700 shadow-sm bg-[#E6E6FA]  text-sm  z-10 w-72 left-120 top-22">
                    {slicedData.map((place, index) => (
                        <li key={index} className="p-2 cursor-pointer hover:bg-gray-300"
                            onClick={() => clickLiHandler(place)}>
                            {place.name},{place.state}
                        </li>

                    ))}
                    <li className="p-2 cursor-pointer hover:bg-gray-300" onClick={showMoreHandler}> Show More</li>
                </ul>
            }
            {showMore && dropDownList && data.length > 0 &&
                <ul className="absolute border-2 border-slate-400 rounded  text-gray-700 shadow-sm bg-[#E6E6FA]  text-sm  z-10 w-72 left-120 top-22">
                    {data.map((place, index) => (
                        <li key={index} className="p-2 cursor-pointer hover:bg-gray-300"
                            onClick={() => clickLiHandler(place)}>
                            {place.name},{place.state}
                        </li>

                    ))}
                </ul>
            }
            <button className=" border-2 border-[#e0cdcd] rounded  hover:bg-[#d3d3de]"
                onClick={clickHandler}
            >🔍</button>
        </div>
    );
}
export default Search;