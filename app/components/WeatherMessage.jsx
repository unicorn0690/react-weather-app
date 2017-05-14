import React from 'react'

const WeatherMessage = ({temp, location}) => {
    return (
        <h3 className='text-center'>It is {temp} in {location}</h3>
    )
}

export default WeatherMessage
