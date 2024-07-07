import { useEffect, useState } from "react";
import Forcast from "./components/Forcast";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";
import Inupts from "./components/Index";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from "./components/Heading";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: 'ahmedabad' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {

    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather().then(data => console.log(data));
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700'
    return "from-yellow-600 to-orange-700";
  }

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-6 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 text-white ${formatBackground()}`}>
      <Heading />
      <TopButtons setQuery={setQuery} />
      <Inupts setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forcast title='3 hour step forecast' data={weather.hourly} units={units} />
          <Forcast title='daily forecast' data={weather.daily} units={units} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  )
}

export default App;