apikey = "9a12aadfe03ae799c143a754350bffb7"

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#submit');
var city = document.querySelector('#cityoutput')
var tempmax = document.querySelector('#tempmax')
var tempmin = document.querySelector('#tempmin')
var fore = document.querySelector('#fore')
var humid = document.querySelector('#humid')

btn.addEventListener('click', function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&appid=${apikey}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var temp_max = data['main']['temp_max']
        var temp_min = data['main']['temp_min']
        var forecast = data['weather']['0']['description']
        var humidity = data['main']['humidity']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        tempmax.innerHTML = `Temp High: <span>${temp_max}</span>`
        tempmin.innerHTML = `Temp Low: <span>${temp_min}</span>`
        fore.innerHTML = `Forecast: <span>${forecast}<span>`
        humid.innerHTML = `Humidity: <span>${humidity} km/h<span>`
    })
    .catch(err => alert('You entered Wrong city name'))
})