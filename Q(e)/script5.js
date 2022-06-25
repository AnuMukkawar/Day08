//Q(e). Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
  var result=JSON.parse(request.response); 
 

  var res=result.filter((ele)=>{
      for(var i in ele.currencies)
      {
        if(ele.currencies[i].code=="USD"){
          return ele;
        }
      }
  });

  for(var i in res){
    console.log(res[i].name);
  }

}