var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result =JSON.parse(request.response);
    var res =result.filter((ele)=>ele.continents)
   var final=res.map((ele)=>ele.continents)
   console.log(final);
    
     
}
    
