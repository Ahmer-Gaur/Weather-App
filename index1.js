console.log("working..")

let input = document.getElementById("input-val");
let btn = document.getElementById("btn");
let tempVal = document.getElementById("temp-val")
let humVal = document.getElementById("hum-val")
let windSpeed = document.getElementById("wind-val")

btn.addEventListener("click", function(){
      
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +input.value+ "&appid=ff092519bc84a7badf9349529e5ce1d5")
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    tempVal.innerText = `${data.main.temp}`
    humVal.innerText = `${data.main.humidity}`
    windSpeed.innerText = `${data.wind.speed}`

})

})






// fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=ff092519bc84a7badf9349529e5ce1d5"
// )
// .then((response) => response.json())
// .then((data) => {
    
//     tempValue.innerText = `${data.main.temp}°k`
//     tempType.innerText = `${data.weather[0].description}`
//     humidity.innerText = `${data.main.humidity}%`
//     speed.innerText =` ${data.wind.speed}km/h`
// })

// .catch((error) => {
//     console.log("enter correct city name", error);
//     error.innertext = "uh entered a wrong city name"
// })

// }
// )
