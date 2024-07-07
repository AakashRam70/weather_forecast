import React, { useState, useEffect } from 'react';

const Heading = () => {
    const [gradientColors, setGradientColors] = useState(['from-red-400', 'via-yellow-400', 'to-green-400']);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateGradientColors();
        }, 21000); // Change colors every 21 seconds (10.5 seconds in and 10.5 seconds out)

        return () => clearInterval(interval);
    }, []);

    const rotateGradientColors = () => {
        const newColors = [...gradientColors];
        const lastColor = newColors.pop();
        newColors.unshift(lastColor);
        setGradientColors(newColors);
    };

    return (
        <h1 className="relative text-center text-transparent bg-gradient-to-r {...gradientColors} bg-clip-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold shadow-md md:shadow-lg">
            <span className="absolute inset-0 z-0 text-white">ANR Weather Forecast</span>
            <span className="relative z-10">ANR Weather Forecast</span>
        </h1>
    );
};

export default Heading;
