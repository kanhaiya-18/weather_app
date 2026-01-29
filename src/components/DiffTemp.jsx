function DiffTemp({ cityData }) {
    const minTemp = Math.round(cityData?.list[0].main.temp_min - 273.15);
    const maxTemp = Math.round(cityData?.list[0].main.temp_max - 273.15);
    return (
        cityData && (
        <div className="border-3  border-[#f0f0f0] bg-[#E6E6FA] h-92 rounded-xl w-114 top-5 relative right-24">
            <div className="grid grid-cols-1 gap-3 p-5">
                <div className="p-3 mt-8  text-xl font-bold text-center  bg-blue-200 rounded-xl">
                    <span className=" text-gray-600 font-semibold">  Minimum Temp  | </span> {minTemp}°C </div>
                <div className="p-3  text-xl font-bold text-center mt-8  bg-blue-200 rounded-xl"> <span className=" text-gray-600 font-semibold">  Maximum Temp  |  </span> {maxTemp}°C </div>
            </div>
        </div>
        )
    )
}
export default DiffTemp;