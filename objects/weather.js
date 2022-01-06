var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},


]
var weatherData={}
for(let data of dataset){
    let distName=data.district
    let curTemp=data.temparature
    if (distName in weatherData) {
        let oldTemp=weatherData[distName]
        if (curTemp>oldTemp) {
            weatherData[distName]=curTemp
        }
    }
    else{
        weatherData[distName]=curTemp;

    }
}
console.log(weatherData);
