var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result =JSON.parse(request.response);
    var final =result.map((ele)=>ele.population)
    var res=final.reduce((acc,ele)=>acc+ele);
    console.log(res)
    
    }
    

    
