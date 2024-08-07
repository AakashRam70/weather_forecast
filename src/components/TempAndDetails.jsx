import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, humidity, feels_like, speed }, units }) => {
    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feels_like.toFixed()}${units === "metric" ? "°C" : "°F"}`,
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
        },
    ];

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max.toFixed()}${units === "metric" ? "°C" : "°F"}`,
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min.toFixed()}${units === "metric" ? "°C" : "°F"}`,
        },
    ];

    return (
        <div className="p-4">
            <div className="flex items-center justify-center py-6 text-xl md:text-lg sm:text-base text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between py-3">
                <img src={icon} alt="weather icon" className="w-20" />
                <p className="text-5xl md:text-4xl sm:text-3xl">{`${temp.toFixed()}${units === "metric" ? "°C" : "°F"}`}</p>

                <div className="flex flex-col space-y-3 items-start mt-4 md:mt-0">
                    {verticalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="flex font-light text-sm md:text-xs sm:text-xs items-center justify-center">
                            <Icon size={18} className="mr-1" />
                            {`${title}: `}
                            <span className="font-medium ml-1">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-3 md:space-y-0 md:space-x-10 text-sm md:text-xs sm:text-xs py-3">
                {horizontalDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="flex flex-row items-center">
                        <Icon size={30} />
                        <p className="font-light ml-1">
                            {`${title}`}
                            <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TempAndDetails;
