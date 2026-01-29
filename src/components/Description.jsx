function Description({ cityData }) {
    const feelsLike = Math.round(cityData?.list[0].main.feels_like - 273.15);
    return (
        <div className="h-56 mx-28 rounded-xl w-175">
            {cityData &&
                <>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Wind Speed </div> {cityData.list[0].wind.speed} mps</div>
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Weather </div> {cityData.list[0].weather[0].main}</div>
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Feels Like </div>{feelsLike}°C</div>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Visibility </div> {cityData.list[0].visibility} mt</div>
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Pressure </div> {cityData.list[0].main.pressure} hPa</div>
                        <div className="border-3 border-[#f0f0f0] rounded-xl text-xl bg-[#E6E6FA] p-3 font-bold text-center"> <div className="text-sm text-gray-600 font-semibold">Humidity</div> {cityData.list[0].main.humidity}%</div>
                    </div>
                </>
            }
        </div>
    )
}
export default Description;