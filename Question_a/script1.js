//Q(a). Get all the countries from Asia region using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response); 
  
  var res=result.filter((ele)=>ele.region==="Asia");
  
  var country=[];
  for (var i in res){
     country.push(res[i].name);
  }
   console.log(country);
}