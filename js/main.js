var Rrow=document.getElementById("Row");
var data=[];
var data2=[];
var ssearch=document.getElementById("sear");
var btn=document.getElementById("but");
// console.log(ssearch);
// ssearch.innerHTML="dd";
// console.log(ssearch.value);






 async function getdata(country){
     var response2=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3acb9d4bf94143eb9e3192635240401&q=${country}&days=3&aqi=no&alerts=no`);
var wdata2=await response2.json(); JSON: 
data2=wdata2;
    //  let z=Object.entries(data).length;
    //  console.log(z);
    btn.onclick=function(){
        getdata(ssearch.value);
        // var input = document.getElementById("myInput");
ssearch.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
    }
    display();




    

}


 getdata("london");
 function display(){

   let days = [ "sunday", "Monday", "Tuesday", "wesnday", "thrusday", "friday","saturday"];

    let d = new Date(data2.forecast.forecastday[0].date);
    let day = days[(d.getDay())];
        
   let d2=new Date(data2.forecast.forecastday[1].date);
    let day2=days[(d2.getDay())];

   let d3=new Date(data2.forecast.forecastday[2].date);
    let day3=days[(d3.getDay())];
   

    var cartona='';
     for(var i=0;i<5;i++){

         cartona=`
         
         <div class="d-flex  dd">
         
         <div class="col-md-4 ">
         <div class="item  p-2">
 
              <div class="head   mb-5">
              <h4>${day}
              </h4>
              <h4 >${data2.location.localtime}</h4><br>
              
              <div class="lo"> <h5 class="hcolor">${data2.location.name}</h5></div>
          </div>
      
       
          <div class="middle d-flex justify-content-between p-4 mt-3">

          <h1 class=" hc">${data2.current.temp_c}°C</h1>
          <img src="http:${data2.current.condition.icon}" class="hc" >
      </div>
 
      <h6 class="con mb-2">${data2.current.condition.text}</h6>
      <div class="icons d-flex justify-content-around my-4">
      <i class="fa-solid fa-umbrella "><span class="ic">${data2.current.cloud}%</span></i>
      <i class="fa-solid fa-wind"><span class="ic">  ${data2.current.wind_degree}m/h</span></i>
      <i class="fa-solid fa-compass"><span class="ic">${data2.current.wind_dir}</span></i>
 
  </div>
          </div>
      </div>

             <div class="col-md-4  ">
          <div class="item1  p-2">
               <div class="head1   mb-3 d-flex justify-content-center">
               <h4 >${day2}
               </h4>
           </div>

           <h5 class="hcolor">${data2.location.country}</h5>
 
           <div class="middle text-center align-items-center justify-content-center p-4">
           <img src="http:${data2.forecast.forecastday[1].day.condition.icon}" class="hc mb-4" >
           <h1 class=" hc mb-4">${data2.forecast.forecastday[1].day.maxtemp_c}°C</h1>
           <h6 class="con mb-4">${data2.forecast.forecastday[1].day.condition.text}</h6>
       </div>
           </div>
       </div>
             <div class="col-md-4  ">
          <div class="item  p-2">
 
               <div class="head   mb-3 d-flex justify-content-center">
               <h4 >${day3}
               </h4>
          
           </div>
 
           <h5 class="hcolor">${data2.location.country}</h5>
 
           <div class="middle text-center align-items-center justify-content-center p-4">
           <img src="http:${data2.forecast.forecastday[2].day.condition.icon}" class="hc mb-4" >
           <h1 class=" hc mb-4">${data2.forecast.forecastday[2].day.maxtemp_c}°C</h1>
           <h6 class="con mb-4">${data2.forecast.forecastday[2].day.condition.text}</h6>
       </div>
           </div>
      </div>
       
      </div>
         </div>
         </div>
        </div>
         `
     
   Rrow.innerHTML=cartona;

 }}
