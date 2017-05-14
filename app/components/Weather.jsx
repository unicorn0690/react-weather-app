import React, {Component} from 'react'
import WeatherForm from '../components/WeatherForm'
import WeatherMessage from '../components/WeatherMessage'
import OpenWeatherMap from '../api/openWeatherMap'

export default class Weather extends Component {
    constructor () {
        super ()

        this.state = {
            isLoading: false
        }
    }

    handleSearch = (location) => {

        this.setState({isLoading: true})

        OpenWeatherMap.getTemp(location).then((temp) => {
            this.setState ({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, (errorMessage) => {
            alert(errorMessage)
            this.setState({isLoading: false})
        })
    }

    render() {
        let {isLoading, location, temp} = this.state

        const renderMessage = () => {
            if(isLoading){
                return <h3 className='text-center'>Fetching weather...</h3>
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }

        return (
            <div>
                <h1 className='text-center'>Weather Page</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
}
