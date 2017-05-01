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
        let _this = this

        _this.setState({isLoading: true})

        OpenWeatherMap.getTemp(location).then(function(temp){
            _this.setState ({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
            alert(errorMessage)
            _this.setState({isLoading: false})
        })
    }

    render() {
        let {isLoading, location, temp} = this.state

        const renderMessage = () => {
            if(isLoading){
                return <h3>Fetching weather...</h3>
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }

        return (
            <div>
                <h3>Weather Page</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
}
