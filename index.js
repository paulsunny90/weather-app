fetch("http://api.weatherapi.com/v1/current.json?key=f50624a11938419891291458251410&q=London&aqi=no")
.then(response =>response.json())
// .then(data => console.log(data))    


.then(data=>{
    if(data){
    let location = data.location.name;
    let humidity= data.current.humidity
    let feelslike_c=data.current.feelslike_c
    let temp_c=data.current.temp_c
    let wind=data.current.wind_kph
    let precip=data.current.precip_in
    let windchill=data.current.windchill_f
    let windchill_c=data.current.windchill_c
    let temp_f=data.current.temp_f
    let wind_mph=data.current.wind_mph
     



    document.getElementById("location").innerHTML=location
    document.getElementById("Feelslike").innerHTML=feelslike_c+"°"
    document.getElementById("Humidity").innerHTML=humidity+"%"
    document.getElementById("temp").innerHTML=temp_c+"°"
    document.getElementById("Wind").innerHTML=wind+"km/h"
    document.getElementById("Precipitation").innerHTML=precip+"mm"
    document.getElementById("windchill").innerHTML=windchill+"°"
    document.getElementById("windchill_c").innerHTML=windchill_c+"°"
    document.getElementById("tempf").innerHTML=temp_f+"°"
    document.getElementById("temp-l").innerHTML=temp_c+"°"
    document.getElementById("mon").innerHTML=wind+"°"
    document.getElementById("Monday").innerHTML=wind_mph+"°"
    document.getElementById("tue").innerHTML=humidity+"°"
    document.getElementById("te").innerHTML=temp_f+"°"
    document.getElementById("Wednes").innerHTML=windchill_c+"°"
    document.getElementById("Wed").innerHTML=wind_mph+"°"
    document.getElementById("fr").innerHTML=temp_c+"°"
    document.getElementById("fri").innerHTML=temp_f+"°"
    document.getElementById("sa").innerHTML=windchill_c+"°"
    document.getElementById("sat").innerHTML=wind+"°"
    document.getElementById("3pm").innerHTML=windchill+"°"
    document.getElementById("4pm").innerHTML=temp_f+"°"
    document.getElementById("5pm").innerHTML=temp_c+"°"
    document.getElementById("6pm").innerHTML=wind_mph+"°"
    document.getElementById("7pm").innerHTML=windchill_c+"°"
    document.getElementById("8pm").innerHTML=wind+"°"
    document.getElementById("9pm").innerHTML=windchill_c+"°"
    document.getElementById("10pm").innerHTML=humidity+"°"
    let time=new Date()
    let Month=time.toDateString('default',{ day: 'long'},)
     document.getElementById("dats").innerHTML=Month 
    }
    else{
     window.location.href="error.html"

         
    }
    

})
// function show(){
//     if(data){
//     addEventListener("online",(e)=>{
//     document.getElementById("hid").style.display = "flex";
//      })

// }
// else if(data){
//       addEventListener("offline",(e)=>{
//      document.getElementById("hid").style.display = "none";
//     })

// }
// else{
//     addEventListener("offline",(e)=>{
      
//      })
// }
// }

// .catch(error => {
//     console.error("Error fetching weather data:", error);
//     document.getElementById("hid").style.display = "none";
//     document.getElementById("popup").style.display = "flex";
//   });




// let input = document.getElementById("search");
// let listItems = document.querySelectorAll("#names li");










































// input.addEventListener("keyup", function() {
//   let filter = input.value.toLowerCase();

//   listItems.forEach(item => {
//     let text = item.textContent.toLowerCase();
//     if (text.includes(filter)) {
//       item.style.display = "";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });




// function countDown(n) {
//   if (n === 0) {
//     console.log("Done!");
//     return; // 🛑 Base case — stops recursion
//   }

//   console.log(n);
//   countDown(n - 1); // 🔁 Recursive call
// }

// countDown(5);


function asd(){
    console.log('hh')

}
asd(
    function(){
        console.log("a")

    })
    asd()

    