// const APIKEY = "ef8e4c48abd8c90e863bc95b894ef532"
// link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ef8e4c48abd8c90e863bc95b894ef532`

function handleSubmit(){
    city = document.getElementsByName('city')[0].value;
    city = city.toLowerCase()
    city = city.replace(" ", "-")
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=ef8e4c48abd8c90e863bc95b894ef532`
    doAPICall(url);
}
button = document.getElementById('button');
button.addEventListener('click', handleSubmit);

async function doAPICall(url){
    let response = await axios.get(url)
    console.log(response)
    console.log(response.data.main.temp_max)
    cityName = document.getElementById('city-name')
    cityName.innerText = response.data.name

    tempHigh = document.getElementById('temp-high')
    tempHigh.innerText = `${response.data.main.temp_max}°F`

    tempLow = document.getElementById('temp-low')
    tempLow.innerText = `${response.data.main.temp_min}°F`

    humidity = document.getElementById('humidity')
    humidity.innerText = `${response.data.main.humidity}%`

    forecast = document.getElementById('forecast')
    forecast.innerText = response.data.weather[0].main


}