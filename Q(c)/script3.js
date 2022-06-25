//Q(c). Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response); 
  
  result.forEach((item)=>{
    console.log("Country- "+item.name+" Capital- "+item.capital+" Flag- "+item.flag);
  });
  
}