const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Kiev',
            temp: 8
        };
    },

    handleSearch: function(location) {
        let that = this;
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp
            })
        }, function(errorMessage) {
            alert(errorMessage);
        });
    },

    render: function () {
        let {temp, location} = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    }
});

module.exports = Weather;
