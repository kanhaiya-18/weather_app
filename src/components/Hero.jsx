import clouds from "../assets/clounds.png";
function Hero({ cityData }) {
    let time = (new Date()).toLocaleTimeString();
    const feelsLike = Math.round(cityData?.list[0].main.feels_like - 273.15)
    const currentTemp = Math.round(cityData?.list[0].main.temp - 273.15);
    return (
        <div className="border-3  border-[#f0f0f0]  bg-[#E6E6FA] ml-28 my-5 rounded-xl w-175">
            <h1 className="text-2xl font-bold text-center mt-3 text-[#2E3338] font-mono">
                {!cityData && "select your city"}
                {cityData && cityData.city.name}
                {cityData && ","}
                {cityData && cityData.city.country}
            </h1>
            {cityData &&
                <div className="flex justify-between mx-15 text-gray-600 font-semibold text-sm ">
                    <div className="flex flex-col">
                        <div className="font-semibold">Current Weather</div>
                        <div className="text-lg">{time}</div>
                    </div>
                </div>
            }
            {cityData &&
                <div className=" text-[#2E3338] font-bold  flex justify-evenly mt-4 mb-2 mx-16">
                    <img src={clouds} alt="cloud image" className="h-13 w-13" />
                    <span className="text-5xl text-[#2E3338] flex font-bold">{cityData && currentTemp}
                        <span className="text-sm  text-gray-600  ">{cityData && "°C"}
                            <span className="ml-10 pl-1 -mt-3.75 flex  flex-col ">
                                <div className="text-[#2E3338]">{cityData.list[0].weather[0].main}</div>
                                <div className=" text-[#2E3338] text-[18px]"> <span className=" text-gray-600">Feels Like</span> {feelsLike}°C</div>
                            </span>
                        </span>

                    </span>



                </div>
            }
            <div></div>


        </div>
    )
}
export default Hero;