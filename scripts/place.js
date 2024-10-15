let temperature = 10
let windSpeed = 5

const calculateWindChill = (temp, windSpeed) => {
    return(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}

const windChillEle = document.querySelector(".wind-chill")

if(temperature <= 10 && windSpeed >= 4.8){
    let result = calculateWindChill(temperature, windSpeed)
    windChillEle.innerText = result.toFixed(1)
}
else{
    windChillEle.innerText = "NA"
}