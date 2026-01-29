import { useState } from "react";
import Hero from "./components/Hero"
import Search from "./components/Search"
import Description from "./components/Description";
import DiffTemp from "./components/DiffTemp";
function App() {
  const [cityData, setCityData] = useState(null);
  return (
    <div className="min-h-screen bg-linear-to-br from-[#C9D9F6]  to-[#9BB4FF] pt-12 flex flex-col">
      <Search setCityData={setCityData} cityData={cityData} />
      <div className="flex">
        <div className="flex flex-col">
          <Hero cityData={cityData} />
          <Description cityData={cityData} />
        </div>

        <div>
          <DiffTemp cityData={cityData} />
        </div>
      </div>
    </div>
  )
}

export default App
