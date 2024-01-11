var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result =JSON.parse(request.response);
    
   
    var final=result.map(element=>console.log(element.currencies.USD))
   // var final2=final.map((ele)=>console.log(ele.continents))
    console.log(final);
    }
     
    
    
