import React from 'react';

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country } }) => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-xl md:text-lg sm:text-base font-extralight'>
                    {formattedLocalTime}
                </p>
            </div>
            <div className='flex items-center justify-center my-3'>
                <p className='text-3xl md:text-2xl sm:text-xl font-medium'>{`${name}, ${country}`}</p>
            </div>
        </div>
    );
}

export default TimeAndLocation;
