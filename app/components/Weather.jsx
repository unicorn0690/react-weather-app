import React, {Component} from 'react'
import WeatherForm from '../components/WeatherForm'
import WeatherMessage from '../components/WeatherMessage'
import OpenWeatherMap from '../api/openWeatherMap'
import ErrorModal from '../components/ErrorModal'

export default class Weather extends Component {
    constructor () {
        super ()

        this.state = {
            isLoading: false,
            errorMessage: undefined
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
            this.setState({isLoading: false, errorMessage: errorMessage.message})
        })
    }

    render() {
        let {isLoading, location, temp, errorMessage} = this.state

        const renderMessage = () => {
            if(isLoading){
                return <h3 className='text-center'>Fetching weather...</h3>
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }

        const renderError = () => {
            if(typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage} />
            }
        }

        return (
            <div>
                <h1 className='text-center'>Weather Page</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}
