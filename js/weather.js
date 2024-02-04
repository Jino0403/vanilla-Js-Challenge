const weatherDiv = document.querySelector('#weather')

function successMap(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  console.log(position, lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.6406016&lon=127.0317056&appid=6ac0e6fdc7018f8f3360565e8c29f023&units=metric&lang=kr`
  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      const cityName = document.querySelector('#weather span:first-child')
      const weather = document.querySelector('#weather span:last-child')

      cityName.innerText = data.name
      weather.innerText = `${data.weather[0].description}(${data.weather[0].main})`
    })
}

function errorMap() {
  alert('load ')
}

navigator.geolocation.getCurrentPosition(successMap, errorMap)
