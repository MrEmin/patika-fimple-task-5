# Türkiye Weather Forecast App

This application is developed to display a week-long weather forecast for all cities in Türkiye. It's built using React and Context API. OpenWeather API is used to access weather data.

## Requirements

- The application is built using React and Context API.
- Weather data is fetched through OpenWeather API or any preferred API.
- Upon initial page load, weather information for a chosen city is displayed by default.
- If the user grants location access, weather information for the user's current location is displayed.
- The current day is highlighted with a specific background and border.
- Each card displaying the days includes the day's name, weather condition icon (sunny, rainy, snowy, partly cloudy), and the highest and lowest temperatures.
- Access to different cities' weather reports is enabled through a dropdown menu.

## Installation

1. Clone the project: `git clone https://github.com/MrEmin/patika-fimple-task-5.git`
2. Navigate to the project directory: `cd patika-fimple-task-5`
3. Install required packages: `npm install`

## Usage

1. Inside the project directory, start the application: `npm run dev`
2. View the application in your browser by going to `http://localhost:5173/`.
3. Weather information will be displayed upon initial page load or upon granting location permission.
4. Select a different city from the dropdown menu to view its weather report.

## Live Project

The live version of this project can be accessed [here](https://patika-weather.netlify.app/).

## Resources

- [OpenWeather API Documentation](https://openweathermap.org/api)

## Additional Information

This project has been developed using the [OpenWeather API](https://openweathermap.org/api). You might need to add your API key to the `.env` file. Please refer to the API documentation for more information.
