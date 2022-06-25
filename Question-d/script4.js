//Q(d). Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response); 
 
 var population=[];

 for(var i in result){
    population.push(result[i].population);
 }
 var res=population.reduce((acc,cv)=>acc+cv);

    console.log("Total Population: "+res);
  
  
}