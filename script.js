// let weather_icon=document.getElementById('weather-icon');?
let temperature=document.querySelector("#temperature span");
let main = document.querySelector(".main");
let input=document.getElementById("input");
let btn=document.querySelector(".btn");
let Cityname=document.querySelector(".cityname");
let Country=document.querySelector(".country");
let Pressure=document.querySelector(".pressure");
let Humidity=document.querySelector(".humidity");
let Sunrise=document.querySelector(".sunrise");
let Description=document.querySelector(".description");
let below = document.querySelector(".below");
let loader = document.querySelector("loader");

// weather_icon.src="./sun1.svg";
btn.addEventListener("click",()=>{
    // setTimeout(weather, );
    // function weather() {
        // temperature.innerText = loader;
        temperature.style.fontSize="10px";
        let cityname=input.value;
        console.log(cityname);
        let apiKey = '462429da66532c5f56391822f06b19f3';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=${apiKey}`;
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            main.style.height = '550px';
            console.log(data);
            let temp=Math.floor(data.main.temp-273);
            temperature.innerText = temp + '\u00B0' + 'C';
            temperature.style.color = "skyblue";
            temperature.style.fontSize = "50px";
            console.log(temp);
            below.style.display = "block";
            Cityname.innerText = 'Cityname: '+data.name;
            Country.innerText = 'Country: '+data.sys.country;
            Pressure.innerText = 'Pressure: '+data.main.pressure+' hPa';
            Humidity.innerText = 'Humidity: '+data.main.humidity+"";
            Sunrise.innerText = 'Sunrise: '+new Date(data.sys.sunrise).toLocaleTimeString();
            Description.innerText = 'Discription: '+data.weather[0].description;
            console.log(new Date(data.sys.sunrise).toLocaleTimeString())
            console.log(new Date(data.sys.sunset))
            });
    // }    
});