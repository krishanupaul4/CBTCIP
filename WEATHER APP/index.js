
document.querySelector("button").addEventListener("click",checkweather);
const apikey="dfdcf520498f60a1ffbb4edd4c15d42b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl2="https://api.openweathermap.org/data/2.5/forecast?q=";
async function checkweather(){
    const searchbox= document.querySelector("input").value;
    if(searchbox===''){
        document.querySelector(".lloc").innerHTML="Enter Location";
        return;
    }
    const response = await fetch(apiurl +searchbox+ "&appid=dfdcf520498f60a1ffbb4edd4c15d42b");
    var data = await response.json();
    console.log(data);
    if(data.name.toLowerCase()!=searchbox.toLowerCase()){
        document.querySelector(".lloc").innerHTML="Invalid Location";
        return;

    }
    document.querySelector(".lloc").innerHTML=data.name;
    document.querySelector(".ttemp").innerHTML="🌡️"+Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML="💧"+data.main.humidity+"%";
    document.querySelector(".wind").innerHTML="💨"+data.wind.speed+"km/hr";



    if(data.weather[0].main === "Clouds"){
        document.querySelector(".image img").setAttribute("src","clouds.png");
        document.body.style.backgroundImage="url('cloudybg.jpg')";
    }else if(data.weather[0].main === "Clear"){
        document.querySelector(".image img").setAttribute("src","clear.png");
        document.body.style.backgroundImage="url('clearbg.webp')";
    }else if(data.weather[0].main === "Rain"){
        document.querySelector(".image img").setAttribute("src","rain.png");
        document.body.style.backgroundImage="url('rainbg.png')";
    }
    else if(data.weather[0].main === "Mist"){
        document.querySelector(".image img").setAttribute("src","mist.png");
        document.body.style.backgroundImage="url('mistbg.png')";
    }else if(data.weather[0].main === "Snow" ){
        document.querySelector(".image img").setAttribute("src","snow.png");
        document.body.style.backgroundImage="url('snowbg.png')";
    }else if(data.weather[0].main === "Haze"){
        document.querySelector(".image img").setAttribute("src","haze.png");
        document.body.style.backgroundImage="url('hazebg.webp')";
    }
    const response2 = await fetch(apiurl2 +searchbox+ "&appid=dfdcf520498f60a1ffbb4edd4c15d42b");
    var data = await response2.json();
    document.querySelector(".text1").innerHTML=data.list[0].dt_txt;
    document.querySelector(".text2").innerHTML=data.list[1].dt_txt;
    document.querySelector(".text3").innerHTML=data.list[2].dt_txt;
    document.querySelector(".text4").innerHTML=data.list[3].dt_txt;
    document.querySelector(".text5").innerHTML=data.list[4].dt_txt;

    document.querySelector(".t1").innerHTML="🌡️"+Math.round(data.list[0].main.temp-273)+"°C";
    document.querySelector(".t2").innerHTML="🌡️"+Math.round(data.list[1].main.temp-273)+"°C";
    document.querySelector(".t3").innerHTML="🌡️"+Math.round(data.list[2].main.temp-273)+"°C";
    document.querySelector(".t4").innerHTML="🌡️"+Math.round(data.list[3].main.temp-273)+"°C";
    document.querySelector(".t5").innerHTML="🌡️"+Math.round(data.list[4].main.temp-273)+"°C";

    document.querySelector(".d1").innerHTML=data.list[0].weather[0].description;
    document.querySelector(".d2").innerHTML=data.list[1].weather[0].description;
    document.querySelector(".d3").innerHTML=data.list[2].weather[0].description;
    document.querySelector(".d4").innerHTML=data.list[3].weather[0].description;
    document.querySelector(".d5").innerHTML=data.list[4].weather[0].description;

    
    
    document.querySelector(".box1").style.display='block';
    


}